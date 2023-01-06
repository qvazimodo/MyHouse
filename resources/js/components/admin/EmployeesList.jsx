import React, { useEffect, useState } from 'react';
import { EMPLOYEES_API_URL } from '../../helpers/API';
import { Button, Space, Table } from "antd";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";

export const EmployeesList = () => {
    const [ employeesList, setEmployeesList ] = useState( [] )
    const [ data, setData ] = useState( [] );
    const [ dataLink, setDataLink ] = useState( EMPLOYEES_API_URL );
    const [ meta, setMeta ] = useState( {per_page:3} );
    const [ links, setLinks ] = useState( {} );
    const [current, setCurrent] = useState(1);


    const itemRender = ( _, type, originalElement ) => {
        if ( type === 'prev' ) {
            return <a onClick={()=>setDataLink(links.prev)}>Previous</a>;
        }
        if ( type === 'next'  ) {
            return <a onClick={()=>setDataLink(links.next)}>Next</a>;
        }
        return originalElement;
    };

    const onPageChange = (page)=>{

        setCurrent(page)
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
        fetchEmployees(dataLink)
    }, [dataLink] )

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


    const fetchEmployees = ( url ) => {
        fetch( url )
            .then( response => response.json() )
            .catch( err => console.log( err ) )
            .then( result => {
                console.log(url, result)
                setEmployeesList( result.data )
                setLinks(result.links)
                setMeta( result.meta )
                console.log('fetch')
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
            <Table dataSource={ data } pagination={ {
                pageSize: meta.per_page,
                total:meta.total,
                itemRender,
                onChange: onPageChange
                // showSizeChanger: true,
            } }>
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
