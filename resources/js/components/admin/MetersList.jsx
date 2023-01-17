import { Button, Card, ConfigProvider, Input, Layout, List, Select, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import ruRu from "antd/lib/locale/ru_RU";
import { Option } from "antd/es/mentions";
import { ALL_METERS_VALUES_API_URL } from "../../helpers/API";

const { Header, Content, Footer, Sider } = Layout;
export const MetersList = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [ loading, setLoading ] = useState( false );
    const [ meters, setMeters ] = useState( [] );
    const [ meta, setMeta ] = useState( [] );
    const [ months, setMonths ] = useState( [] );
    const [ years, setYears ] = useState( [] );
    const [ currentPageNumber, setCurrentPageNumber ] = useState( 1 )
    const [ totalPages, setTotalPages ] = useState( 1 );
    const [ pageSize, setPageSize ] = useState( 5 );
    const [ links, setLinks ] = useState( {} );

    useEffect( () => {
        setLoading( true )
        fetch( ALL_METERS_VALUES_API_URL )
            .then( response => response.json() )
            .catch( err => console.log( err ) )
            .then( result => {
                console.log( result );
                setMeters( result.data.data )
                setMeta( result.meta )
                setMonths( result.meta.months )
                setYears( result.meta.years )
                setCurrentPageNumber( result.meta.current_page )
                setTotalPages( result.meta.total )
                setPageSize( result.meta.per_page )
                setLinks( result.links )
                setTotalPages( result.meta.total )
                setLoading( false )
            } );
    }, [] )
    return (
        <ConfigProvider
            locale={ ruRu }
            theme={ {
                algorithm: theme.darkAlgorithm,
            } }
            // style={{ background: "gold",
            // borderColor: "gold",
            // color: "gold",
            // fontFamily: "Raleway" }}
        >
            <>
                <Input.Group compact>
                    <Select defaultValue="Год">
                        { years.map( year => (<Option key={ year.id } value={ year.number }></Option>) )
                        }
                    </Select>
                    <Select defaultValue="Месяц">
                        { months.map( month => (<Option key={ month.id } value={ month.name }></Option>) )
                        }
                        <Option value="Zhejiang">Zhejiang</Option>
                        <Option ion value="Jiangsu">Jiangsu</Option>
                    </Select>
                    <Select defaultValue="Тип">
                        { types.map( month => (<Option key={ type.id } value={ type.name }></Option>) )
                        }
                        <Option value="Zhejiang">Zhejiang</Option>
                        <Option ion value="Jiangsu">Jiangsu</Option>
                    </Select>
                    <Input
                        style={ {
                            width: '50%',
                        } }
                        defaultValue="Xihu District, Hangzhou"
                        value={ meters }
                    />
                    <Button onClick={ () => console.log( meters ) }>Console</Button>
                </Input.Group>
                <List
                    grid={{
                        gutter: 16,
                        column: 4,
                    }}
                    dataSource={meters}
                    renderItem={(item) => (
                        <List.Item>
                            <Card title={item.number}>
                                {/*<p>{item}</p>*/}
                            </Card>
                        </List.Item>
                    )}
                />
            </>
        </ConfigProvider>
    )
        ;
}
