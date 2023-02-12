import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import FormItem from "antd/es/form/FormItem";
import "./PasswordReq.css";
import {PASSWORD_EMAIL_API_URL} from "../../helpers/API";
import {Link} from "react-router-dom";

const PasswordReq = () => {
    const [email, setEmail] = useState('');
    const [disableCode, setDisableCode] = useState(true);
    const [textMessageEmail, setTextMessageEmail] = useState('');

    const sendForm = () => {
        fetch(PASSWORD_EMAIL_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
                    .getAttribute('content'),
            },
            body: JSON.stringify({
                email: email,
            })
        })
            .then(response => response.json())
            .catch(e => console.log('Request failed', e))
            .then(result => {
                if (result.message === "The selected email is invalid.") {
                    alert("Пользователь не зарегистрирован")
                } else {
                    setTextMessageEmail('Сообщение отправлено на email. Нажмите на далее')
                    setDisableCode(false);
                }
            })
    }

    return (
        <div className="change-email-mar">
            <h2 className="change-email-txt">Восстановление пароля</h2>
            <Form>
                <FormItem>
                    <Input
                        placeholder="Введите почту:"
                        name='email' value={email}
                        type='email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        style={{
                            textAlign: "center",
                            marginBottom: 60
                        }}>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button
                        onClick={sendForm}
                        style={{
                            backgroundColor: '#D4C17F',
                            borderColor: '#D4C17F',
                        }}
                    >
                        Отправить
                    </Button>
                </FormItem>
                <h2 className="text-accept-code">{textMessageEmail}</h2>
                <FormItem hidden={disableCode}>
                    <Link to="passwordcode" className="link-password">Далее</Link>
                </FormItem>
            </Form>
        </div>
    );
}

export default PasswordReq;
