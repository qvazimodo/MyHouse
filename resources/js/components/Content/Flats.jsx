import React from 'react';
import { Typography } from 'antd';
import style from "../../../css/Content/flats.css";
import flat1 from "../img/flat1.jpg"
import flat2 from "../img/flat2.jpg"
import flat3 from "../img/flat3.jpg"
import flat4 from "../img/flat4.jpg"

const { Text } = Typography;

const Flats = () => (
    <div className="menu-flats">
            <h2 className="title_name">Дома у нас на обслуживании</h2>
        <div className="flats-items">
            <div className="flats-item">
                <img className="flats-photo" src={flat1} alt="photo" />
                    <Text className="flats-text">Лофт — 1 этажа</Text>
            </div>
            <div className="flats-item">
                <img className="flats-photo" src={flat2} alt="photo" />
                    <Text className="flats-text">Лофт — 2 этажа</Text>
            </div>
            <div className="flats-item">
                <img className="flats-photo" src={flat3} alt="photo" />
                    <Text className="flats-text">Лофт — 3 этажа</Text>
            </div>
            <div className="flats-item">
                <img className="flats-photo" src={flat4} alt="photo" />
                    <Text className="flats-text">Лофт — 4 этажа</Text>
            </div>
        </div>
    </div>
    );
export default Flats;
