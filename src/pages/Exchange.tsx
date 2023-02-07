import React from 'react';
import millify from 'millify';
import {Collapse, Row, Col, Typography, Avatar, Select, Spin} from 'antd';
import HTMLReactParser from 'html-react-parser';
import {Option} from "antd/es/mentions";
import {useGetCryptosQuery} from "../services/cryptoApi";
//
// import { useGetExchangesQuery } from '../services/cryptoApi';
// import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchange = () => {

    const { data, isFetching } = useGetCryptosQuery(10);
    // const exchangesList = data?.data?.exchanges;
    // Note: To access this endpoint you need premium plan

    /**
     * 1.) we need to call get coin exchange api, which gives us coin exchanges - need one service to be created.
     * 2.) along with that we need to call reference currency uuid which gives currency
     * 3.) when user navigates to exchange we wil have a default state that will fetch initial api
     * 4.) from select option we will call api to get exchanges.
     */
    if (isFetching) return <Spin className="loader"/>;

    console.log('Exchange data: ', data)
    return (
        <>
            <Row>
                <Select defaultValue="Exchange coins" className="select-timeperiod exchange-select" placeholder="Select Currency" onChange={(value) => console.log('hereh')}>
                    {/*{ currencyReference && currencyReference.data.currencies.map(currency => <Option key={currency.uuid}>{currency.name}</Option>)}*/}
                    <Option>Default option</Option>
                </Select>
            </Row>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>
            <Row>
                {/* {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))} */}
            </Row>
        </>
    );
};

export default Exchange;
