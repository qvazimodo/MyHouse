import { Button, DatePicker, Form, Input, } from 'antd';
import { useState } from 'react';
import styles from "./EmployeeRegisterForm.module.css";
import { CSRF_URL, EMPLOYEES_API_URL } from "../../helpers/API";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

export const EmployeeRegisterForm = ( { onChange, fields } ) => {
    const [ componentDisabled, setComponentDisabled ] = useState( true );

    const [ registrationFormData, setRegistrationFormData ] = useState( {} );

    const getCSRFToken = () => {
        return fetch( CSRF_URL )
            .then( ( response ) => response.json() )
            .catch( ( error ) => console.log( error ) )
            .then( data => data )
    }

    const employeeRegistrate = () => {
        setRegistrationFormData( { response: 'resp' } )

        sendForm()
    }

    const sendForm = ( e ) => {
        console.log( registrationFormData )
        e.preventDefault()
        fetch( EMPLOYEES_API_URL, {
            method: 'POST',
            headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCSRFToken()
                },
            body: JSON.stringify( registrationFormData )
        } )
    }

    return (
        <Form
            className={ styles.form }
            labelCol={ {
                span: 4,
            } }
            wrapperCol={ {
                span: 14,
            } }
            layout="horizontal"
            name="global_state"
            fields={ fields }
            onFieldsChange={ ( _, allFields ) => {
                onChange( allFields );
            } }>
            <Form.Item label="Фамилия"
                       name="lastName"
                       rules={[
                           {
                               required: true,
                               message: 'Введите фамилию! Это обязательно!',
                           },
                       ]}>
                <Input/>
            </Form.Item>
            <Form.Item label="Имя"
                       name="name"
                       rules={ [
                           {
                               required: true,
                               message: 'Имя обязательно для заполнения!',
                           },
                       ] }>
                <Input/>
            </Form.Item>
            <Form.Item label="Отчество"
                       name="patronymic"
                       rules={ [
                           {
                               required: false,
                               message: 'Отчество желательно заполнить!',
                           },
                       ] }>
                <Input/>
            </Form.Item>
            <Form.Item label="Дата рождения"
                       name="birthDate"
                       rules={ [
                           {
                               required: true,
                               message: 'Дату рождения нужно обязательно заполнить!',
                           },
                       ] }>
                <DatePicker/>
            </Form.Item>
            <Form.Item label="Номер телефона"
                       name="phone"
                       rules={ [
                           {
                               required: true,
                               message: 'Номер телефона нужно обязательно указать!',
                           },
                       ] }>
                <Input/>
            </Form.Item>
            <Form.Item label="Email"
                       name="patronymic"
                       rules={ [
                           {
                               required: true,
                               message: 'Адрес электронной почты требуется обязательно!!',
                           },
                       ] }>
                <Input/>
            </Form.Item>
            <Button onClick={ () => employeeRegistrate() }>Зарегистрировать сотрудника</Button>
        </Form>
    );
};
