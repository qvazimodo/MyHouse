import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import FormItem from "antd/es/form/FormItem";
import {PASSWORD_CHECK_EMAIL_API_URL, PASSWORD_RESET_EMAIL_API_URL} from "../../helpers/API";
import passwordReq from "./PasswordReq";
import {useLocation} from "react-router-dom";

const NewPassword = () => {

    const [password, setPassword] = useState('');
    const [linkcode, setLinkcode] = useState('');
    const [disableCode, setDisableCode] = useState(true);
    const [textMessageEmail, setTextMessageEmail] = useState('');

    let emailCode = useLocation();

    const sendForm = (e) => {
        fetch(PASSWORD_RESET_EMAIL_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
                    .getAttribute('content'),
            },
            body: JSON.stringify({
                code: emailCode.state.code,
                password: password,
            })
        })
            .then(response => response.json())
            .catch(e => console.log('Request failed', e))
            .then(result => {
                if (result.message === "site.password_has_been_successfully_reset") {
                    setLinkcode("login");
                    setTextMessageEmail('Новый пароль установлен')
                    setDisableCode(false);
                } else {
                    alert("Пароль не установлен")
                }
            })

    }


    return (
        <div className="change-email-mar">
            <h2 className="change-email-txt">Восстановление пароля</h2>
            <Form>
                <FormItem>
                    <Input
                        placeholder="Введите новый пароль:"
                        name='email' value={password}
                        type='password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        style={{
                            textAlign: "center",
                            marginBottom: 60,
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
                        Готово
                    </Button>
                </FormItem>
            </Form>


        </div>
    );
}
export default NewPassword;
