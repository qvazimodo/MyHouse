import React from 'react';
import { Space } from 'antd';
import style from "../../css/logo_footer.css";

const Logo_footer = () => (
    <Space>
        <div className="logo-footer" style={{ style }}>
            <div className="house-footer"><a href="landing" style={{ style }}>MyHouse</a></div>
            <div className="residential-footer" style={{ style }}>Управляющая Компания</div>
        </div>
    </Space>
);

export default Logo_footer;
