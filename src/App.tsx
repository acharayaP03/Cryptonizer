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
                           <Route path="/crypto/:coidId" element={<CryptoDetails/>}/>
                       </Routes>
                       <Routes>
                           <Route path="/news" element={<News/>}/>
                       </Routes>
                   </div>
               </Layout>
            </div>
            {/*<div className="footer">*/}
            {/*    Footer*/}
            {/*</div>*/}
        </div>
    )
}

export default App;