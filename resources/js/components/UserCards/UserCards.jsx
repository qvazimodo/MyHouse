import React, {useEffect, useState} from 'react';
import {Button, Card, ConfigProvider, Form, Image, Input, List, Switch, theme, Typography, Upload} from "antd";
import {AUTH_USER_API_URL, CARDS_API_URL, CLIENT_CARDS_API_URL} from "../../helpers/API";
import s from './UserCards.module.css';
import {red} from "@ant-design/colors";
import {UploadOutlined} from "@ant-design/icons";

const {Text} = Typography;

const UserCards = () => {

    const [employeesList, setEmployeesList] = useState([])
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [links, setLinks] = useState({});
    const [current, setCurrent] = useState(1);

    //--------------Для формы хуки
    const [items, setItems] = useState([]);
    const [argument, setArgument] = useState({
        userId: ''
    });
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const [visible, setVisible] = useState(false);

    const [currentValue, setCurrentValue] = useState(true);
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);


    //---------------------- Для Кости (НЕ форма)
    //---------------------- Вывод карточек пользователя

    const onPageChange = (page) => {
        fetchEmployees(CLIENT_CARDS_API_URL + `?page=${page}`)
    }


    useEffect(() => {
        fetchEmployees(CLIENT_CARDS_API_URL)
    }, [])


    useEffect(() => {
        setData(employeesList.map(item => {
            return {
                id: item.id,
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
                setEmployeesList(result.data)
                setTotalPages(result.meta.total)
                setPageSize(result.meta.per_page)
                setLinks(result.links)
                setLoading(false)
            });
    }

    //-----------------------------------Форма

    useEffect(() => {
        fetch(AUTH_USER_API_URL)
            .then(response => response.json())
            .catch(e => console.log(e))
            .then(data => setArgument({
                userId: data.id
            }));

        /* Получение информации по счетчикам пользователя */

    }, [])

    console.log(argument.userId)

    const sendForm = (e) => {

        e.preventDefault();

        let formData = new FormData();

        fileList.forEach((file) => {
            formData.append('photos[]', file);
        });

        formData.append('title', title);
        formData.append('price', price);
        formData.append('description', description);


        //Вывод значений formData
        for(let [name, value] of formData) {
            alert(`${name} = ${value}`); // key1=value1, потом key2=value2
        }

        fetch(CARDS_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
                    .getAttribute('content'),
            },
            body: formData
        })
            .then(response => response.json())
            .catch(e => console.log(e))
            .then(result => {
                setData([...data, result])
                console.log(result)
            })

    }


    const props = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };

    return (
        <div className='container'>
            <ConfigProvider
                theme={{
                    algorithm: theme.darkAlgorithm,
                }}

            >
                <div style={{display:"flex"}}>
                <Text style={{color: '#D4C17F', display: 'block', fontSize: 24}}>Добавить объявление:</Text>
                <Switch
                    style={{backgroundColor: "darkgray", marginTop:9, marginLeft:12}}
                    defaultChecked
                    onChange={(value) => {
                        setCurrentValue(value)
                    }}
                />
        </div>

            {/*Форма*/}

            <Form
                layout={'vertical'}
                size={'middle'}
                disabled={currentValue}
            >
                <span style={{fontSize:18, color:'#D4C17F'}}>Введите заголовок:</span>
                <Form.Item>
                    <Input name='title' value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }}/>
                </Form.Item>

                <span style={{fontSize:18,color:'#D4C17F'}}>Введите описание:</span>
                <Form.Item>
                    <Input name='description' value={description} onChange={(e) => {
                        setDescription(e.target.value)
                    }}/>
                </Form.Item>

                <span style={{fontSize:18, color:'#D4C17F'}}>Введите цену:</span>
                <Form.Item>
                    <Input name='price' value={price} type='number' onChange={(e) => {
                        setPrice(e.target.value)
                    }}/>
                </Form.Item>

                <span style={{fontSize:18, color:'#D4C17F'}}>Отправить фото:</span>
                <Form.Item>
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Select File</Button>
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" style={{backgroundColor:'#D4C17F'}} onClick={sendForm}>Отправить</Button>
                </Form.Item>
            </Form>

            {/*Карточки*/}

            <h2 className={s.mycards}>Ваши карточки</h2>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 2,
                    xl: 2,
                    xxl: 2,
                }}
                pagination={{
                    style:{textAlign:'center'},
                    pageSize,
                    total: totalPages,
                    onChange: onPageChange
                    // showSizeChanger: true,
                }}
                style={{marginBottom:90}}
                loading={loading}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={`Заголовок: ${item.title} client_id: ${item.client_id}`}>
                            <div style={{textAlign:"center"}}>
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

                            Номер объявления: {item.id} <br/><br/> Текст: {item.description}<br/><br/>Цена: {item.price}$

                        </Card>
                    </List.Item>

                )}
            />
                </ConfigProvider>
        </div>
    );
}
export default UserCards;
