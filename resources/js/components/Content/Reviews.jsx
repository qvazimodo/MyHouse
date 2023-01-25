import React from 'react';
import { Avatar } from 'antd';
import style from '../../../css/Content/reviews.css'
import Woman from '../img/woman.jpeg'
import Woman2 from '../img/woman2.jpg'
import Man from '../img/man.jpeg'

const Reviews = () => (

    <div className="reviews" style={{ style }}>
            <h2 className="title_name" style={{ style }}>Отзывы наших клиентов</h2>
            <div className="review-block" style={{ style }}>
                <Avatar.Group
                    size={64}
                 >
                    <Avatar className="img-review" style={{ style }} src={Woman} />
                </Avatar.Group>
                <div className="block-review-text">
                    <p className="review-author" style={{ style }}>Елена, жилец многоквартирного дома №7</p>
                    <p className="review-txt" style={{ style }}>
                        Лучшая управляющая компания, которая по-настоящему заботится о своих жильцах.
                        Сейчас в дни снегопада, дворники вручную лопатами расчищают снег на парковке.
                        Всегда порядок, охрана следит и пресекает нарушения. Чувствуешь себя в безопасности.
                        Сотрудники Очень быстро реагируют на любое обращение! Просто восторг и благодарность!
                    </p>
                </div>
            </div>

            <div className="review-block" style={{ style }}>
                <Avatar.Group
                    size={64}
                  >
                    <Avatar className="img-review2" src={Woman2} style={{ style }} />
                </Avatar.Group>
                <div className="block-review-text">
                    <p className="review-author" style={{ style }}>Ирина, жилец многоквартирного дома №7</p>
                    <p className="review-txt" style={{ style }}>
                        Заказывала сантехника, оформила заявку на сайте, потек кран, всё сделал пришёл,
                        аккуратный, вежливый, дополнительно оплату не взял, приятно отношение со стороны управляющей компании.
                    </p>
                </div>
            </div>

            <div className="review-block" style={{ style }}>
                <Avatar.Group
                    size={64}
                  >
                    <Avatar className="img-review3" src={Man} style={{ style }}/>
                </Avatar.Group>
                <div className="block-review-text">
                    <p className="review-author" style={{ style }}>Игорь, жилец многоквартирного дома №53</p>
                    <p className="review-txt" style={{ style }}>
                        Благодарю за качественную работу.
                        Очень доволен таким отношением к своим обязанностям работниками УК.
                    </p>
                </div>
            </div>

    </div>



);
export default Reviews;
