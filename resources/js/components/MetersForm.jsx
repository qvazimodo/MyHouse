import React from 'react';
import { Collapse, App, Button, Form, Input, Select, Typography, Divider, Table, notification, Space, Modal  } from 'antd';
import {AUTH_METERS_API_URL, AUTH_METERS_LIST_API_URL, AUTH_USER_API_URL, METER_VALUE_API_URL} from "../helpers/API";

import DocumentRender from "./DocumentRender";
import "./MetersForm.css"

const { Panel } = Collapse;
const { Text } = Typography;
const { Option } = Select;

const columns = [
    {
        title: 'Номер счетчика',
        dataIndex: 'number',
        key: 'number',
        sorter: (a, b) => a.number - b.number,
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'Тип счетчика',
        dataIndex: 'type',
        key: 'type',
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'Месяц',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'Год',
        dataIndex: 'year',
        key: 'year',
        sorter: (a, b) => a.year - b.year,
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
    {
        title: '',
        key: 'payment',
        render: (_, record) => (<DocumentRender last={record.lastValue ? record.lastValue : 0} now={record.value} tax={2} month={record.name} year={record.year} type={record.type}/>)
    },
];


let locale = {
    emptyText: 'У Вас нет данных по счетчикам, оформите заявку администратору для добавления счетчика',
};

class MetersForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            number: '',
            now: '',
            userId: '',
            month: '',
            info: [],
            userMeters: {},
            meterTypes: [],
            values: new Map(),
            isModalOpen: false,
        };

        this.valueInputChange = this.valueInputChange.bind(this);
    }

    openNotification = () => {
        notification.open({
            message: 'Данные приняты',
            description:
                'Вы успешно отправили данные по счетчику',
            onClick: () => {
               // console.log('Notification Clicked!');
            },
        });
    };

    showModal = () => {
        this.setState({isModalOpen: true});
    };
    handleOk = () => {
        this.setState({isModalOpen: false});
    };
    handleCancel = () => {
        this.setState({isModalOpen: false});
    };

    componentDidMount() {
        /* Код get запроса для получения user_id */

        fetch(AUTH_USER_API_URL)
            .then(response => response.json())
                .catch(e => console.log(e))
            .then(data => this.state.userId = data.id);

        /* Получение информации по счетчикам пользователя */

        fetch(AUTH_METERS_LIST_API_URL)
            .then(response => response.json())
                .catch(e => console.log(e))
            .then( (data) => {
                this.setState({ userMeters: data.data });
            })

        fetch(AUTH_METERS_API_URL)
            .then(response => response.json())
                .catch(e => console.log(e))
            .then( (data) => {

                let months = new Map();
                for (let item in data.meta.months) {
                    months.set(data.meta.months[item].id, data.meta.months[item].name);
                }
                this.setState({
                    month: months.get((new Date().getMonth() + 1)),
                });

                let years = new Map();
                for (let item in data.meta.years) {
                    years.set(data.meta.years[item].id, data.meta.years[item].number);
                }

                let meterInfo = data.data.data;

                for (let key in meterInfo) {
                    meterInfo[key].meter_month_year.forEach((item) => {
                        this.setState({
                            values: this.state.values.set(item.id, item.value),
                        })
                    })
                }
/*
                let values = new Map();
                for (let key in meterInfo) {
                    meterInfo[key].meter_month_year.forEach((item) => {
                        values.set(item.id, item.value);
                    })
                }
*/
                let iterForTable = 1;
                for (let key in meterInfo) {

                    meterInfo[key].meter_month_year.forEach((item, index) => {
                        item.type = meterInfo[key].type;
                        item.number = meterInfo[key].number;
                        item.key = iterForTable++;
                        item.name = months.get(meterInfo[key].month_year[index].month_id);
                        item.year = years.get(meterInfo[key].month_year[index].year_id);
                        item.lastValue = this.state.values.get(item.parent_id);

                        this.setState(prevState => ({
                            info: [...prevState.info, item]
                        }))
                    })
                }
            });
    }

    generateSelectTypes = () => {
        let data = [];
        for (let key in this.state.userMeters) {
            data.push(key);
        }
        return data;
    }

    sendForm = (e) => {
        e.preventDefault();
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
                data.year = new Date().getFullYear();
                data.lastValue = this.state.values.get(data.parent_id);
                this.setState(prevState => ({
                    info: [...prevState.info, data]
                }))
                this.openNotification();
            })

        //TODO Разобраться с функцией очистки полей формы из AntDesign, подключить её

        this.setState({
            now: '',
        });

    }


    //TODO: Сделать чтобы поля формы SELECT тоже можно было обрабатывать в valueInputChange

    typeChange = (value) => {
        this.setState({ type: value });
    }
    numberChange = (value) => {
        this.setState({number: value});
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
                <div className="cabinet">
                    <Collapse accordion>
                    <Panel header="Ввести показания счетчиков" key="1" className="cabinet-txt">
                        <Text mark className="cabinet-color-txt">Показания счетчиков за прошлый период</Text>
                        <Table columns={ columns } dataSource={ this.state.info } locale={ locale }
                               className="meter-table"/>
                        <Button onClick={ this.showModal } className="addMeter-btn">Отправить заявку на добавление
                            нового счетчика</Button>
                        <Divider/>
                        <Text mark className="cabinet-color-txt">Заполните форму для ввода новых показаний</Text>
                        <Form className="meter-input">
                            <Form.Item label="Выберите счетчик">
                                <Select
                                    name="type"
                                    onChange={ this.typeChange }
                                    notFoundContent="Нет данных по счетчикам"
                                >
                                    {
                                        this.generateSelectTypes( this ).map( ( item, index ) => {
                                            return <Option value={ item } key={ index }>{ item }</Option>
                                        } )
                                    }
                                </Select>
                            </Form.Item>

                            <Form.Item label="Выберите номер счетчика">
                                <Select
                                    name="number"
                                    onChange={ this.numberChange }
                                    notFoundContent="Нет данных по счетчикам"
                                >
                                    {
                                        this.state.userMeters[this.state.type]?.map( ( item, index ) => {
                                            return <Option value={ item.number } key={ index }>{ item.number }</Option>
                                        } )
                                    }
                                </Select>
                            </Form.Item>

                            <Form.Item label="Текущий месяц">
                                <Select
                                    name="month"
                                    defaultValue={this.state.month}
                                    disabled
                                />
                            </Form.Item>
                            <Form.Item label="Текущие показания">
                                <Input name="now" value={ this.state.now } onChange={ this.valueInputChange }/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" onClick={ this.sendForm }
                                        className="addValue-btn">Отправить</Button>
                            </Form.Item>

                        </Form>

                        <Modal
                            title="Заявка на добавление нового счетчика"
                            open={ this.state.isModalOpen }
                            onOk={ this.handleOk }
                            onCancel={ this.handleCancel }
                            okText="Отправить заявку"
                            cancelText="Отмена"
                            className="meter-modal"
                        >
                            <Text mark className="cabinet-color-txt">Заполните форму</Text>
                            <Form className="meter-input">
                                <Form.Item label="Номер счетчика">
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="Выберите тип счетчика">
                                    <Select
                                        options={ [
                                            {
                                                value: '1',
                                                label: 'горячая вода',
                                            },
                                            {
                                                value: '2',
                                                label: 'холодная вода',
                                            },
                                            {
                                                value: '3',
                                                label: 'газ',
                                            },
                                            {
                                                value: '4',
                                                label: 'электричество',
                                            },
                                        ] }
                                    />
                                </Form.Item>
                            </Form>

                        </Modal>
                    </Panel>
                </Collapse></div>

            </div>
        );
    }
}

export default MetersForm;
