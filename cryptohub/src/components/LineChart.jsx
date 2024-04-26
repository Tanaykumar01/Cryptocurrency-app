import React from 'react'
import{Line} from 'react-chartjs-2';
import {Col , Row , Typography} from 'antd';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const LineChart = ({coinHistory , currentPrice , coinName}) => {

    if (!coinHistory || !coinHistory.data || !coinHistory.data.history) {
        return <div>No data available for the chart.</div>;
    }


    const coinPrice = coinHistory?.data?.history.map(item => item.price);
    const coinTimeStamp = coinHistory?.data?.history.map(item =>
    new Date(item.timestamp).toLocaleDateString()
    );

    const data = {
        labels: coinTimeStamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };

      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };


  return (
    <>
        <Row className="chart-header">
            <Typography.Title level={2} className="chart-header">
                {coinName} price chart
            </Typography.Title>
            <Col className="price-container">
                <Typography.Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Typography.Title>
                <Typography.Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Typography.Title>
            </Col>
        </Row>
        <Line data ={data} options={options}/>
    </>
  )
}

export default LineChart
