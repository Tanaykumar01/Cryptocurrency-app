import React, { useState } from 'react'
import {Select , Typography , Row , Col , Avatar , Card} from 'antd';
import moment from 'moment';
import img from '../images/demo-image.jpg'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const demoImage = img;

const {Text , Title} = Typography;
const {Option} = Select;
const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('crypto');
  const { data } = useGetCryptosQuery(100);
  const count = simplified ? 6 : 12;
  const {data : cryptoNews} = useGetCryptoNewsQuery({newsCategory , count});

  console.log(cryptoNews);
  if(!cryptoNews?.articles) return <Loader />;

  return (

    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.articles.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.title}</Title>
                <img src={news?.urlToImage || demoImage} alt="" />
              </div>
              <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={demoImage} alt="" />
                  <Text className="provider-name">{news?.source?.name}</Text>
                </div>
                <Text>{moment(news.publishedAt).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
      </Row>
      
  )
};

export default News
