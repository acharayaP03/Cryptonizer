import React, {useEffect, useState} from 'react';
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
    const [ cryptos, setCryptos] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');

    console.log(cryptosList)
    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((coin: { name: string; }) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCryptos(filteredData)
    }, [cryptosList, searchTerm])

    if(isFetching) return <Spin className="loader"/>
    return(
        <>
            {/*
                Only show search bar on crypto page..
            */}
            {
                !simplified && (
                    <div className="search-crypto">
                        <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)}/>
                    </div>
                )
            }
            <Row gutter={[32,32]} className="crypto-card-container">
                {
                    cryptos?.map((currency: { uuid: string, rank: number, name: string, iconUrl: string, price: number, marketCap: number, change: number }) => (
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
                            <Link to={`/crypto/${currency.uuid}`}>
                                <Card
                                    title={`${currency.rank}. ${currency.name}`}
                                    extra={<img className="crypto-image" src={currency.iconUrl}/>}
                                    hoverable
                                    >

                                    <p>Price: { millify(currency.price)}</p>
                                    <p>Market Cap: { millify(currency.marketCap)}</p>
                                    <p>Daily Change: { millify(currency.change)}</p>
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