import React, {useEffect, useState} from 'react';
import {Button, Card, Form, Input, List, Typography} from "antd";
import {MYCARDS_API_URL} from "../helpers/API";

const {Text} = Typography;

const UserCards = () => {

    const [employeesList, setEmployeesList] = useState([])
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [links, setLinks] = useState({});
    const [current, setCurrent] = useState(1);

    //--------------Для формы хуки
    const [items, setItems] = useState([]);
    const [argument, setArgument] = useState({
        userId: ''
    });
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    //---------------------- Для Кости (НЕ форма)
    //---------------------- Вывод карточек пользователя

    const onPageChange = (page) => {
        fetchEmployees(MYCARDS_API_URL + `?page=${page}`)
    }


    useEffect(() => {
        fetchEmployees(MYCARDS_API_URL)
    }, [])


    useEffect(() => {
        setData(employeesList.map(item => {
            return {
                key: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                client_id: item.client_id,
            }
        }))
    }, [employeesList]);


    const fetchEmployees = (page) => {
        setLoading(true)
        fetch(page)
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(result => {
                setEmployeesList(result.data)
                setTotalPages(result.meta.total)
                setPageSize(result.meta.per_page)
                setLinks(result.links)
                setLoading(false)
            });
    }

    //-----------------------------------Форма

    useEffect(() => {
        fetch('http://localhost/api/auth_user')
            .then(response => response.json())
            .catch(e => console.log(e))
            .then(data => setArgument({
                userId: data.id
            }));

        /* Получение информации по счетчикам пользователя */

    }, [])


    const sendForm = (e) => {

            e.preventDefault();
            fetch(`http://127.0.0.1/api/cards`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                    // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
                body: JSON.stringify({
                    title: title,
                    price: +price,
                    description: description,
                    client_id: +argument,
                })
            })
                .then(response => response.json())
                .catch(e => console.log(e))
                .then(data => {
                    console.log(data)
                })

    }




    return (
        <div className='container'>

            {/*Форма*/}

            <Text style={{color: '#D4C17F', marginBottom: 30, display: 'block', fontSize: 18}}>Заполните форму для ввода новых показаний:</Text>
            <Form>
                <Form.Item label="Введите заголовок:">
                    <Input name='title' value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }}/>
                </Form.Item>
                <Form.Item label="Введите описание:">
                    <Input name='description' value={description} onChange={(e) => {
                        setDescription(e.target.value)
                    }}/>
                </Form.Item>
                <Form.Item label="Введите цену:">
                    <Input name='price' value={price} type='number' onChange={(e) => {
                        setPrice(e.target.value)
                    }}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={sendForm}>Отправить</Button>
                </Form.Item>
            </Form>

            {/*Карточки*/}

            <h2 className='mycards'>Ваши карточки</h2>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                }}
                pagination={ {
                    pageSize,
                    total: totalPages,
                    onChange: onPageChange
                    // showSizeChanger: true,
                } }
                loading={ loading }
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={`Заголовок: ${item.title} client_id: ${item.client_id}`}>Номер объявления: {item.key} <br/><br/> Текст: {item.description}<br/><br/>Цена: {item.price}$</Card>
                    </List.Item>
                )}
            />
        </div>
    );
}
export default UserCards;