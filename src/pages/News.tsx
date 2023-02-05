import React, {useState} from 'react';
import {Select, Typography, Row, Col, Avatar, Card, Spin} from "antd";

import moment from 'moment';
import {useGetCryptoNewsQuery} from "../services/createCryptoNewsApi";
import {useGetCryptosQuery} from "../services/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;

interface Simplified {
    simplified?: Boolean
}

const News: React.FC<Simplified> = ({ simplified }) =>{
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')

    const { data: cryptoNews, isFetching, error } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
    const { data } = useGetCryptosQuery(100)


    const demoImage = 'https//coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

    if(isFetching) return <Spin className="loader"/>
    if(error) return <p>Opps error occured</p>

    // @ts-ignore
    return(
        <Row gutter={[24, 24]}>
            { !simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                        // @ts-ignore
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        { data?.data?.coins.map(({ name }: { name: string}) => <Option value={name}>{name}</Option>)}
                    </Select>
                </Col>
            )}

            {
                // @ts-ignore
                cryptoNews.value.map((news, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverable className="news-card">
                            <a href={news.url} target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className="news-title" level={4}>{ news.name}</Title>
                                    <img src={news?.image?.thumbnail?.contentUrl || demoImage } style={{ maxWidth: '200px', maxHeight: '100px'}}/>
                                </div>
                                <p>
                                    {
                                        news?.description > 100
                                            ? `${news.description.substing(0, 100)}...`
                                            : news.descripiton
                                    }
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                                        <Text className="provider-name">{ news.provider[0]?.name}</Text>
                                    </div>
                                    <Text>
                                        {
                                            // @ts-ignore
                                            moment(news.datePublished).startOf('ss').fromNow()
                                        }
                                    </Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default News