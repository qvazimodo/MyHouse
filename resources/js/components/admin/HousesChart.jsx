import React from 'react';
import { useSelector } from "react-redux";
import { Column } from '@ant-design/plots';

export const HousesChart = () => {
    const houses = useSelector( state => state.house.array )
    const addressesArray = useSelector( state => state.house.addressesArray )

    const streets = {}
    const housesNumbers = {}
    addressesArray.forEach( ( address ) => {
        streets[address.id] = address.name
        address['house_numbers'].forEach( ( houseNumber ) => {
            housesNumbers[houseNumber.id] = houseNumber.value
        })
    })

    console.log(streets, housesNumbers)

    let formattedData = []
    houses.forEach(house => {
        let currentAddress = streets[house["street_id"]] + ', ' + housesNumbers[house["house_number_id"]]
        let totalArea = {
            address: currentAddress,
            type: "общая площадь",
            value: house["house_description"]["total_area"],
        }
        let commissioningYear = {
            address: currentAddress,
            type: "год ввода в эксплуатацию",
            value: house["house_description"]["commissioning_year"],
        }
        let serviceStartDate = {
            address: currentAddress,
            type: "дата начала обслуживания",
            value: house["house_description"]["service_start_date"],
        }
        let yearOfNextOverhaul = {
            address: currentAddress,
            type: "год планового капитального ремонта",
            value: house["house_description"]["year_of_next_overhaul"],
        }
        let entrancesAmount = {
            address: currentAddress,
            type: "количество подъездов",
            value: house["house_description"]["entrances_amount"],
        }
        let floorsAmount = {
            address: currentAddress,
            type: "Количество этажей",
            value: house["house_description"]["floors_amount"],
        }
        let apartmentsAmount = {
            address: currentAddress,
            type: "количество квартир",
            value: house["house_description"]["apartments_amount"],
        }
        formattedData = [...formattedData, totalArea, commissioningYear, serviceStartDate, yearOfNextOverhaul, entrancesAmount, floorsAmount, apartmentsAmount]
    })

    console.log(formattedData,)

    const config = {
        data: formattedData,
        xField: 'address', //from id
        yField: 'value',
        seriesField: 'type',
        isGroup: 'true',
        legend: {
            selected: {
                // 默认置灰
                茶叶: false,
            },
        },
    };

    return <Column {...config} />;
};


