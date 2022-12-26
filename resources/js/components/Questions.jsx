import React from 'react';
import { Button, Space } from 'antd';
import Input from "antd/es/input/Input";

const Questions = () => (
    <div className="container">
        <div className="content-question">
            <div className="question">Есть вопросы?</div>
        </div>
        <div className="second-line">
            <div className="second-line-one">
                <div className="text3">
                    *Мы никому не передаем ваши данные.
                    И не сохраняем ваш номер в базу.
                </div>
            </div>
            <div className="second-line-two">
                <Input className="text"
                       placeholder="Ваше имя"
                       style={{ background: "#D4C17F",
                                borderColor: "#D4C17F",
                                color: "black",
                                fontFamily: "Raleway" }} />
            </div>
            <div className="second-line-tree">
                <Input className="text"
                       placeholder="Ваш телефон"
                       style={{ background: "#D4C17F",
                                borderColor: "#D4C17F",
                                color: "black",
                                fontFamily: "Raleway"   }} />
            </div>
            <div className="second-line-four">
                <Button className="text2"
                        style={{ background: "White",
                                 borderColor: "White",
                                 color: "black",
                                 }}>
                                 Заказать звонок
                </Button>
            </div>
        </div>
    </div>
);

export default Questions;



