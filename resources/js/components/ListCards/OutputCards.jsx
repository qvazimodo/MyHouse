import React, {useEffect, useState} from 'react';
import {Avatar, List} from "antd";


const OutputCards = () => {

    const [items, setItems] = useState([]);

    let cardList = [];


    useEffect(() => {
        fetch('http://127.0.0.1/api/cards/')
            .then(response => {
                //получаем данные из json
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })

            .then(data => {
                //выбираем из json значения для карточек
                for (let i in data) {
                    for (let j in data[i].card) {
                        cardList.push(data[i].card[j])
                    }
                }
                cardList.sort(function(a, b){
                    return a.id - b.id;
                });
                setItems(cardList)
            });
    }, [])


    return (
        <List

            itemLayout="vertical"
            size="large"
            pagination={{
                pageSize: 3,
                style: {textAlign:'center'}
            }}
            dataSource={items}
            footer={
                <div>
                    <b>Тут можно что-то добавить</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consectetur distinctio dolores esse eum explicabo fugit impedit iusto, labore laudantium magnam nihil non numquam rerum sed tempora veniam voluptatum!
                </div>
            }

            renderItem={(item) => (
                <List.Item
                    key={item.id}

                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar/>}
                        title={<div>Заголовок: {item.title} + id {item.id}</div>}
                        description={<div>Описание: {item.description}</div>}
                    />
                    <div>Цена: {item.price}$</div>
                </List.Item>
            )}
        />
    );
}

export default OutputCards;
