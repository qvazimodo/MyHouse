import React, { useEffect, useState } from 'react';
import { EMPLOYEES_API_URL } from '../../helpers/API';
import { Button, Space, Table } from "antd";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";

export const EmployeesList = () => {
    const [ employeesList, setEmployeesList ] = useState( [] )
    const [ totalPages, setTotalPages ] = useState( 1 );
    const [ pageSize, setPageSize ] = useState( 5 );
    const [ loading, setLoading ] = useState( false );
    const [ data, setData ] = useState( [] );

    const [ links, setLinks ] = useState( {} );
    const [ current, setCurrent ] = useState( 1 );

    const onPageChange = (page)=>{
        fetchEmployees( EMPLOYEES_API_URL + `?page=${ page }` )
    }

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Фамилия',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Отчество',
            dataIndex: 'patronymic',
            key: 'patronymic',
        },
        {
            title: 'Должность',
            dataIndex: 'held_position',
            key: 'held_position',
        },
    ];

    useEffect( () => {
        fetchEmployees( EMPLOYEES_API_URL )
    }, [] )

    useEffect( () => {
        setData( employeesList.map( item => {
            return {
                key: item.id,
                profession: item.profession,
                name: item.user.name,
                patronymic: item.user.patronymic,
                lastName: item.user["last_name"],
            }
        } ) )
    }, [ employeesList ] );


    const fetchEmployees = ( page ) => {
        setLoading( true )
        fetch( page )
            .then( response => response.json() )
            .catch( err => console.log( err ) )
            .then( result => {
                setEmployeesList( result.data )
                setTotalPages( result.meta.total )
                setPageSize( result.meta.per_page )
                setLinks( result.links )
                setTotalPages( result.meta.total )
                setLoading( false )
            } );
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


    return (
        <div className='container'>
            <Table
                loading={ loading }
                dataSource={ data }
                pagination={ {
                    pageSize,
                    total: totalPages,
                    onChange: onPageChange
                    // showSizeChanger: true,
                } }
            >
                <ColumnGroup title="ФИО">
                    <Column title="Фамилия" dataIndex="lastName" key="lastName"/>
                    <Column title="Имя" dataIndex="name" key="name"/>
                    <Column title="Отчество" dataIndex="patronymic" key="patronymic"/>
                    <Column title="Должность" dataIndex="held_position" key="held_position"/>
                    <Column title="Возраст" dataIndex="age" key="age"/>
                    <Column title="Адрес" dataIndex="address" key="address"/>
                    <Column
                        title="Action"
                        key="action"
                        render={ ( _, record ) => (
                            <Space size="middle">
                                <a>Invite { record.lastName }</a>
                                <a onClick={ () => console.log( 'del' + record.key ) }>Delete</a>
                            </Space>
                        ) }
                    />
                </ColumnGroup>
            </Table>
            <Button type="primary" onClick={ () => console.log( employeesList, data ) }>Вывести данные в
                консоль</Button>
        </div>
    )
}
