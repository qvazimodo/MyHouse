import React from 'react';
import { Space, Typography } from 'antd';
import style from "./css/logo-header.css";

const { Link } = Typography;

const Logo = () => (
    <Space>
            <div className="logo-house" style={{ style }}>
                <div className="house"><a href="landing" style={{ style }}>MyHouse</a></div>
                <div className="residential" style={{ style }}>Управляющая Компания</div>
            </div>
    </Space>
);
export default Logo;
