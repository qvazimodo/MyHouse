import React from 'react';
import { Button, Space } from 'antd';
import Input from "antd/es/input/Input";
import style from '../../css/watch.css'

const Watch = () => (
    <div className="watching-section" style={{ style }}>
        <div className="container">
            <h2 className="watching_title" style={{ style }}>Хотите присоединить свой дом к нашей УК?</h2>
            <div className="watching-section_wrp" style={{ style }}>
                <p className="watching-section_text" style={{ style }}>
                    Наша компания предлагает программу предоставления полного спектра услуг
                    по профессиональному управлению и техническому обслуживанию жилищного фонда. </p>
                <div className="watching-section_form" style={{ style }}>
                        <Input className="watching_text" placeholder="Ваше имя" style={{ style }} />
                        <Input className="watching_text" placeholder="Ваш телефон" style={{ style }} />
                        <p className="watching_bottom_text" style={{ style }}>*Мы никому не передаем ваши данные.<br/> И не сохраняем ваш номер в базу.</p>
                        <Button className="watching_button" style={{ style }}>Отправить заявку</Button>
                </div>
            </div>
        </div>
    </div>
);

export default Watch;



