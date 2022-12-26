import React, { useState } from 'react';
import { Collapse, Button, Form, Input, Select } from 'antd';

const { Panel } = Collapse;

class MetersForm extends React.Component {

    state = {
        name: '',
        number: '',
        last: '',
        now: '',
        userId: ''
    };

    componentDidMount() {
        /* Код get запроса для получения user_id */

        fetch('http://localhost/api/auth_user')
            .then(response => response.json())
                .catch(e => console.log(e))
            .then(data => this.state.userId = data.id);

    }

    sendForm = () => {
        fetch('http://127.0.0.1/api/meters/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                number: this.state.number,
                user_id: this.state.userId,
                value: this.state.now,
                type: this.state.name,
                date: '2022-12-25 22:30:05',
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))

        alert("Данные приняты");

    }
    numberChange = (e) => {
        this.setState({number: e.target.value});
    }
    lastChange = (e) => {
        this.setState({last: e.target.value});
    }
    nowChange = (e) => {
        this.setState({now: e.target.value});
    }
    meterChange = (value) => {
        this.setState({name: value});
    }

render() {
    return (
        <div className="container">
            <Collapse accordion>
                <Panel header="Ввести показания счетчиков" key="1" className="cabinet-txt">
                    <Form>
                        <Form.Item label="Выберите счетчик">
                            <Select
                                defaultValue="cold_water"
                                onChange={this.meterChange}
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
                        <Form.Item label="Показания за прошлый период">
                            <Input value={this.state.last} onChange={this.lastChange} />
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
