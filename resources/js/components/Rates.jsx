import React from 'react';
import {Card, List, Space, Table, Tag} from 'antd';
import { Typography } from 'antd';
import style from "../../css/rates.css";

const { Text } = Typography;
const columns = [
    {
        title: 'Наименование услуги',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Тариф1',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Тариф2',
        dataIndex: 'address',
        key: 'address',
    },

   ];
const data = [
    {
        key: '1',
        name: 'Тепловая энергия (отопление)',
        age: "2 546,83 руб/Гк",
        address: '2 912,53 руб/Гк',
    },
    {
        key: '2',
        name: 'Холодное водоснабжение (ХВС)',
        age: "43,57 руб/куб.м",
        address: '50,93 руб/куб.м',
    },
    {
        key: '3',
        name: 'Водоотведение (ХВС + ГВС)',
        age: "32,02 руб/куб.м",
        address: '39,97 руб/куб.м',
    },
    {
        key: '4',
        name: 'Горячее водоснабжение (ГВС)',
        age: "211,67 руб/куб.м",
        address: '243,16 руб/куб.м',
    },
    {
        key: '5',
        name: 'Тепловая энергия (отопление, ООО "Ремэнерго")',
        age: "2 601,56 руб/Гкал",
        address: '2 945,03 руб/Гкал',
    },
    {
        key: '6',
        name: 'Горячее водоснабжение (ГВС, ООО "Ремэнерго")',
        age: "207,17 руб/Гкал ",
        address: '236,18 руб/Гкал ',
    },
];
const Rates = () => (
        <>

        <h2 className="rates_title" style={{ style }}>Тарифы и услуги</h2>
        <Text
            style={{
                color: "yellow",
                fontSize: "16px",
            }}>
            Тарифы на коммунальные и иные услуги на 2022-2023гг.</Text><br /><br />
        <Text className="rates_text" style={{ style }}>
            ООО УК «Свиблов ГРАД» является организацией, управляющей
            многоквартирными домами, расположенных в районе Свиблово
            и Южное Медведково и предоставляет жилищно-коммунальные
            услуги гражданам по ценам и тарифам, утвержденным нормативно-правовыми
            актами города Москвы. С 01 декабря 2022 года в расчетах с населением
            мы руководствуемся приказами департамента экономической политике и
            развития г. Москвы:</Text><br /><br />

        <Text className="rates_text" style={{ style }}>
            Приказ от 15.12.2021г. №312-ТР «О корректировке на 2022-2023
            годы установленных долгосрочных тарифов на питьевую воду
            (питьевое водоснабжение), техническую воду и водоотведение
            для акционерного общества «Мосводоканал».
       </Text><br /><br />

        <Text className="rates_text" style={{ style }}>
            Приказ от 15.12.2021г. №313-ТР «О корректировке на 2022-2023
            годы установленных долгосрочных тарифов на тепловую энергию
            (мощность) и на услуги по передаче тепловой энергии для публичного
            акционерного общества "Московская объединенная энергетическая компания».
        </Text><br /><br />

        <Text className="rates_text" style={{ style }}>
            Приказ от 15.12.2021г. №315-ТР «О корректировке на 2022-2023 годы
            установленных долгосрочных тарифов на горячую воду (горячее водоснабжение),
            поставляемую публичным акционерным обществом "Московская объединенная
            энергетическая компания" потребителям с использованием закрытой системы
            горячего водоснабжения.
        </Text><br /><br />

        <Text className="rates_text" style={{ style }}>
            Приказ от 15.12.2020г. №382-ТР «О корректировке на 2022-2025 годы
            установленных долгосрочных тарифов на тепловую энергию (мощность),
            поставляемую потребителям обществом с ограниченной ответственностью
            "Рэмэнерго", на 2022-2025 годы.
        </Text><br /><br />

        <Text className="rates_text" style={{ style }}>
            Приказ от 15.12.2020г. №383-ТР «Об установлении тарифов на горячую воду
            (горячее водоснабжение), поставляемую обществом с ограниченной
            ответственностью "Ремэнерго" потребителям с использованием закрытой
            системы горячего водоснабжения, на 2022 год.
        </Text><br /><br />

        <Text className="rates_text" style={{ style }}>
            – Приказ Департамента экономической политики и развития города Москвы
            от 29.06.2021 № 55-ТР «Об установлении розничных цен на природный газ,
            реализуемый населению города Москвы»
        </Text><br /><br />

        <Text className="rates_text" style={{ style }}>
            – Постановление правительства г. Москвы № 1899-ПП от 07.12.2021
            «О внесении изменений в постановление Правительства Москвы от 13
            декабря 2016 г. № 848-ПП и признании утратившим силу отдельного положения
            постановления Правительства Москвы от 29 сентября 2009 г. № 1030-ПП»
        </Text><br /><br />

        <Text className="rates_text" style={{ style }}>
            – Приказ Департамента экономической политики и развития города Москвы
            от 09.11.2021 № 170-ТР «Об установлении единого тарифа на услугу
            регионального оператора по обращению с твердыми коммунальными отходами,
            осуществляемую Государственным унитарным предприятием города Москвы
            "Экотехпром", на 2022 год»
        </Text><br /><br />

        <Text className="rates_text" style={{ style }}>
            Информируем вас о тарифах и ставках на жилищно-коммунальные услуги
            предоставляемые ООО УК «Свиблов ГРАД» с 01 декабря 2022 г. по 31 декабря 2023 г.
        </Text><br /><br />


        <Text
            style={{
                color: "yellow",
                fontSize: "16px",
            }} level={1}>Коммунальные услуги:</Text>

        <Table classname="rates_table" columns={columns} dataSource={data} />;
    </>

);
export default Rates;
