import React from 'react';
import Sticker from'./img/sticker.png';
import Phone from'./img/phone.png';
import style from "./css/header.css";

const Header = () => (
        <div className="header">
            <div className="container">
                <div className="bottom">
                    <div className="bottom-top" style={{ style }}>Ваше доверие -<br />наш профессионализм</div>
                    <div className="bottom-contacts">
                        <div className="sticker">
                            <img src={Sticker} />
                                <div className="name_street">Наб. реки Фонтанки 10-15</div>
                        </div>
                        <div className="phone">
                            <img src={Phone} />
                                <div className="num"> 8 (812) 123-45-67</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
export default Header;