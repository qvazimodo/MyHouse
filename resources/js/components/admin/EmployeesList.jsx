import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteEmployee, fetchEmployees, putEmployeeById} from "../../features/employee/employeeSlice";
import {Button, Form, Input, Popconfirm, Space, Table, Typography} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import {EditableCell} from '../Editable/EditableCell';
import './styles/EmployeesList.css';

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};
export const EmployeesList = (props) => {
    const [form] = Form.useForm();
    const [employeeIsUpdated, setEmployeeIsUpdated] = useState(false);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.key === editingKey;
    //функционал поиска по значениям в столбцах
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters, close}) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });


    const dispatch = useDispatch()
    const selectedAddress = useSelector((state => state.house.selectedAddress))
    const employeesArray = useSelector(state => state.employee.array)

    useEffect(() => {
        console.log(selectedAddress)
        dispatch(fetchEmployees(selectedAddress)).then(() => setEmployeeIsUpdated(false))

    }, [selectedAddress, employeeIsUpdated]);


    let data = employeesArray.map(item => {
        return {
            key: item['employee_id'],
            employeeId: item['employee_id'],
            userId: item['user_id'],
            name: item['employee_name'],
            patronymic: item['employee_patronymic'],
            lastName: item['employee_last_name'],
            birthDate: new Date(item['employee_birth_date']).toLocaleDateString('ru-Ru'),
            phone: item['employee_phone'],
            email: item['employee_email'],
            position: item['position'],
        }
    })


    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            age: '',
            address: '',
            ...record,
        });
        setEditingKey(record.key);
    };
    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        console.log(key)
        try {
            const row = await form.validateFields();
            const newData = [...data];
            console.log(newData)
            const index = newData.findIndex((item) => key === item.key);
            console.log(index)
            if (index > -1) {
                const item = newData[index];
                const newEmployeeData = {
                    ...item,
                    ...row,
                }
                dispatch(putEmployeeById({...newEmployeeData, ...selectedAddress}))
                    .then(() => setEmployeeIsUpdated(true))
                setEditingKey('');
            } else {
                newData.push(row);
                // setData(newData);
                // console.log(newData)
                // dispatch(putEmployeeById(newData))
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'Должность',
            dataIndex: 'position',
            editable: true,
            sorter: (a, b) => {
                return a.apartmentNumber - b.apartmentNumber
            },
            defaultSortOrder: 'ascend',
        },
        {
            title: 'Фамилия',
            dataIndex: 'lastName',
            editable: true,
            ...getColumnSearchProps('lastName'),
            filters: [...data.map(item => {
                return {
                    text: item.lastName,
                    value: item.lastName,
                }
            })
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.lastName.indexOf(value) === 0,
            sorter: (a, b) => {
                return (a.lastName.toLowerCase() < b.lastName.toLowerCase()) ? -1 : 1
            },
            defaultSortOrder: 'ascend',
        },
        {
            title: 'Имя',
            dataIndex: 'name',
            editable: true,
            filters: [...data.map(item => {
                return {
                    text: item.name,
                    value: item.name,
                }
            })
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => {
                return (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : 1
            },
            sortDirections: ['ascend'],
        },
        {
            title: 'Отчество',
            dataIndex: 'patronymic',
            editable: true,
        },
        {
            title: 'Дата рождения',
            dataIndex: 'birthDate',
            editable: true,
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            editable: true,
        },
        {
            title: 'Электронная почта',
            dataIndex: 'email',
            editable: true,
        },
        {
            title: 'Доступные действия',
            children: [
                {
                    dataIndex: 'edit',
                    render: (_, record) => {
                        const editable = isEditing(record);
                        return editable ? (
                            <span className="flex">
            <Typography.Link
                onClick={() => save(record.key)}
                style={{
                    marginRight: 8,
                }}
            >
              <Button>Сохранить</Button>
            </Typography.Link>
            <Popconfirm title="Уверены, что хотите отменить?" onConfirm={cancel}>
                <Button>Отмена</Button>
            </Popconfirm>
          </span>
                        ) : (
                            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                                <Button type="primary">Редактировать</Button>
                            </Typography.Link>
                        );
                    },
                },
                {

                    dataIndex: 'delete',
                    render: (_, record) =>
                        data.length >= 1 ? (
                            <Popconfirm title="Вы уверены, что хотите удалить учётную запись данного сотрудника?"
                                        onConfirm={() => handleDelete(record.key)}>
                                <Button type="primary" danger>Удалить</Button>
                            </Popconfirm>
                        ) : null,
                },
            ]
        }
    ];

    const handleDelete = (key) => {
        const selectedRow = data.filter((item) => item.key === key);
        console.log(selectedRow)
        dispatch(deleteEmployee(selectedRow[0].employeeId))
            .then(() => setEmployeeIsUpdated(true))
    };

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <Form form={form} component={false}>
            <Table columns={mergedColumns}
                   dataSource={data}
                   bordered
                   onChange={onChange}
                   rowClassName="editable-row"
                   pagination={{
                       hideOnSinglePage: true,
                       onChange: cancel,
                       // pageSize,
                       // total: totalPages,
                       // onChange: onPageChange
                       // showSizeChanger: true,
                   }}
                   components={{
                       body: {
                           cell: EditableCell,
                       },
                   }}
            />
        </Form>
    );
}

