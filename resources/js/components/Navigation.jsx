import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {Menu, theme} from 'antd';
import { useState } from 'react';
const items = [
    {
        label: (
            <a href="about" target="_blank">
                Тарифы и услуги
            </a>
        ),
    },
    {
        label: (
            <a href="about" target="_blank">
                Дома
            </a>
        ),
    },
    {
        label: (
            <a href="about" target="_blank">
                Объявления
            </a>
        ),
    },
    {
        label: (
            <a href="about" target="_blank">
                О нас
            </a>
        ),
    },
    {
        label: (
            <a href="about" target="_blank">
                Регистрация
            </a>
        ),
    },
    {
        label: (
            <a href="about" target="_blank">
                Вход
            </a>
        ),
    },
];
const Navigation = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} mode="horizontal" items={items} theme={{
        algorithm: theme.darkAlgorithm,
    }} style={{ background: "#242B33",
        borderColor: "#2b2b2c",
        color: "#d7d7d7",
        fontFamily: "Raleway" }} />;
};
export default Navigation;
