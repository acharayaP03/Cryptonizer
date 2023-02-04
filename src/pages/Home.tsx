import React from 'react';
import { Link } from 'react-router-dom';

import millify from "millify";
import { Typography, Row, Col, Statistic, Spin } from "antd";
import {useGetCryptosQuery} from "../services/cryptoApi";
import {Cryptocurrencies} from "./index";
import News from "./News";

const { Title }  = Typography;


const Home = (): JSX.Element =>{
    // @ts-ignore
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data.stats

    if(isFetching) return <Spin />;



    return(
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="Total Market Caps" value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={2} className="home-title">
                    <Link to='/'>Show more</Link>
                </Title>
            </div>
            <Cryptocurrencies/>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={2} className="home-title">
                    <Link to='/'>Show more</Link>
                </Title>
            </div>
            <News/>
        </>
    )
}

export default Home