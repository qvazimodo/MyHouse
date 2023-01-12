import React, { useEffect, useState } from 'react';
import { EMPLOYEES_API_URL } from '../../helpers/API';
import { Button, Modal, Space, Table } from "antd";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";

export const EmployeesList = () => {
    const [ employeesList, setEmployeesList ] = useState( [] )
    const [ currentPageNumber, setCurrentPageNumber ] = useState( 1 )
    const [ totalPages, setTotalPages ] = useState( 1 );
    const [ pageSize, setPageSize ] = useState( 5 );
    const [ loading, setLoading ] = useState( false );
    const [ data, setData ] = useState( [] );

    const [ links, setLinks ] = useState( {} );
    const [ currentId, setCurrentId ] = useState( {} );

    const [ open, setOpen ] = useState( false );
    const [ confirmLoading, setConfirmLoading ] = useState( false );
    const [ modalText, setModalText ] = useState( 'Content of the modal' );
    const showModal = () => {
        setOpen( true );
    };
    const handleOk = () => {
        setConfirmLoading( true );

        deleteEmployee( currentId )
        fetchEmployees( EMPLOYEES_API_URL + `?page=${ currentPageNumber }` )

        setTimeout( () => {
            setOpen( false );
            setConfirmLoading( false );
        }, 2000 );
    };
    const handleCancel = () => {
        console.log( 'Clicked cancel button' );
        setOpen( false );
    };

    const onPageChange = ( page ) => {
        fetchEmployees( EMPLOYEES_API_URL + `?page=${ page }` )
    }


    useEffect( () => {
        fetchEmployees( EMPLOYEES_API_URL )
    }, [] )

    useEffect( () => {
        setData( employeesList.map( item => {
            return {
                key: item.id,
                held_position: item.held_position,
                name: item.user.name,
                patronymic: item.user.patronymic,
                lastName: item.user['last_name'],
                birthDate: new Date(item.user['birth_date']).toLocaleDateString(),
                // age:(new Date().getTime() - new Date(item.user['birth_date']).getTime()).getFullYear()
                age: new Date(Date.now() - new Date(item.user['birth_date']).getTime()).getFullYear() - 1970,
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
        fetch( EMPLOYEES_API_URL + '/' + `${ id }`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': document.querySelector( 'meta[name="csrf-token"]' ).getAttribute( 'content' ),
                'Accept': 'application/json'
            }
        } )
            .then( response => response.json() )
            .catch( ( error ) => console.log( `Backend delete Employee error: ${ error }` ) )
            .then( ( message ) => console.log( message ) );
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
                <Column title="Дата рождения" dataIndex="birthDate" key="birthDate"/>
                <Column title="Возраст" dataIndex="age" key="age"/>
                <ColumnGroup
                title="Доступные действия">
                    <Column
                        key="action1"
                        render={(_, record) => (
                            <Space size="middle">
                                {/*<Button>{record.lastName}</Button>*/}
                                <Button type="primary">Задачи</Button>
                            </Space>
                        ) }
                    />
                    <Column
                    key="action2"
                    render={(_, record) => (
                        <Space size="middle">
                            {/*<Button>{record.lastName}</Button>*/}
                            <Button>Премировать</Button>
                        </Space>
                    ) }
                />
                    <Column
                    key="action3"
                    render={(_, record) => (
                        <Space size="middle">
                            {/*<Button>{record.lastName}</Button>*/}
                            <Button danger onClick={ () => {
                                console.log( record )
                                setOpen( true )
                                setModalText(
                                    `Производится увольнение сотрудника
                                    ${ record.name }  ${ record.patronymic }  ${ record.lastName }
                                    с должности ${ record.held_position } ` );
                                setCurrentId( record.key )
                            } }>Уволить</Button>
                        </Space>
                    ) }
                />
                </ColumnGroup>
            </Table>
            <Button type="primary" onClick={ () => {
                console.log( employeesList, data )

            } }>Вывести данные в
                консоль</Button>
            <Modal
                title="Title"
                open={ open }
                onOk={ handleOk }
                confirmLoading={ confirmLoading }
                onCancel={ handleCancel }
            >
                <p>{ modalText }</p>
            </Modal>
        </div>
    )
}
