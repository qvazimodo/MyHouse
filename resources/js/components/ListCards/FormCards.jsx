import React from 'react';
import {Button, Form, Input, Typography} from "antd";

const { Text } = Typography;

const FormCards = () => {

    return (
        <div>
            <Text>Заполните форму для ввода новых показаний:</Text>
            <Form>
                <Form.Item label="Введите заголовок:">
                    <Input/>
                </Form.Item>
                <Form.Item label="Введите описание:">
                    <Input/>
                </Form.Item>
                <Form.Item label="Введите цену:">
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Отправить</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default FormCards;
