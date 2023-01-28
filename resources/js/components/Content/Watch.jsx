import React from 'react';
import { Button, Space } from 'antd';
import Input from "antd/es/input/Input";
import style from '../../../css/Content/watch.css';

const Watch = () => (
    <div className="section" style={{ style }}>
        <div id="wrapper">
            <h2 className="title_name" style={{ style }}>Хотите присоединить свой дом к нашей УК?</h2>
            <div className="section_wrp" style={{ style }}>
                <p className="section_text" style={{ style }}>
                    Наша компания предлагает программу предоставления полного спектра услуг
                    по профессиональному управлению и техническому обслуживанию жилищного фонда. </p>
                <div className="section_form" style={{ style }}>
                    <div className="section-input">
                        <Input className="input_text" placeholder="Ваше имя" style={{ style }} />
                        <Input className="input_text" placeholder="Ваш телефон" style={{ style }} />
                    </div>
                        <p className="bottom_text" style={{ style }}>*Мы никому не передаем ваши данные.<br/> И не сохраняем ваш номер в базу.</p>
                        <Button className="input_button" style={{ style }}>Отправить заявку</Button>
                </div>
            </div>
        </div>
    </div>
);

export default Watch;



