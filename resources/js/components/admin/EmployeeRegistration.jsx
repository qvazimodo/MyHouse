import React from 'react';
import {useState} from "react";
import { Collapse, Select, Typography } from 'antd';
import { EmployeeRegisterForm } from "./EmployeeRegisterForm";

const { Panel } = Collapse;
const { Text } = Typography;
const { Option } = Select;
//const { message } = App.useApp();


export const EmployeeRegistration = () => {
    const [fields, setFields] = useState([
        {
            name: ['lastName'],
            value: '',
        },
        {
            name: ['name'],
            value: '',
        },
        {
            name: ['patronymic'],
            value: '',
        },
        {
            name: ['birthDate'],
            value: '',
        },
        {
            name: ['phone'],
            value: '',
        },
        {
            name: ['Email'],
            value: '',
        },
    ]);
    return (
        <EmployeeRegisterForm
            fields={fields}
            onChange={(newFields) => {
                setFields(newFields);
            }}
        />
    )
}
