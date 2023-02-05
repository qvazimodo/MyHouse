import {Avatar, ConfigProvider, List, Space, theme} from 'antd';
import React from 'react';
import style from "../../css/news.css";

const data = Array.from({
    length: 23,
}).map((_, i) => ({
    title: `ant design part ${i}`,
    content:
        'We supply a series of design principles, practical patterns and high quality design resources prototypes beautifully and efficiently.',
}));

const News = () => (
<>
    <h2 className="title_name">Новости</h2>
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
</>
);
export default News;
