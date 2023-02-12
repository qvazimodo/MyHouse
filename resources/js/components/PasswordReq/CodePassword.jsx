import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import FormItem from "antd/es/form/FormItem";
import "./PasswordReq.css";
import {PASSWORD_CHECK_EMAIL_API_URL, PASSWORD_EMAIL_API_URL} from "../../helpers/API";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addPassword} from "../../features/passwordReset/passwordReset";

const CodePassword = () => {
    const [code, setCode] = useState('');
    const [disableCode, setDisableCode] = useState(true);
    const [textMessageEmail, setTextMessageEmail] = useState('');
    const dispatch = useDispatch();

    const sendForm = (e) => {
        fetch(PASSWORD_CHECK_EMAIL_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
                    .getAttribute('content'),
            },
            body: JSON.stringify({
                code: code,
            })
        })
            .then(response => response.json())
            .catch(e => console.log('Request failed', e))
            .then(result => {
                if (result.message === "passwords.code_is_valid") {
                    dispatch(addPassword({code}));
                    setTextMessageEmail('Код подтверждения принят. Нажмите на далее')
                    setDisableCode(false);
                } else {
                    alert("Неверный код")
                }
            })
    }

    return (
        <div className="change-email-mar">
            <h2 className="change-email-txt">Восстановление пароля</h2>
            <Form>
                <FormItem>
                    <Input
                        placeholder="Введите код:"
                        name='email' value={code}
                        onChange={(e) => {
                            setCode(e.target.value)
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
                    <FormItem hidden={disableCode}>
                        <Link to="/passwordnew" className="link-password">Далее</Link>
                    </FormItem>
                </FormItem>
            </Form>

        </div>
    );

}
export default CodePassword;
