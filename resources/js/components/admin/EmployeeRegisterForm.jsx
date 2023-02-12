import { Button, DatePicker, Form, Input, Select, } from 'antd';
import styles from "./EmployeeRegisterForm.module.css";
import dayjs from 'dayjs';
import { Option } from "antd/es/mentions";
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
                span: 7,
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
                <Select placeholder="Выберите должность">
                    <Option value="директор">директор</Option>
                    <Option value="бухгалтер">бухгалтер</Option>
                    <Option value="мастер">мастер</Option>
                    <Option value="электрик">электрик</Option>
                    <Option value="сантехник">сантехник</Option>
                    <Option value="дворник">дворник</Option>
                    <Option value="уборщица">уборщица</Option>
                </Select>
            </Form.Item>
        </Form>
    );
};
