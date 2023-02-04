import React, {useEffect} from 'react';
import {Button, Calendar, Collapse, Select, Space, Table, Tag} from "antd";
import {ALL_METERS_VALUES_API_URL, CHECK_TIMETABLE_API_URL, TIMETABLE_API_URL} from "../../helpers/API";

import './RequestForEmployee.css'

const columns = [
    {
        title: 'ФИО',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },

    {
        title: 'Время работы:',
        key: 'times',
        render: () => (
            <Select
                defaultValue="Время:"
                className='select-time-date'
                // onChange={handleChange}
                options={[
                    {
                        value: '9:00-11:00',
                        label: '9:00-11:00',
                    },
                    {
                        value: '11:00-13:00',
                        label: '11:00-13:00',
                        disabled: true,
                    },
                    {
                        value: '13:00-15:00',
                        label: '13:00-15:00',
                    },
                    {
                        value: '15:00-17:00',
                        label: '15:00-17:00',
                        disabled: true,
                    },
                ]}
            />
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        times: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        times: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        times: ['cool', 'teacher'],
    },
];

const RequestForEmployeeTime = () => {

    const {Panel} = Collapse;

    useEffect(() => {

        fetch(CHECK_TIMETABLE_API_URL)
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(result => {
                console.log(result);
            });
    }, [])

    return (
        <div className="container">
            <Collapse className='color-panel-date-time' accordion>
                <Panel header="Выберите время и сотруданика" key="1" className="cabinet-txt">
                    <Table columns={columns} dataSource={data} />
                </Panel>
            </Collapse>
        </div>
    );
}

export default RequestForEmployeeTime;
