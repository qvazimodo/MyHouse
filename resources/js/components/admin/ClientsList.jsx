import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchClients } from "../../features/client/clientSlice";
import { Button, Input, Popconfirm, Space, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import "./styles/ClientsList.css";
import { EditableRow } from "../Editable/EditableRow";
import { EditableCell } from "../Editable/EditableCell";

const onChange = ( pagination, filters, sorter, extra ) => {
    console.log( 'params', pagination, filters, sorter, extra );
};
export const ClientsList = ( props ) => {
    //функционал поиска по значениям в столбцах
    const [ searchText, setSearchText ] = useState( '' );
    const [ searchedColumn, setSearchedColumn ] = useState( '' );
    const searchInput = useRef( null );
    const [dataSource, setDataSource] = useState([])
    const [count, setCount] = useState(2);

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

    useEffect( () => {
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
        setDataSource(data)
    }, [ clientsArray ] );





    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };

    const defaultColumns = [
        {
            title: 'Номер подъезда',
            dataIndex: 'entrance',
            sorter: ( a, b ) => {
                return a.entrance - b.entrance
            },
            defaultSortOrder: 'ascend',
        },
        {
            title: 'Этаж',
            dataIndex: 'floor',
            sorter: ( a, b ) => {
                return a.floor - b.floor
            },
            defaultSortOrder: 'ascend',
        },
        {
            title: 'Номер квартиры',
            dataIndex: 'apartmentNumber',
            sorter: ( a, b ) => {
                return a.apartmentNumber - b.apartmentNumber
            },
            defaultSortOrder: 'ascend',
        },
        {
            title: 'Фамилия',
            dataIndex: 'lastName',
            ...getColumnSearchProps( 'lastName' ),
            filters: [ ...dataSource.map( item => {
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
            filters: [ ...dataSource.map( item => {
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
        },
        {
            title: 'Дата рождения',
            dataIndex: 'birthDate',
        },
        {
            title: 'Номер телефона',
            dataIndex: 'phone',
        },
        {
            title: 'Адрес электронной почты',
            dataIndex: 'email',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <a>Delete</a>
                    </Popconfirm>
                ) : null,
        },
    ];

    const columns = defaultColumns.map( ( col ) => {
        if ( !col.editable ) {
            return col;
        }
        return {
            ...col,
            onCell: ( record ) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    } );

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const handleAdd = () => {
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: '32',
            address: `London, Park Lane no. ${count}`,
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };
    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };

    return (
        <div>
            <Button
                onClick={ handleAdd }
                type="primary"
                style={ {
                    marginBottom: 16,
                } }
            >
                Add a row
            </Button>
            <Table columns={ columns }
                   components={ components }
                   rowClassName={ () => 'editable-row' }
                   bordered
                   dataSource={dataSource}
                   onChange={ onChange }
                   pagination={ {
                       hideOnSinglePage: true,
                       // pageSize,
                       // total: totalPages,
                       // onChange: onPageChange
                       // showSizeChanger: true,
                   } }

            />
        </div>
    );
}

