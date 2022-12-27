import React, { useState } from 'react';
import { Collapse, Button, Form, Input, Select, Typography, Divider } from 'antd';

const { Panel } = Collapse;
const { Text } = Typography;

class MetersForm extends React.Component {

    state = {
        type: 'cold_water',
        number: '',
        now: '',
        userId: '',
        month: '1',
    };

    componentDidMount() {
        /* Код get запроса для получения user_id */

        fetch('http://localhost/api/auth_user')
            .then(response => response.json())
                .catch(e => console.log(e))
            .then(data => this.state.userId = data.id);

        /* Получение информации по счетчикам пользователя */

        fetch('http://localhost/api/auth_meters')
            .then(response => response.json())
                .catch(e => console.log(e))
            .then(data => console.log(data));

    }

    sendForm = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1/api/meters/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            },
            body: JSON.stringify({
                number: this.state.number,
                user_id: this.state.userId,
                value: this.state.now,
                type: this.state.type,
                month: this.state.month,
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))

        alert("Данные приняты");

        fetch('http://127.0.0.1/api/meters/')
            .then(response => response.json())
                .catch(e => console.log(e))
            .then(data => console.log(data));

    }
    typeChange = (value) => {
        this.setState({type: value});
    }
    numberChange = (e) => {
        this.setState({number: e.target.value});
    }
    monthChange = ( value ) => {
        this.setState( { month: value } );
    }
    nowChange = (e) => {
        this.setState({now: e.target.value});
    }


    render() {
        return (
            <div className="container">
                <Collapse accordion>
                    <Panel header="Ввести показания счетчиков" key="1" className="cabinet-txt">
                        <Text mark>Показания счетчиков за прошлый период</Text>
                        <Divider />
                        <Text mark>Заполните форму для ввода новых показаний</Text>
                        <Form>
                            <Form.Item label="Выберите счетчик">
                                <Select
                                    defaultValue="cold_water"
                                    onChange={this.typeChange}
                                    options={[
                                        {
                                            value: 'cold_water',
                                            label: 'Счетчик холодной воды',
                                        },
                                        {
                                            value: 'hot_water',
                                            label: 'Счетчик горячей воды',
                                        },
                                        {
                                            value: 'heat',
                                            label: 'Счетчик газа',
                                        },
                                        {
                                            value: 'electricity',
                                            label: 'Счетчик электричества',
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item label="Заводской номер счетчика">
                                <Input value={this.state.number} onChange={this.numberChange} />
                            </Form.Item>
                            <Form.Item label="Выберите месяц">
                                <Select
                                    defaultValue="1"
                                    onChange={this.monthChange}
                                    options={[
                                        {
                                            value: '1',
                                            label: 'Январь',
                                        },
                                        {
                                            value: '2',
                                            label: 'Февраль',
                                        },
                                        {
                                            value: '3',
                                            label: 'Март',
                                        },
                                        {
                                            value: '4',
                                            label: 'Апрель',
                                        },
                                        {
                                            value: '5',
                                            label: 'Май',
                                        },
                                        {
                                            value: '6',
                                            label: 'Июнь',
                                        },
                                        {
                                            value: '7',
                                            label: 'Июль',
                                        },
                                        {
                                            value: '8',
                                            label: 'Август',
                                        },
                                        {
                                            value: '9',
                                            label: 'Сентябрь',
                                        },
                                        {
                                            value: '10',
                                            label: 'Октябрь',
                                        },
                                        {
                                            value: '11',
                                            label: 'Ноябрь',
                                        },
                                        {
                                            value: '12',
                                            label: 'Декабрь',
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item label="Текущие показания">
                                <Input value={this.state.now} onChange={this.nowChange} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" onClick={this.sendForm}>Отправить</Button>
                            </Form.Item>
                        </Form>
                    </Panel>
                </Collapse>

            </div>
        );
    }
}

export default MetersForm;
