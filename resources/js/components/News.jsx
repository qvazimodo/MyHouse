import React from 'react';
import {ConfigProvider, List, theme, Carousel, Spin } from 'antd';
import style from "./css/news.css";
import {NEWS_API_URL} from "../helpers/API";


class News extends React.Component {

    state = {
        title: [],
        content: [],
        images: [],
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
                                <List.Item style={{ fontFamily: 'Oswald' }}
                                    key={item.id}
                                    extra={
                                        <div className="images-wrp">
                                            <img alt="image" src={item.image} key={item.number} />
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
