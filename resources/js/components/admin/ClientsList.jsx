import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchClients } from "../../features/client/clientSlice";
import { Button, Form, Input, Popconfirm, Space, Table, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const onChange = ( pagination, filters, sorter, extra ) => {
    console.log( 'params', pagination, filters, sorter, extra );
};
export const ClientsList = ( props ) => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.key === editingKey;
    //функционал поиска по значениям в столбцах
    const [ searchText, setSearchText ] = useState( '' );
    const [ searchedColumn, setSearchedColumn ] = useState( '' );
    const searchInput = useRef( null );
    const handleSearch = ( selectedKeys, confirm, dataIndex ) => {
        confirm();
        setSearchText( selectedKeys[0] );
        setSearchedColumn( dataIndex );
    };
    const handleReset = ( clearFilters ) => {
        clearFilters();
        setSearchText( '' );
    };
    const getColumnSearchProps = ( dataIndex ) => ({
        filterDropdown: ( { setSelectedKeys, selectedKeys, confirm, clearFilters, close } ) => (
            <div
                style={ {
                    padding: 8,
                } }
                onKeyDown={ ( e ) => e.stopPropagation() }
            >
                <Input
                    ref={ searchInput }
                    placeholder={ `Search ${ dataIndex }` }
                    value={ selectedKeys[0] }
                    onChange={ ( e ) => setSelectedKeys( e.target.value ? [ e.target.value ] : [] ) }
                    onPressEnter={ () => handleSearch( selectedKeys, confirm, dataIndex ) }
                    style={ {
                        marginBottom: 8,
                        display: 'block',
                    } }
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={ () => handleSearch( selectedKeys, confirm, dataIndex ) }
                        icon={ <SearchOutlined/> }
                        size="small"
                        style={ {
                            width: 90,
                        } }
                    >
                        Search
                    </Button>
                    <Button
                        onClick={ () => clearFilters && handleReset( clearFilters ) }
                        size="small"
                        style={ {
                            width: 90,
                        } }
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={ () => {
                            confirm( {
                                closeDropdown: false,
                            } );
                            setSearchText( selectedKeys[0] );
                            setSearchedColumn( dataIndex );
                        } }
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={ () => {
                            close();
                        } }
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: ( filtered ) => (
            <SearchOutlined
                style={ {
                    color: filtered ? '#1890ff' : undefined,
                } }
            />
        ),
        onFilter: ( value, record ) =>
            record[dataIndex].toString().toLowerCase().includes( value.toLowerCase() ),
        onFilterDropdownOpenChange: ( visible ) => {
            if ( visible ) {
                setTimeout( () => searchInput.current?.select(), 100 );
            }
        },
        render: ( text ) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={ {
                        backgroundColor: '#ffc069',
                        padding: 0,
                    } }
                    searchWords={ [ searchText ] }
                    autoEscape
                    textToHighlight={ text ? text.toString() : '' }
                />
            ) : (
                text
            ),
    });


    const dispatch = useDispatch()
    const selectedAddress = useSelector( (state => state.house.selectedAddress) )
    const clientsArray = useSelector( state => state.client.array )
    useEffect( () => {
        console.log( selectedAddress )
        dispatch( fetchClients( selectedAddress ) )

    }, [ selectedAddress ] );

    let data = clientsArray.map( item => {
        return {
            key: item['client_id'],
            clientId: item['client_id'],
            userId: item['user_id'],
            name: item['client_name'],
            patronymic: item['client_patronymic'],
            lastName: item['client.last_name'],
            birthDate: new Date( item['client_birth_date'] ).toLocaleDateString( 'ru-Ru' ),
            phone: item['client_phone'],
            email: item['client_email'],
            entrance: item.entrance,
            floor: item.floor,
            apartmentId: item['apartment_id'],
            apartmentNumber: item['apartment_number'],
        }
    } )

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
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'Номер подъезда',
            dataIndex: 'entrance',
            editable: true,
            sorter: ( a, b ) => {
                return a.entrance - b.entrance
            },
            defaultSortOrder: 'ascend',
        },
        {
            title: 'Этаж',
            dataIndex: 'floor',
            editable: true,
            sorter: ( a, b ) => {
                return a.floor - b.floor
            },
            defaultSortOrder: 'ascend',
        },
        {
            title: 'Номер квартиры',
            dataIndex: 'apartmentNumber',
            editable: true,
            sorter: ( a, b ) => {
                return a.apartmentNumber - b.apartmentNumber
            },
            defaultSortOrder: 'ascend',
        },
        {
            title: 'Фамилия',
            dataIndex: 'lastName',
            editable: true,
            ...getColumnSearchProps( 'lastName' ),
            filters: [ ...data.map( item => {
                return {
                    text: item.lastName,
                    value: item.lastName,
                }
            } )
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: ( value, record ) => record.lastName.indexOf( value ) === 0,
            sorter: ( a, b ) => {
                return (a.lastName.toLowerCase() < b.lastName.toLowerCase()) ? -1 : 1
            },
            defaultSortOrder: 'ascend',
        },
        {
            title: 'Имя',
            dataIndex: 'name',
            editable: true,
            filters: [ ...data.map( item => {
                return {
                    text: item.name,
                    value: item.name,
                }
            } )
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: ( value, record ) => record.name.indexOf( value ) === 0,
            sorter: ( a, b ) => {
                return (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : 1
            },
            sortDirections: [ 'ascend' ],
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
            title: 'Номер телефона',
            dataIndex: 'phone',
            editable: true,
        },
        {
            title: 'Адрес электронной почты',
            dataIndex: 'email',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
            <Typography.Link
                onClick={() => save(record.key)}
                style={{
                    marginRight: 8,
                }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
                );
            },
        },
    ];

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
                   dataSource={ data }
                   bordered
                   onChange={ onChange }
                   rowClassName="editable-row"
                   pagination={ {
                       hideOnSinglePage: true,
                       onChange: cancel,
                       // pageSize,
                       // total: totalPages,
                       // onChange: onPageChange
                       // showSizeChanger: true,
                   } }
                   components={{
                       body: {
                           cell: EditableCell,
                       },
                   }}
            />
        </Form>
    );
}

