import React from 'react';
import {Card, List, Space, Table, Tag} from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;
const columns = [
    {
        title: 'Номер дома',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Lorem',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Lorem',
        dataIndex: 'address',
        key: 'address',
    },


// const data = [
//     {
//         key: '1',
//         name: 'Тепловая энергия (отопление)',
//         age: "2 546,83 руб/Гк",
//         address: '2 912,53 руб/Гк',
//     },
//     {
//         key: '2',
//         name: 'Холодное водоснабжение (ХВС)',
//         age: "43,57 руб/куб.м",
//         address: '50,93 руб/куб.м',
//     },
//     {
//         key: '3',
//         name: 'Водоотведение (ХВС + ГВС)',
//         age: "32,02 руб/куб.м",
//         address: '39,97 руб/куб.м',
//     },
//     {
//         key: '4',
//         name: 'Горячее водоснабжение (ГВС)',
//         age: "211,67 руб/куб.м",
//         address: '243,16 руб/куб.м',
//     },
//     {
//         key: '5',
//         name: 'Тепловая энергия (отопление, ООО "Ремэнерго")',
//         age: "2 601,56 руб/Гкал",
//         address: '2 945,03 руб/Гкал',
//     },
//     {
//         key: '6',
//         name: 'Горячее водоснабжение (ГВС, ООО "Ремэнерго")',
//         age: "207,17 руб/Гкал ",
//         address: '236,18 руб/Гкал ',
//     },
];
const HousesList = () =>
    <div className="container">
        <h2 className="title-2">Мы обслуживаем дома</h2>

        <Table columns={columns}  />;
    </div>

export default HousesList;
