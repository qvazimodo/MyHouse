import React from 'react';
import { Button, Space } from 'antd';
import Input from "antd/es/input/Input";
import style from '../../../css/Content/watch.css';

const Questions = () => (
    <div className="section" style={{ style }}>
        <div id="wrapper">
            <h2 className="title_name" style={{ style }}>Есть вопросы?</h2>
            <div className="section_wrp" style={{ style }}>
                <p className="section_text">Наша компания предлагает программу предоставления полного спектра услуг
                    по профессиональному управлению и техническому обслуживанию жилищного фонда. </p>
                <div className="section_form" style={{ style }}>
                    <Input className="input_text" placeholder="Ваше имя" style={{ style }} />
                    <Input className="input_text" placeholder="Ваш телефон" style={{ style }} />
                    <p className="bottom_text">*Мы никому не передаем ваши данные.<br/> И не сохраняем ваш номер в базу.</p>
                    <Button className="input_button" style={{ style }}>Заказать звонок</Button>
                </div>
            </div>
            </div>
    </div>
);

export default Questions;



