import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchClients } from "../../features/client/clientSlice";
import { Button, Input, Space, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const onChange = ( pagination, filters, sorter, extra ) => {
    console.log( 'params', pagination, filters, sorter, extra );
};
export const ClientsList = ( props ) => {
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
    const columns = [
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
    ];

    return (
        <div onClick={ () => console.log( data ) }>
            <Table columns={ columns }
                   dataSource={ data }
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

