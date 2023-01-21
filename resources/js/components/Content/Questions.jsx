import React from 'react';
import { Button, Space } from 'antd';
import Input from "antd/es/input/Input";
import style from '../../../css/Content/questions.css'

const Questions = () => (
    <div className="questions-section" style={{ style }}>
        <div id="wrapper">
            <h2 className="questions_title" style={{ style }}>Есть вопросы?</h2>
            <div className="question_section_wrp" style={{ style }}>
                <p className="question_section_text">Наша компания предлагает программу предоставления полного спектра услуг
                    по профессиональному управлению и техническому обслуживанию жилищного фонда. </p>
                <div className="question_section_form" style={{ style }}>
                    <Input className="questions_text" placeholder="Ваше имя" style={{ style }} />
                    <Input className="questions_text" placeholder="Ваш телефон" style={{ style }} />
                    <p className="questions_bottom_text">*Мы никому не передаем ваши данные.<br/> И не сохраняем ваш номер в базу.</p>
                    <Button className="questions_button" style={{ style }}>Заказать звонок</Button>
                </div>
            </div>
            </div>
    </div>
);

export default Questions;



