import React from 'react';
import {Avatar, ConfigProvider, List, theme} from 'antd';
import style from "../../css/houses_list.css";

const houses = [
    {
        address: "Адрес дома",
        description: "Описание дома",
        residents: "23 жителя",
    },
    {
        address: "Адрес дома",
        description: "Описание дома",
        residents: "23 жителя",
    },
    {
        address: "Адрес дома",
        description: "Описание дома",
        residents: "23 жителя",
    },
    {
        address: "Адрес дома",
        description: "Описание дома",
        residents: "23 жителя",
    },
];

class HousesList extends React.Component {



    render() {
        return (
            <>
                <h2 className="title_name" style={{style}}>Мы обслуживаем дома</h2>
                <ConfigProvider
                    theme={{ algorithm: theme.darkAlgorithm,
                    }}
                >
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 3,
                        }}
                        dataSource={houses}
                        renderItem={(item) => (
                            <List.Item
                                key={item.title}
                                extra={
                                    <img
                                        width={272}
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                }
                            >
                                <List.Item.Meta
                                    title={<a href="#">{item.address}</a>}
                                    description={item.residents}
                                />
                                {item.description}
                            </List.Item>
                        )}
                    />
                </ConfigProvider>
            </>
        )
    }
}

export default HousesList;
