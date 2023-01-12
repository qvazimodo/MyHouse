import React from 'react';
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

const Logo = () => (
    <Space>

            <div className="logo-house" style={{
                marginLeft: 300,
                marginTop: 20,
                }}>

                <Link className="house" href="landing" style={{
                    textDecoration: "none",
                    color: "#FFFFFF",
                }}>
                    MyHouse
                </Link>

                <div className="residential" style={{
                    marginLeft: -23,
                 }}>
                    Управляющая Компания
                </div>

            </div>

    </Space>

);

export default Logo;
