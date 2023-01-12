import React, { useState } from 'react';
import { Collapse, App, Button, Form, Input, Select, Typography, Divider, Table } from 'antd';
import {AUTH_METERS_API_URL, AUTH_USER_API_URL, METER_VALUE_API_URL} from "../helpers/API";

const { Panel } = Collapse;
const { Text } = Typography;
const { Option } = Select;
//const { message } = App.useApp();

const columns = [
    {
        title: 'Заводской номер счетчика',
        dataIndex: 'number',
        key: 'number',
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'Вид счетчика',
        dataIndex: 'type',
        key: 'type',
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'Месяц ввода показаний',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'Прошлые показания',
        dataIndex: 'lastValue',
        key: 'lastValue',
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'Введенные показания',
        dataIndex: 'value',
        key: 'value',
        render: (text) => <p>{text}</p>,
    },
];

let locale = {
    emptyText: 'У Вас нет данных по счетчикам, оформите заявку администратору для добавления счетчика',
};

let meterTypes = new Set();

class MetersForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'холодная вода',
            number: '',
            now: '',
            userId: '',
            month: '1',
            info: [],
        };

        this.valueInputChange = this.valueInputChange.bind(this);
    }


    componentDidMount() {
        /* Код get запроса для получения user_id */

        fetch(AUTH_USER_API_URL)
            .then(response => response.json())
                .catch(e => console.log(e))
            .then(data => this.state.userId = data.id);

        /* Получение информации по счетчикам пользователя */

        fetch(AUTH_METERS_API_URL)
            .then(response => response.json())
                .catch(e => console.log(e))
            .then( (data) => {
                //console.log(data);
                let values = new Map();
                for (let item in data.data) {
                    values.set(data.data[item].id, data.data[item].value);
                }
                for (let item in data.data) {
                   data.data[item].key = +item + 1;
                   data.data[item].lastValue = values.get(data.data[item].parent_id);
                   this.setState(prevState => ({
                        info: [...prevState.info, data.data[item]]
                    }))
                }

            });

    }


    sendForm = (e) => {
        e.preventDefault();
        console.log(this.state);
        fetch(METER_VALUE_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
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
                .catch(e => console.log(e))
            .then((data) => {
                console.log(data);
                data.key = this.state.info.length + 1;
                data.type = this.state.type;
                data.number = this.state.number;
                data.name = this.state.month;
                this.setState(prevState => ({
                    info: [...prevState.info, data]
                }))
            })

        alert("Данные приняты");
        //message.success('Данные приняты!');


        //TODO Разобраться с функцией очистки полей формы из AntDesign, подключить её

        this.setState({
            type: 'холодная вода',
            number: '',
            now: '',
            month: '1',
        });

    }


    //TODO: Сделать чтобы поля формы SELECT тоже можно было обрабатывать в valueInputChange

    typeChange = (value) => {
        this.setState({ type: value });
    }
    monthChange = (value) => {
        this.setState( { month: value } );
    }
    /*
       numberChange = (e) => {
           this.setState({number: e.target.value});
       }
       nowChange = (e) => {
           this.setState({now: e.target.value});
       }
   */

    valueInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="container">
                <Collapse accordion>
                    <Panel header="Ввести показания счетчиков" key="1" className="cabinet-txt">
                        <Text mark>Показания счетчиков за прошлый период</Text>
                        <Table columns={columns} dataSource={this.state.info} locale={locale}/>
                        <Button>Отправить заявку на добавление нового счетчика</Button>
                        <Divider />
                        <Text mark>Заполните форму для ввода новых показаний</Text>
                        <Form>
                            <Form.Item label="Выберите счетчик">
                                <Select
                                    name="type"
                                    onChange={this.typeChange}
                                    notFoundContent="Нет данных по счетчикам"
                                >
                                    {

                                        this.state.info.map((item, index) => {

                                            if (!meterTypes.has(item.type)) {
                                                meterTypes.add(item.type);
                                                return <Option value={item.type} key={index}>{item.type}</Option>
                                            }
                                        })
                                    }



                                </Select>
                            </Form.Item>
                            <Form.Item label="Заводской номер счетчика">
                                <Input name="number" value={this.state.number} onChange={this.valueInputChange} />
                            </Form.Item>
                            <Form.Item label="Выберите месяц">
                                <Select
                                    name="month"
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
                                <Input name="now" value={this.state.now} onChange={this.valueInputChange} />
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
