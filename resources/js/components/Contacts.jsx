import React from 'react';
import { Typography } from 'antd';
import style from "./css/contacts.css";


const { Text } = Typography;
const Contacts = () => {
    return (
    <div className="container" style={{ style }}>
         <h2 className="contact_title">Контакты</h2>
         <Text className="text" type="warning" >Наш адрес:</Text><br />
         <Text className="text" style={{ color: "white" }}>
             142000 город Домодедово Московской области, улица Корнеева, дом 42</Text><br /><br />

            <Text className="text" type="warning" >Руководство:</Text><br />
            <Text className="text" style={{ color: "white" }} >
                Генеральный директор — Овчинникова Татьяна Николаевна<br />
                Главный инженер — Власов Сергей Михайлович<br />
                Главный бухгалтер — Карева Людмила Геннадиевна<br />
                Телефон: +7 49679 34447.<br /></Text><br />

            <Text className="text" type="warning" >Режим работы офиса:</Text><br />
            <Text className="text" style={{ color: "white" }} >
                C понедельника по пятницу с 08.00 до 17.00. Обед с 12.00 до 13.00.
                Прием по личным вопросам в офисе компании происходит в понедельник
                с 14:00 до 17:00. Запись на приём осуществляется по телефону:
                +7 49679 34447.
                Вы можете послать нам свое сообщение e-mail, написав нам письмо
                по адресу: jilservis@domod.ru<br /></Text><br />

            <Text className="text" type="warning" >Наши реквизиты:</Text><br />
            <Text className="text" style={{ color: "white" }} >
                Открытое акционерное общество "Управляющая Компания «Жилсервис»",
                ИНН 5009069824, КПП 500901001, ОГРН 1095009000976, ОКПО 53905563,
                расчетный счёт 40702810634250000523 филиал «ЦЕНТРАЛЬНЫЙ» Банка ВТБ
                (ПАО) г. Москва БИК 044525411, корреспондентский счет
                30101810145250000411<br /></Text><br />

            <Text className="text" style={{ color: "white" }} >
                Центральная аварийно-диспетчерская служба компании (работает круглосуточно):
                тел.: +7 49679 24196; +7 49679 27789 (мкр. Авиационный)<br /></Text><br />

            <Text className="text" type="danger" >Вышестоящие и контролирующие организации:</Text><br />
            <Text className="text" type="warning" > Администрация городского округа Домодедово:</Text><br />
            <Text className="text" style={{ color: "white" }} >
                заместитель Главы администрации по вопросам жилищно-коммунального
                хозяйства – Миронов Фёдор Фёдорович (тел) +7 495 2760514<br />
                начальник управления ЖКХ администрации – Гамуза Сергей Григорьевич
                (тел) +7 49679 24254<br />
                ГУ МО «Государственная жилищная инспекция Московской области»:<br />
                руководитель Федина Ольга Николаевна (тел) +7 800 5505030,
                e-mail: vip@housevip.ru<br /></Text><br />




    </div>
    );
};

export default Contacts;
