import React from 'react';
import {ConfigProvider, List, theme, Carousel, Spin } from 'antd';
import style from "../../css/houses_list.css";
import {HOUSES_API_URL} from "../helpers/API";


class HousesList extends React.Component {

    state = {
        houses: [],
        images: ["https://fikiwiki.com/uploads/posts/2022-02/1644985951_20-fikiwiki-com-p-kartinki-mnogoetazhnikh-domov-21.jpg", "https://pro-dachnikov.com/uploads/posts/2021-07/1627434123_7-p-krasivie-mnogoetazhnie-doma-foto-7.jpg", "http://www.project.bulgaria-burgas.ru/multi-storey/multi-storey_59/multi-storey_59_3.jpg"],
        loading: true,
    }

    componentDidMount() {

        fetch(HOUSES_API_URL)
            .then(res => res.json())
            .then((data) => {
                this.setState({houses: data.data, loading: false});
            })

    }

    render() {
        return (
            <>
                <h2 className="title_name house-title" style={{style}}>Мы обслуживаем дома</h2>
                <ConfigProvider
                    theme={{ algorithm: theme.darkAlgorithm,
                    }}
                >
                    {this.state.loading ? (<Spin tip="Идет загрузка..." size="large">
                        <div className="content" />
                    </Spin>) : (
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                          pageSize: 5,
                        }}
                        dataSource={this.state.houses}
                        renderItem={(item) => (
                            <List.Item
                                key={item.id}
                                extra={
                                    <div className="images-wrp">
                                        <Carousel autoplay>
                                            {this.state.images.map((image, number) => (
                                                <div><img alt="image" src={image} key={number} className="slide-image" /></div>
                                            ))}
                                        </Carousel>
                                    </div>
                                }
                            >
                                <List.Item.Meta
                                    title={"Дом №" + item.value + " на улице " + item.name}
                                    description={"Личный электронный кабинет уже есть у жильцов " + item.apartments.length + " квартир"}
                                />
                                {"Данный дом постороен в " + item.house_description.commissioning_year + " году. " +
                                "Количество этажей - " + item.house_description.floors_amount + ", подъездов - " + item.house_description.entrances_amount + ". " +
                                "В доме находятся " + item.house_description.apartments_amount + " квартир. " +
                                "К нашей управляющей компании они присоединились " + item.house_description.service_start_date.slice(0, 4) + " году."}
                            </List.Item>
                        )}
                    />)}
                </ConfigProvider>
            </>
        )
    }
}

export default HousesList;
