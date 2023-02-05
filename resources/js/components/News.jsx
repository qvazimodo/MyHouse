import {Avatar, ConfigProvider, List, Space, theme} from 'antd';
import React from 'react';
import style from "../../css/news.css";
const data = Array.from({
    length: 15,
}).map((_, i) => ({
    href: 'https://ant.design',
    title: `Название новости`,
    description:
        'Примерное содержимое новости',
    content:
        'Текст новости.',
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
                extra={
                    <img
                        width={250}
                        alt="logo"
                        src="/images/mh.png"
                    />
                }
            >
                <List.Item.Meta
                    title={item.title}
                    description={item.description}
                />
                {item.content}
            </List.Item>
        )}
    />
    </>
);
export default News;
