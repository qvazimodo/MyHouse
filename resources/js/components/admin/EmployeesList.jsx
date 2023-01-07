import React, {useEffect, useState} from 'react';
import {EMPLOYEES_API_URL} from '../../helpers/API';
import {Button, Space, Table} from "antd";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";

export const EmployeesList = () => {
    const [employeesList, setEmployeesList] = useState([])
    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const [links, setLinks] = useState({});
    const [current, setCurrent] = useState(1);

    const onPageChange = (page) => {
        fetchEmployees(EMPLOYEES_API_URL + `?page=${page}`)
    }


    useEffect(() => {
        fetchEmployees(EMPLOYEES_API_URL)
    }, [])

    useEffect(() => {
        setData(employeesList.map(item => {
            return {
                key: item.id,
                held_position: item.held_position,
                name: item.user.name,
                patronymic: item.user.patronymic,
                lastName: item.user["last_name"],
            }
        }))
    }, [employeesList]);


    const fetchEmployees = (page) => {
        setLoading(true)
        fetch(page)
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(result => {
                setEmployeesList(result.data)
                setCurrentPageNumber(result.meta.current_page)
                setTotalPages(result.meta.total)
                setPageSize(result.meta.per_page)
                setLinks(result.links)
                setTotalPages(result.meta.total)
                setLoading(false)
            });
    }

    /* useEffect(() => {
         fetch(EMPLOYEES_API_URL)
             .then((response) => {
                 if (!response.ok){
                     throw new Error(Request failed with status ${response.status});
                 }
                 return response.json();
             })
             .then((result) => setGists(result))
             .catch((err) => console.log(err));
     }, []);*/

    const deleteEmployee = (id) => {
        fetch(EMPLOYEES_API_URL + `${id}`, {method: 'DELETE'})
            .then(response => response.json())
            .catch((error) => console.log(`Backend delete Employee error: ${error}`))
            .then((message) => console.log(message));
    }

    return (
        <div className='container'>
            <Table
                loading={loading}
                dataSource={data}
                pagination={{
                    pageSize,
                    total: totalPages,
                    onChange: onPageChange
                    // showSizeChanger: true,
                }}
            >
                <ColumnGroup title="ФИО">
                    <Column title="Фамилия" dataIndex="lastName" key="lastName"/>
                    <Column title="Имя" dataIndex="name" key="name"/>
                    <Column title="Отчество" dataIndex="patronymic" key="patronymic"/>
                </ColumnGroup>
                <Column title="Должность" dataIndex="held_position" key="held_position"/>
                <Column title="Возраст" dataIndex="age" key="age"/>
                <Column title="Адрес" dataIndex="address" key="address"/>
                <Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            {/*<Button>{record.lastName}</Button>*/}
                            <Button type="primary">Задачи</Button>
                            <Button>Премировать</Button>
                            <Button danger onClick={() => {
                                console.log(record)
                                deleteEmployee(record.key)
                                fetchEmployees(EMPLOYEES_API_URL + `?page=${currentPageNumber}`)
                            }}>Уволить</Button>
                        </Space>
                    )}
                />
            </Table>
            <Button type="primary" onClick={() => {
                console.log(employeesList, data)

            }}>Вывести данные в
                консоль</Button>
        </div>
    )
}
