import React, {useEffect, useState} from 'react';
import {Card, List} from "antd";
import {MYCARDS_API_URL} from "../helpers/API";



const UserCards = () => {

    const [employeesList, setEmployeesList] = useState([])
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [links, setLinks] = useState({});
    const [current, setCurrent] = useState(1);

    const onPageChange = (page) => {
        fetchEmployees(MYCARDS_API_URL + `?page=${page}`)
    }


    useEffect(() => {
        fetchEmployees(MYCARDS_API_URL)
    }, [])


    useEffect(() => {
        setData(employeesList.map(item => {
            return {
                key: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                client_id: item.client_id,
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
                setTotalPages(result.meta.total)
                setPageSize(result.meta.per_page)
                setLinks(result.links)
                setLoading(false)
            });
    }




    return (
        <div className='container'>
            <h2 className='mycards'>Ваши карточки</h2>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                }}
                pagination={ {
                    pageSize,
                    total: totalPages,
                    onChange: onPageChange
                    // showSizeChanger: true,
                } }
                loading={ loading }
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={`Заголовок: ${item.title} client_id: ${item.client_id}`}>Номер объявления: {item.key} <br/><br/> Текст: {item.description}<br/><br/>Цена: {item.price}$</Card>
                    </List.Item>
                )}
            />
        </div>
    );
}
export default UserCards;
