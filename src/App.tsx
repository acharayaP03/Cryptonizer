import React from "react";
import { Link, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {Navbar} from './components'
const App =  (): JSX.Element => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                Main
            </div>
            <div className="footer">
                Footer
            </div>
        </div>
    )
}

export default App;