import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {Navbar} from './components'
import {Cryptocurrencies, CryptoDetails, Exchange, Home, News} from "./pages";
const App =  (): JSX.Element => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
               <Layout>
                   <div className="routes">
                       <Routes>
                           <Route path="/" element={<Home/>}/>
                       </Routes>
                       <Routes>
                           <Route path="/exchanges" element={<Exchange/>}/>
                       </Routes>
                       <Routes>
                           <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                       </Routes>
                       <Routes>
                           <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
                       </Routes>
                       <Routes>
                           <Route path="/news" element={<News/>}/>
                       </Routes>
                   </div>
               </Layout>
                <div className="footer">
                    <Typography.Text strong style={{ color: '#fff', textAlign: 'center'}}>
                        Cryptonizer <br/>
                        All rights reserved.
                    </Typography.Text>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchange</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App;