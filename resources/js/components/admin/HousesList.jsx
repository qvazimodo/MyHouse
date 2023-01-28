import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchDescription, fetchHouses } from "../../features/house/houseSlice"
import { Collapse, ConfigProvider, Layout, Spin, theme } from 'antd';
import ruRu from "antd/lib/locale/ru_RU";
import "./styles/HousesList.css";
import styles from "./styles/HousesList.module.scss"
import { Content } from "antd/es/layout/layout";
import { HouseDescription } from "./HouseDescription";
import Texty from 'rc-texty';

const { Panel } = Collapse;

export const HousesList = () => {
    const [ address, setAddress ] = useState( {
        streetId: null,
        streetName: '',
        houseNumberId: null,
        houseNumberValue: ''
    } );

    const addressesArray = useSelector( state => state.house.addressesArray )
    const description = useSelector( state => state.house.description )
    const isLoading = useSelector( state => state.house.loading )
    const selectedAddress = useSelector( state => state.house.selectedAddress )
    const dispatch = useDispatch()

    useEffect( () => {
            dispatch( fetchHouses() )
        }, []
    )

    useEffect(() => {
        console.log(selectedAddress)
        dispatch(fetchDescription(selectedAddress))
    }, [selectedAddress])

    const onChange = ( key ) => {
        console.log( addressesArray )
        console.log( key );
    };

    return (
        <ConfigProvider
            locale={ ruRu }
            theme={ {
                algorithm: theme.defaultAlgorithm,
            } }
        >
            <div className={ styles.houses__box }>

                { <Layout className={ styles.contentLayout }>

                    <Content className={styles.content} onClick={ () => console.log( selectedAddress ) }>
                        { selectedAddress.streetName === '' &&
                            <div className={ styles.content__message }>
                                <Texty>
                                    Выберите улицу и номер дома!
                                </Texty>
                            </div> }
                        { selectedAddress.houseNumber === '' &&
                            <div className={ styles.content__message }>
                                <Texty>
                                    Выберите номер дома!
                                </Texty>
                            </div> }
                        { isLoading && <div className={ styles.houseDescription__content }><Spin
                            className={ styles.contentSpinner }/></div> }
                        { !isLoading && description.id != null && <HouseDescription description={ description }/> }
                    </Content>
                </Layout> }
            </div>
        </ConfigProvider>
    )
}

