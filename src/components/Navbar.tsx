import React, {useEffect, useState} from 'react';
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from 'react-router-dom'
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from "@ant-design/icons";

import icon from '../images/cryptocurrency.png'

const Navbar = (): JSX.Element => {

    /**
     * we will use two useEffect for resize, first will check and runs only once.
     *
     */
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState<null | number | boolean>(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() =>{
        if(screenSize! < 768){
            setActiveMenu(false)
        }
        else{
            setActiveMenu(true)
        }
    },[screenSize])
    return(
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" style={{backgroundColor: '#fff'}}/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptonizer</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button>
            </div>

            { activeMenu && (
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined/>}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined/>}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    )
}


export default Navbar;