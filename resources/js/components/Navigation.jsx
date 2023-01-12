import {Menu, theme} from 'antd';
import { useState } from 'react';

const items = [
    {
        label: (
            <a href="rates">Тарифы и услуги</a>
        ),
    },
    {
        label: (
            <a href="serviced_houses">Дома</a>
        ),
    },
    {
        label: (
            <a href="announcement">Объявления</a>
        ),
    },
    {
        label: (
            <a href="about">О нас</a>
        ),
    },
    {
        label: (
            <a href="register">Регистрация</a>
        ),
    },
    {
        label: (
            <a href="login">Вход</a>
        ),
    },

];
const Navigation = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (

    <Menu className="Menu-logo" onClick={onClick} mode="horizontal" items={items} theme={{
        algorithm: theme.darkAlgorithm,
    }} style={{ background: "#242B33",
        borderColor: "#2b2b2c",
        color: "#d7d7d7",
        fontFamily: "Raleway",
        marginLeft: 1100,
        marginTop: -51,
    }} />
);
};
export default Navigation;
