import React from 'react';
import { useSelector } from "react-redux";
import { Column } from "@ant-design/plots";

export const MetersChart = () => {
    const currentMeterValues = useSelector( state => state.meter.currentMeterValues )

    console.log( currentMeterValues )

    let formattedData = []
    Object.keys( currentMeterValues ).map( year => {
        console.log( year )
        console.log( currentMeterValues[year] )

        currentMeterValues[year].forEach( monthReadings => {
            console.log( monthReadings )
            // let currentAddress = streets[house["street_id"]] + ', ' + housesNumbers[house["house_number_id"]]
            /*        let year = {
                        month: currentAddress,
                        type: "общая площадь, м2",
                        value: house["house_description"]["total_area"],
                    }*/

            let value = {
                month: monthReadings.name,
                year:monthReadings.number,
                type: monthReadings["type"],
                value: monthReadings["value"] - monthReadings["parent_value"],
            }



            /*            let apartmentsAmount = {
                            address: currentAddress,
                            type: "количество квартир",
                            value: house["house_description"]["apartments_amount"],
                        }*/
            formattedData = [ ...formattedData, value ]

        } )
    } )

    console.log( formattedData, )

        const config = {
            data: formattedData,
            xField: 'month', //from id
            yField: 'value',
            seriesField: 'year',
            isGroup: 'true',
            color: ['#EAB308','#EF4444', '#3B82F6' ],
            legend: {
                selected: {
                    // 默认置灰
                    茶叶: false,
                },
            },
        };

        return <Column { ...config } />;

}






