import React from 'react';
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

const Logo_footer = () => (
    <Space>

        <div className="logo-footer" style={{
            marginLeft: 20,
            marginTop: 10,
        }}>

            <Link className="house-footer" href="landing" style={{
                textDecoration: "none",
                color: "#FFFFFF",
                fontFamily: "Post No Bills Jaffna SemiBold",
                fontSize: "40px",
                fontWeight: 600,
                lineHeight: "54px",
                letterSpacing: 0,
                width: "100%",
                textAlign: "center"

            }}>
                MyHouse
            </Link>

            <div className="residential-footer" style={{
                marginLeft: -17,
                fontFamily: "Raleway",
                fontWeight: 400,
                fontSize: "11px",
                lineHeight: "14px",
                letterSpacing: "0.12em",
                color: "#FFFFFF",
                marginTop: 1,
                height: 14,
                width: 167,
                textAlign: "center"
            }}>
                Управляющая Компания
            </div>

        </div>

    </Space>

);

export default Logo_footer;
