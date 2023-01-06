import React, {useEffect, useState} from 'react';
import {Avatar, Button, Form, Input, List, Typography} from "antd";
const { Text } = Typography;



const ListCards = () => {

    const [items, setItems] = useState([]);
    const [argument, setArgument] = useState({
        userId: ''
    });
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');



    useEffect(() => {
        let cardList = [];
        fetch('http://127.0.0.1/api/cards/')
            .then(response => {
                //получаем данные из json
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })

            .then(data => {
                //выбираем из json значения для карточек
                for (let i in data) {
                    for (let j in data[i].card) {
                        cardList.push(data[i].card[j])
                    }
                }
                cardList.sort(function(a, b){
                    return a.id - b.id;
                });
                setItems(cardList);
            });
    }, [])

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
        if (argument.userId === '101') {
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
                    user_id: +argument,
                })
            })
                .then(response => response.json())
                .catch(e => console.log(e))
                .then(data => {
                     setItems([...items, data])
                })
        } else {
            window.alert('У вас нет прав')
        }
    }




    return (
        <div>
            <Text>Заполните форму для ввода новых показаний:</Text>
            <Form >
                <Form.Item label="Введите заголовок:">
                    <Input name='title' value={title} onChange={(e) => {setTitle(e.target.value)}} />
                </Form.Item>
                <Form.Item label="Введите описание:">
                    <Input name='description' value={description} onChange={(e) => {setDescription(e.target.value)}} />
                </Form.Item>
                <Form.Item label="Введите цену:">
                    <Input name='price' value={price} type='number' onChange={(e) => {setPrice(e.target.value)}} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={sendForm} >Отправить</Button>
                </Form.Item>
            </Form>

            <List

                itemLayout="vertical"
                size="large"
                pagination={{
                    pageSize: 3,
                    style: {textAlign:'center'}
                }}
                dataSource={items}
                footer={
                    <div>
                        <b>Тут можно что-то добавить</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consectetur distinctio dolores esse eum explicabo fugit impedit iusto, labore laudantium magnam nihil non numquam rerum sed tempora veniam voluptatum!
                    </div>
                }

                renderItem={(item) => (
                    <List.Item
                        key={item.id}

                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar/>}
                            title={<div>Заголовок: {item.title} + id {item.id}</div>}
                            description={<div>Описание: {item.description}</div>}
                        />
                        <div>Цена: {item.price}$</div>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default ListCards;
