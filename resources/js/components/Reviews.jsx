import React from 'react';
import { Avatar } from 'antd';

const Reviews = () => (

    <div className="reviews">
        <div className="container">

            <h2 className="title-2">Отзывы наших клиентов</h2>
            <div className="review-block">
                <Avatar.Group
                    size={64}
                    maxStyle={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                    }}
                >
                    <Avatar className="img-review" src="storage/images/woman.jpeg" />
                </Avatar.Group>
                <div className="block-review-text">
                    <p className="review-author">Елена, жилец многоквартирного дома №7</p>
                    <p className="review-txt">
                        Лучшая управляющая компания, которая по-настоящему заботится о своих жильцах. Сейчас в дни снегопада, дворники вручную лопатами расчищают снег на парковке. Всегда порядок, охрана следит и пресекает нарушения. Чувствуешь себя в безопасности. Сотрудники Очень быстро реагируют на любое обращение! Просто восторг и благодарность!
                    </p>
                </div>
            </div>

            <div className="review-block">
                <Avatar.Group
                    size={64}
                    maxStyle={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                    }}
                >
                    <Avatar className="img-review2" src="storage/images/woman2.jpg" />
                </Avatar.Group>
                <div className="block-review-text">
                    <p className="review-author">Ирина, жилец многоквартирного дома №7</p>
                    <p className="review-txt">
                        Заказывала сантехника, оформила заявку на сайте, потек кран, всё сделал пришёл, аккуратный, вежливый, дополнительно оплату не взял, приятно отношение со стороны управляющей компании.
                    </p>
                </div>
            </div>

            <div className="review-block">
                <Avatar.Group
                    size={64}
                    maxStyle={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                    }}
                >
                    <Avatar className="img-review3" src="storage/images/man.jpeg" />
                </Avatar.Group>
                <div className="block-review-text">
                    <p className="review-author">Игорь, жилец многоквартирного дома №53</p>
                    <p className="review-txt">
                        Благодарю за качественную работу. Очень доволен таким отношением к своим обязанностям работниками
                        УК.
                    </p>
                </div>
            </div>

        </div>

    </div>














);
export default Reviews;
