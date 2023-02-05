import {Avatar, ConfigProvider, List, Space, theme} from 'antd';
import React from 'react';
import style from "./css/news.css";

const data = Array.from({
    length: 15,
}).map((_, i) => ({
    title: `Ant design part ${i}`,
    content:
        'We supply a series of design principles, practical patterns and high quality design resources prototypes beautifully and efficiently.' +
        'We supply a series of design principles, practical patterns and high quality design resources prototypes beautifully and efficiently.' +
        'We supply a series of design principles, practical patterns and high quality design resources prototypes beautifully and efficiently.',
}));

const News = () => (
<>
    <h2 className="title_name">Новости</h2>
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
            pageSize: 5,
        }}
        dataSource={data}
        renderItem={(item) => (
            <List.Item
                key={item.title}
            >

                <List.Item.Meta
                    title={item.title}
                />
                {item.content}
            </List.Item>
        )}
    />
</ConfigProvider>
</>
);
export default News;
