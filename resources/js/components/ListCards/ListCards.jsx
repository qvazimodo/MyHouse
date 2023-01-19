import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Button,
    Card,
    Col,
    ConfigProvider,
    Form,
    Image,
    Input,
    List,
    Row,
    Space,
    Table,
    theme,
    Typography
} from "antd";
import {CARDS_API_URL, EMPLOYEES_API_URL} from "../../helpers/API";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";
import s from './ListCards.module.css';


const ListCards = () => {

    //-----------------------------------
    const [employeesList, setEmployeesList] = useState([])
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [links, setLinks] = useState({});
    const [current, setCurrent] = useState(1);
    const [visible, setVisible] = useState(false);


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
        <div className="container">
            <ConfigProvider
                theme={{ algorithm: theme.darkAlgorithm,
                }}
            >
                <h2 className="title-2">Объявления</h2>
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
                            <Card title={`Заголовок: ${item.title} client_id: ${item.client_id}`}>
                                <div style={{textAlign: "center"}}>
                                    <Image
                                        preview={{
                                            visible: false,
                                        }}
                                        width={200}
                                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                        onClick={() => setVisible(true)}
                                    />
                                    <div
                                        style={{
                                            display: 'none',
                                        }}
                                    >
                                        <Image.PreviewGroup
                                            preview={{
                                                visible,
                                                onVisibleChange: (vis) => setVisible(vis),
                                            }}
                                        >
                                            {/*<div>{item.img.map((photopath) => <Image*/}
                                            {/*    src={photopath.path}/>)}</div>*/}

                                            <Image
                                                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"/>
                                            <Image
                                                src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"/>
                                            <Image
                                                src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"/>

                                        </Image.PreviewGroup>
                                    </div>
                                </div>
                                <br/>
                                Номер
                                объявления: {item.key} <br/><br/> Текст: {item.description}<br/><br/>Цена: {item.price}$</Card>
                        </List.Item>
                    )}
                />
            </ConfigProvider>
        </div>
    );
}

export default ListCards;
