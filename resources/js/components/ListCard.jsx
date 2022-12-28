import {Card} from "antd";

const ShopCard = (props) => {
    //Получаем значения из пропсов
    const {
        id,
        title,
        price,
        description
    } = props;


    return (

            <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                Загловок: {title}<br></br>Текст: {description}<br></br> Цена: {price}
            </Card>

    );
}

export default ShopCard;
