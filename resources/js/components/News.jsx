import { Avatar, List, Space } from 'antd';
import React from 'react';
import style from "../../css/news.css";
const data = Array.from({
    length: 23,
}).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
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
                extra={
                    <img
                        width={272}
                        alt="logo"
                        src="/images/mh.png"
                    />
                }
            >
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                />
                {item.content}
            </List.Item>
        )}
    />
    </>
);
export default News;
