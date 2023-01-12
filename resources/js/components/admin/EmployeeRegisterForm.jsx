import {InfoCircleOutlined} from '@ant-design/icons';
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';
import {useState} from 'react';

const {RangePicker} = DatePicker;
const {TextArea} = Input;

export const EmployeeRegisterForm = () => {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const onFormLayoutChange = ({disabled}) => {
        setComponentDisabled(disabled);
    };
    return (
        <Form
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            onValuesChange={onFormLayoutChange}
        >

            <Form.Item label="Фамилия">
                <Input/>
            </Form.Item>
            <Form.Item label="Имя">
                <Input/>
            </Form.Item>
            <Form.Item label="Отчество">
                <Input/>
            </Form.Item>
            <Form.Item label="Дата рождения">
                <DatePicker/>
            </Form.Item>
            <Form.Item label="Номер телефона">
                <Input/>
            </Form.Item>
            <Form.Item label="Email">
                <Input/>
            </Form.Item>
        </Form>
    );
};
