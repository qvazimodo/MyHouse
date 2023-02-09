import React from 'react';
import Sticker from '../../img/sticker.png';
import Phone from '../../img/phone.png';
import style from "../../../../css/Identically/header.css";

export const Header = () => (
    <div className="img-header">
        <h1 className="logo-header" style={{style}}>My House - управляющая компания</h1>
        <h2 className="quote-header" style={{style}}>Ваше доверие наш профессионализм</h2><br/>
        <div className="contacts-header">
            <div className="sticker">
                <img src={Sticker} alt="photo"/>
                <div className="name_street">Наб. реки Фонтанки 10-15</div>
            </div>
            <div className="phone">
                <img src={Phone} alt="photo"/>
                <div className="num"> 8 (812) 123-45-67</div>
            </div>
        </div>
    </div>
);
