import { Button, DatePicker, Form, Input, } from 'antd';
import styles from "./EmployeeRegisterForm.module.css";
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

export const EmployeeRegisterForm = ( { onChange, fields, sendForm } ) => {
       const initial = {
        birthDate: dayjs('1990/06/09')
    };
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
            } }
            initialValues={initial}
        >
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
                <DatePicker onChange={(date) => console.log(date.toISOString())}/>
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
            <Form.Item label="email"
                       name="email"
                       rules={ [
                           {
                               required: true,
                               message: 'Адрес электронной почты требуется обязательно!',
                           },
                       ] }>
                <Input/>
            </Form.Item>
            <Form.Item label="Должность"
                       name="heldPosition"
                       rules={ [
                           {
                               required: true,
                               message: 'Должность работника заполняется обязательно!',
                           },
                       ] }>
                <Input/>
            </Form.Item>
            <Button onClick={ (e) => sendForm(e) }>Зарегистрировать сотрудника</Button>
        </Form>
    );
};
