import {Menu, theme} from 'antd';
import { useState } from 'react';
import style from "../../../../css/Identically/footer.css";

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
const MenuFooter = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (

        <Menu className="Menu-logo-footer" onClick={onClick} mode="horizontal" items={items} theme={{
            algorithm: theme.darkAlgorithm,
        }} style={{ style }}
        />
    );
};
export default MenuFooter;
