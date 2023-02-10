import React, {useEffect, useState} from 'react';
import {Button, Card, ConfigProvider, Form, Image, Input, List, Switch, theme, Typography, Upload} from "antd";
import {AUTH_USER_API_URL, CARDS_API_URL, CLIENT_CARDS_API_URL, PHOTO_PATH} from "../../helpers/API";
import s from './UserCards.module.css';
import {red} from "@ant-design/colors";
import {UploadOutlined} from "@ant-design/icons";
import "./UserCards.css";


const {Text} = Typography;

const UserCards = () => {

    const [employeesList, setEmployeesList] = useState([])
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [links, setLinks] = useState({});

    //--------------Для формы хуки
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [checkListPaginash, setCheckListPaginash] = useState(1);

    const [currentValue, setCurrentValue] = useState(true);
    const [fileList, setFileList] = useState([]);


    //---------------------- Для Кости (НЕ форма)
    //---------------------- Вывод карточек пользователя

    const onPageChange = (page) => {
        fetchEmployees(CLIENT_CARDS_API_URL + `?page=${page}`)
        setCheckListPaginash(page)
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


    const sendForm = (e) => {

        e.preventDefault();

        let formData = new FormData();

        fileList.forEach((file) => {
            formData.append('photos[]', file);
        });

        formData.append('title', title);
        formData.append('price', price);
        formData.append('description', description);


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
                onPageChange(checkListPaginash)
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
                <div style={{display:"flex", marginTop:150}}>
                <Text style={{
                    color: '#D4C17F',
                    display: 'block',
                    fontSize: 24,
                    fontFamily: "Railway"
                }}>Добавить объявление:</Text>
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
                <span style={{
                    fontSize:18,
                    color:'#D4C17F',
                    fontFamily: 'Railway'
                }}>Введите заголовок:</span>
                <Form.Item>
                    <Input name='title' value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }}/>
                </Form.Item>

                <span style={{
                    fontSize:18,
                    color:'#D4C17F',
                    fontFamily: "Railway"
                }}>Введите описание:</span>
                <Form.Item>
                    <Input name='description' value={description} onChange={(e) => {
                        setDescription(e.target.value)
                    }}/>
                </Form.Item>

                <span style={{fontSize:18, color:'#D4C17F', fontFamily: "Railway"}}>Введите цену:</span>
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
                            <div className="wrapperusercard">
                                    <Image.PreviewGroup
                                    >
                                        <div>{item.img.map((photopath) => <Image
                                            src={`${PHOTO_PATH + photopath.path}`}
                                            width={200}
                                            height={200}
                                        />)}</div>


                                    </Image.PreviewGroup>
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
