import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Typography} from "antd";

const { Text } = Typography;

const FormCards = ({name}) => {


    const [argument, setArgument] = useState({
        userId: '2'
    });

    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [price, setPrice] = useState('');


    useEffect( () => {

        fetch('http://localhost/api/auth_user')
            .then(response => response.json())
            .catch(e => console.log(e))
            .then(data =>setArgument({
                userId: `${data.id}`
            }));

        /* Получение информации по счетчикам пользователя */

    },[])

    const sendForm = (e) => {
        e.preventDefault();
            fetch(`http://127.0.0.1/api/user_cards/?user_id=2`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
                body: JSON.stringify({
                    id:101 ,
                    title:'fajidf' ,
                    price:3214,
                    description:'udshf' ,
                    user_id: 2,
                    created_at: null,
                    updated_at: null
                })
            })
                .then(response => response.json())
                    .catch(e => console.log(e))


    }

    // function sendForm(){
    //     let data={title,description,price}
    //     fetch("http://127.0.0.1/api/user_cards/?user_id=2",{
    //         method:'POST',
    //         headers:{
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body:JSON.stringify(data)
    //     })
    //         .then((result)=>{
    //             console.warn('result',result);
    //         })
    // }


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
                    <Input name='price' value={price} onChange={(e) => {setPrice(e.target.value)}} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={sendForm} >Отправить</Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default FormCards;
