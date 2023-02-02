import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Column } from '@ant-design/plots';

export const Chart = () => {
    const houses = useSelector( state => state.house.array )

    useEffect( () => {
        asyncFetch();
    }, [] );

    const asyncFetch = () => {
        fetch( 'https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json' )
            .then( ( response ) => response.json() )
            .then( ( json ) => setData( json ) )
            .catch( ( error ) => {
                console.log( 'fetch data failed', error );
            } );
    };

    const config = {
        data: houses,
        xField: 'id',
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

    return <Column { ...config } />;
};
