import React from 'react';
import style from "../../css/houses_list.css";
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

];
const HousesList = () =>
<>
        <h2 className="title_name" style={{ style }}>Мы обслуживаем дома</h2>
        <Table columns={columns}  />;
</>
export default HousesList;
