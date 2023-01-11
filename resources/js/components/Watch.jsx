import React from 'react';
import { Button, Space } from 'antd';
import Input from "antd/es/input/Input";

const Watch = () => (
    <div className="watching-section">
        <div className="container">
            <h2 className="title-2">Хотите присоединить свой дом к нашей УК?</h2>
            <div className="watching-section_wrp">
                <p className="watching-section_text">Наша компания предлагает программу предоставления полного спектра услуг
                    по профессиональному управлению и техническому обслуживанию жилищного фонда. </p>
                <div className="watching-section_form">

                        <Input className="text"
                               placeholder="Ваше имя"
                               style={{ background: "#D4C17F",
                                   borderColor: "#D4C17F",
                                   color: "black",
                                   fontFamily: "Raleway" }} />

                        <Input className="text"
                               placeholder="Ваш телефон"
                               style={{ background: "#D4C17F",
                                   borderColor: "#D4C17F",
                                   color: "black",
                                   fontFamily: "Raleway"   }} />

                    <p>*Мы никому не передаем ваши данные.
                        И не сохраняем ваш номер в базу.</p>

                        <Button className="text2"
                                style={{ background: "White",
                                    borderColor: "White",
                                    color: "black",
                                }}>
                            Отправить заявку
                        </Button>


                </div>
            </div>
        </div>
    </div>

);

export default Watch;



