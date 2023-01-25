import { Badge, Descriptions } from "antd";

export const HouseDescription = ( { description } ) => {
    return (
            <Descriptions title="Технические характеристики дома" layout="vertical" bordered>
            <Descriptions.Item label="Общая площадь, м2" span={3 }>{ description['total_area'] }</Descriptions.Item>
            <Descriptions.Item label="Количество этажей">{ description['floors_amount'] }</Descriptions.Item>
            <Descriptions.Item label="Количество подъездов">{ description['entrances_amount'] }</Descriptions.Item>
            <Descriptions.Item label="Количество квартир" span={ 1 }>
                <Descriptions.Item label="Год ввода в эксплуатацию" span={ 2 }>{ description['commissioning_year'] }</Descriptions.Item>
                { description['apartments_amount'] }
            </Descriptions.Item>
            <Descriptions.Item label="Дата ввода в эксплуатацию">{ description['commissioning_year'] }</Descriptions.Item>
            <Descriptions.Item label="Дата начала обслуживания">{ description['service_start_date'] }</Descriptions.Item>
            <Descriptions.Item label="Год следующего капитального ремонта">{ description['year_of_next_overhaul'] }</Descriptions.Item>
        </Descriptions>
    )
}
