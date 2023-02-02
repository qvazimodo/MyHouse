import React from 'react';
import {ConfigProvider, List, theme, Carousel } from 'antd';
import style from "../../css/houses_list.css";


class HousesList extends React.Component {

    state = {
        houses: [
            {
                address: "Адрес дома",
                description: "Описание дома Описание дома Описание дома Описание дома Описание дома Описание дома Описание дома Описание дома Описание дома Описание дома Описание дома",
                residents: "23 жителя",
                images: ["https://fikiwiki.com/uploads/posts/2022-02/1644985951_20-fikiwiki-com-p-kartinki-mnogoetazhnikh-domov-21.jpg", "https://pro-dachnikov.com/uploads/posts/2021-07/1627434123_7-p-krasivie-mnogoetazhnie-doma-foto-7.jpg", "http://www.project.bulgaria-burgas.ru/multi-storey/multi-storey_59/multi-storey_59_3.jpg"],
            },
            {
                address: "Адрес дома",
                description: "Описание дома",
                residents: "36 жителя",
                images: ["https://pro-dachnikov.com/uploads/posts/2021-07/1627434123_7-p-krasivie-mnogoetazhnie-doma-foto-7.jpg", "https://pro-dachnikov.com/uploads/posts/2021-10/1633740841_39-p-mnogoetazhnie-doma-foto-41.jpg", "https://www.proaist.ru/upload/iblock/ea5/ea5feee1102ddd51e678a3a6deaed911.jpg"],
            },
            {
                address: "Адрес дома",
                description: "Описание дома",
                residents: "45 жителей",
                images: ["https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg", "https://www.proaist.ru/upload/iblock/ea5/ea5feee1102ddd51e678a3a6deaed911.jpg", "https://admkurganinsk.ru/uaig/info/files/MZHD.png"],
            },
            {
                address: "Адрес дома",
                description: "Описание дома",
                residents: "21 житель",
                images: ["https://kartinkin.net/uploads/posts/2022-03/1647538551_39-kartinkin-net-p-mnogoetazhnie-doma-kartinki-41.jpg", "https://www.proaist.ru/upload/iblock/ea5/ea5feee1102ddd51e678a3a6deaed911.jpg", "https://admkurganinsk.ru/uaig/info/files/MZHD.png"],
            },
        ],
    }

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
                            pageSize: 3,
                        }}
                        dataSource={this.state.houses}
                        renderItem={(item) => (
                            <List.Item
                                key={item.title}
                                extra={
                                    <div className="images-wrp">
                                        <Carousel>
                                            {item.images.map((image, number) => (
                                                <div><img alt="image" src={image} key={number} className="slide-image" /></div>
                                            ))}
                                        </Carousel>
                                    </div>
                                }
                            >
                                <List.Item.Meta
                                    title={item.address}
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
