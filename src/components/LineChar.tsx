import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from "chart.js";


import { Col, Row, Typography } from 'antd';
const { Title } = Typography;
ChartJS.register(ArcElement, Tooltip, Legend);
interface ChartProps {
    coinHistory: { data: { change: number, history: [{ price: number | string, timestamp: string }] } },
    currentPrice: number | string,
    coinName: string
}
const LineChart: React.FC<ChartProps> = ({ coinHistory, currentPrice, coinName}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for(let i = 0; i < coinHistory?.data?.history?.length; i += 1){
        // @ts-ignore
        coinPrice.push(coinHistory.data.history[i].price);
        // @ts-ignore
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString())
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in AUD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }


    const options: ChartOptions ={
        scales: {
            // @ts-ignore
            yAxis: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }

    return(
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">{coinName} Price Chart</Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">
                        {
                            coinHistory?.data!.change
                        }%
                    </Title>
                    <Title level={5} className="current-price">Current { coinName } Price: $ { currentPrice }</Title>
                </Col>
            </Row>
            <Line data={data}/>
        </>
    )
}

export default LineChart;