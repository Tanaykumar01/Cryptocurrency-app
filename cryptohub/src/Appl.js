import React from 'react'
import {Routes , Route, Link} from 'react-router-dom';
import {Navbar ,HomePage ,Exchanges ,Cryptocurrencies, CryptoDetails ,News} from './components'
import './App.css'
// import 'antd/dist/reset.css'
import { Layout, Space, Typography } from 'antd';

const Appl = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/exchanges" element={<Exchanges />} />
                        <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                        <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                        <Route exact path="/cryptocurrencies/crypto/:coinId" element={<CryptoDetails />} />
                        <Route exact path="/news" element={<News />} />
                    </Routes>
                </div>
            </Layout>
            <div className="footer">
                <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
                <Link to="/">
                    Cryptoverse Inc.
                </Link> <br />
                All Rights Reserved.
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>
        </div>
        
    </div>
  )
}

export default Appl
