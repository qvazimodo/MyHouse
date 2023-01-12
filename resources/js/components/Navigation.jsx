import {Menu, theme} from 'antd';
import { useState } from 'react';
const items = [
    {
        label: (
            <a href="about">Тарифы и услуги</a>
        ),
    },
    {
        label: (
            <a href="about">Дома</a>
        ),
    },
    {
        label: (
            <a href="about">Объявления</a>
        ),
    },
    {
        label: (
            <a href="about">О нас</a>
        ),
    },
    {
        label: (
            <a href="about">Регистрация</a>
        ),
    },
    {
        label: (
            <a href="about">Вход</a>
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
        fontFamily: "Raleway",
        marginLeft: 1100,
        paddingTop: 25,
    }} />;
};
export default Navigation;
