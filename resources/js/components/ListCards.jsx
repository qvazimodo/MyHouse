import React, {useEffect, useState} from 'react';
import ListCard from "./ListCard";
import Preloader from "./Preloader";
import {Card} from "antd";

const ListCards = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
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
                for (let i in data){
                    for (let j in data[i].card){
                        cardList.push(data[i].card[j])
                    }
                }
                setItems(cardList)
                //флаг для кружка загрузки
                setLoading(false)
            });
    }, [])

    return (
        <Card title="Список Товаров">
            {loading ? (
                <Preloader/>
            ) : items.length ? (
                items.map(item => (
                    //прокидываем значения в ListCard.jsx
                    <ListCard key={item.id} {...item} />
                ))
            ) : (
                <p>Не удалось загрузить список</p>
            )}
        </Card>
    );
}

export default ListCards;
