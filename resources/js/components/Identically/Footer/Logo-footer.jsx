import React from 'react';
import { Space } from 'antd';
import style from "../../../../css/Identically/footer.css";

const LogoFooter = () => (
    <Space>
        <div className="logo-footer" style={{ style }}>
            <div className="house-footer"><a href="{{ route('landing') }}" style={{ style }}>MyHouse</a></div>
            <div className="residential-footer" style={{ style }}>Управляющая Компания</div>
        </div>
    </Space>
);

export default LogoFooter;
