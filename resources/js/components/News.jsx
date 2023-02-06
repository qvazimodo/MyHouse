import React from 'react';
import {ConfigProvider, List, theme, Carousel, Spin } from 'antd';
import style from "./css/news.css";
import {NEWS_API_URL} from "../helpers/API";


class News extends React.Component {

    state = {
        title: [],
        content: [],

        images: ["https://fikiwiki.com/uploads/posts/2022-02/1645060421_1-fikiwiki-com-p-kartinki-windows-2.jpg",
                 "https://fikiwiki.com/uploads/posts/2022-02/1645060477_4-fikiwiki-com-p-kartinki-windows-5.jpg",
                  "https://fikiwiki.com/uploads/posts/2022-02/1645060422_11-fikiwiki-com-p-kartinki-windows-15.jpg"],

        loading: true,
    }

    componentDidMount() {

        fetch(NEWS_API_URL)
            .then(res => res.json())
            .then((data) => {
                this.setState({title: data.data, loading: false});
            })

    }

    render() {
        return (
            <>
                <h2 className="title_name">Новости</h2>
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
                            dataSource={this.state.title}
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
                                        title={item.title}
                                    />
                                    {item.content}<br/><br/>

                                </List.Item>
                            )}
                        />)}
                </ConfigProvider>
            </>
        )
    }
}

export default News;
