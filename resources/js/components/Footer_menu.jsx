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
            <a href="contacts">Контакты</a>
        ),
    },
    {
        label: (
            <a href="about">О нас</a>
        ),
    },


];
const Footer_menu = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (

        <Menu className="Menu-logo" onClick={onClick} mode="horizontal" items={items} theme={{
            algorithm: theme.darkAlgorithm,
        }} style={{ background: "#2D343C",
            borderColor: "#2D343C",
            color: "#d7d7d7",
            fontFamily: "Raleway",
            marginLeft: -64,
            marginTop: 45,
            width: 380,
        }} />
    );
};
export default Footer_menu;
