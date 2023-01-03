import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Typography} from "antd";

const { Text } = Typography;

const FormCards = () => {


    const [argument, setArgument] = useState({
        userId: ''
    });

    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [price, setPrice] = useState('');


    useEffect( () => {

        fetch('http://localhost/api/auth_user')
            .then(response => response.json())
            .catch(e => console.log(e))
            .then(data =>setArgument({
                userId: data.id
            }));

        /* Получение информации по счетчикам пользователя */

    },[])

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
                    title: title ,
                    price: +price,
                    description: description,
                    user_id: +argument,
                })
            })
                .then(response => response.json())
                    .catch(e => console.log(e))
    }
    console.log(typeof title)

    return (
        <>
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
        </>
    );
}

export default FormCards;
