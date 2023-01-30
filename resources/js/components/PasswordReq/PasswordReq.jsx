import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import FormItem from "antd/es/form/FormItem";
import "./PasswordReq.css";
import {PASSWORD_EMAIL_API_URL} from "../../helpers/API";

const PasswordReq = () => {
    const [email1, setEmail] = useState('');
    const [linkcode, setLinkcode] = useState('');
    const [disableCode, setDisableCode] = useState(true);
    const [textMessageEmail, setTextMessageEmail] = useState('');

    const sendForm = (e) => {
        fetch(PASSWORD_EMAIL_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
                    .getAttribute('content'),
            },
            body: JSON.stringify({
                email: email1,
            })
        })
            .then(response => response.json())
            .catch(e => console.log('Request failed', e))
            .then(result => {
                if (result.message === "The selected email is invalid.") {
                    alert("Пользователь не зарегистрирован")
                } else {
                    setLinkcode("passwordcode");
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
                        name='email' value={email1}
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
                <FormItem>
                    <Button
                        href={linkcode}
                        type={"link"}
                        disabled={disableCode}

                        style={{
                            backgroundColor: '#D4C17F',
                            maxWidth:120,
                            width:"100%",
                            marginTop:170,
                            borderColor: '#D4C17F',
                        }}
                    >
                        Далее
                    </Button>
                </FormItem>
            </Form>


        </div>
    );
}

export default PasswordReq;
