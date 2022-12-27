import React from 'react';
import { Button, Collapse, Form, Input, Select } from 'antd';

const { Panel } = Collapse;

class MetersForm extends React.Component {

    state = {
        type: '',
        number: '',
        last: '',
        now: '',
        userId: '',
        month: '',
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
            body: JSON.stringify( {
                number: this.state.number,
                user_id: this.state.userId,
                month: this.state.month,
                value: this.state.now,
                // type: this.state.name,
                type: this.state.type,
                // type: 'hot_water',

            } )
        } )
            .then( response => response.json() )
            .then( data => console.log( data ) )

        alert( "Данные приняты" );

    }
    typeChange = ( value ) => {
        this.setState( { type: value } );
    }
    numberChange = ( e ) => {
        this.setState( { number: e.target.value } );
    }
    lastChange = ( e ) => {
        this.setState( { last: e.target.value } );
    }
    nowChange = ( e ) => {
        this.setState( { now: e.target.value } );
    }
    monthChange = ( value ) => {
        this.setState( { month: value } );
        console.log( value );
        console.log( this.state );
    }
    typeChange = ( value ) => {
        this.setState( { type: value } );
    }

    render() {
        return (
            <div className="container">
                <Collapse accordion>
                    <Panel header="Ввести показания счетчиков" key="1" className="cabinet-txt">
                        <Form>
                            <Form.Item label="Выберите счетчик">
                                <Select
                                    // defaultValue="cold_water"
                                    onChange={ this.typeChange }
                                    options={ [
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
                                    ] }
                                />
                            </Form.Item>
                            <Form.Item label="Заводской номер счетчика">
                                <Input value={ this.state.number } onChange={ this.numberChange }/>
                            </Form.Item>
                            <Form.Item label="Показания за прошлый период">
                                <Input value={ this.state.last } onChange={ this.lastChange } disabled/>
                            </Form.Item>
                            <Form.Item label="Выберите месяц">
                                <Select
                                    onChange={ this.monthChange }
                                    options={ [
                                        {
                                            value: 1,
                                            label: 'январь',
                                        },
                                        {
                                            value: 2,
                                            label: 'февраль',
                                        },
                                        {
                                            value: 3,
                                            label: 'март',
                                        },
                                        {
                                            value: 4,
                                            label: 'апрель',
                                        }, {
                                            value: 5,
                                            label: 'май',
                                        }, {
                                            value: 6,
                                            label: 'июнь',
                                        }, {
                                            value: 7,
                                            label: 'июль',
                                        }, {
                                            value: 8,
                                            label: 'август',
                                        },
                                        {
                                            value: 9,
                                            label: 'сентябрь',
                                        },
                                        {
                                            value: 10,
                                            label: 'октябрь',
                                        },
                                        {
                                            value: 11,
                                            label: 'ноябрь',
                                        },
                                        {
                                            value: 12,
                                            label: 'декабрь',
                                        },
                                    ] }
                                />
                            </Form.Item>
                            <Form.Item label="Текущие показания">
                                <Input value={ this.state.now } onChange={ this.nowChange }/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" onClick={ this.sendForm }>Отправить</Button>
                            </Form.Item>
                        </Form>
                    </Panel>
                </Collapse>

            </div>
    );
}
}

export default MetersForm;
