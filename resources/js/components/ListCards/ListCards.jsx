import React, {useEffect, useState} from 'react';
import {
    Card,
    ConfigProvider,
    Image,
    List,
    theme,
} from "antd";
import {CARDS_API_URL, PHOTO_PATH} from "../../helpers/API";
import './ListCards.css'


const ListCards = () => {

    //-----------------------------------
    const [employeesList, setEmployeesList] = useState([])
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [links, setLinks] = useState({});


    const onPageChange = (page) => {
        fetchEmployees(CARDS_API_URL + `?page=${page}`)
    }


    useEffect(() => {
        fetchEmployees(CARDS_API_URL)
    }, [])


    useEffect(() => {
        setData(employeesList.map(item => {
            return {
                key: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                client_id: item.client_id,
                img: item.photos
            }
        }))
    }, [employeesList]);

    const fetchEmployees = (page) => {
        setLoading(true)
        fetch(page)
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(result => {
                console.log(result)
                setEmployeesList(result.data)
                setTotalPages(result.meta.total)
                setPageSize(result.meta.per_page)
                setLinks(result.links)
                setLoading(false)
            });
    }

    return (
        <div className="container" style={{
            padding: 40,
        }}>
            <ConfigProvider
                theme={{
                    algorithm: theme.darkAlgorithm,
                }}
            >
                <h2 className="title_name">Объявления</h2>
                <List
                    style={{
                        marginBottom: 30
                    }}
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                    }}
                    pagination={{
                        pageSize,
                        total: totalPages,
                        onChange: onPageChange
                        // showSizeChanger: true,
                    }}
                    loading={loading}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <Card title={`Номер объявления: ${item.key}`}>
                                <div className="wrapperusercard">
                                    <Image.PreviewGroup
                                    >
                                        <div>{item.img.map((photopath) => <Image
                                            src={`${PHOTO_PATH}` + `${photopath.path}`}
                                            width={200}
                                            height={200}
                                        />)}</div>


                                    </Image.PreviewGroup>
                                </div>
                                <br/>
                                Заголовок: {item.title}<br/><br/> Описание: {item.description}<br/><br/>Цена: {item.price}$</Card>
                        </List.Item>
                    )}
                />
            </ConfigProvider>
        </div>
    );
}

export default ListCards;
