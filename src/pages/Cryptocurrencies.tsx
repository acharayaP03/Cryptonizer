import React, {useState} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import {Card, Row, Col, Input, Spin} from 'antd';

import { useGetCryptosQuery } from "../services/cryptoApi";
interface Simplified {
    simplified?: Boolean
}
const Cryptocurrencies : React.FC<Simplified>= ({ simplified })=>{
    const count = simplified ? 10 : 100

    const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
    const [ cryptos, setCryptos] = useState(cryptosList?.data?.coins);


    if(isFetching) return <Spin />
    return(
        <>
            <Row gutter={[32,32]} className="crypto-card-container">
                {
                    cryptos?.map((currency: { id: string, rank: number, name: string, iconUrl: string, price: number, marketCap: number, change: number }) => (
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                            <Link to={`/crypto/${currency.id}`}>
                                <Card
                                    title={`${currency.rank}. ${currency.name}`}
                                    extra={<img className="crypto-image" src={currency.iconUrl}/>}
                                    hoverable
                                    >

                                    <p>Price: { millify(currency.price)}</p>
                                    <p>Price: { millify(currency.marketCap)}</p>
                                    <p>Price: { millify(currency.change)}</p>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default Cryptocurrencies