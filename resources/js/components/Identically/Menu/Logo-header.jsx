import React from 'react';
import { Space } from 'antd';
import style from "../../../../sass/header.css";


const LogoHeader = () => (
    <Space>
            <div className="logo-house" style={{ style }}>
                <div className="house"><a href='landing' style={{ style }}>MyHouse</a></div>
                <div className="residential" style={{ style }}>Управляющая Компания</div>
            </div>
    </Space>
);
export default LogoHeader;
