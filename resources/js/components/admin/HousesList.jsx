import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clearDescription, fetchDescription, fetchHouses, setSelectedAddress } from "../../features/house/houseSlice"
import { Button, Collapse, ConfigProvider, Layout, Spin, theme } from 'antd';
import ruRu from "antd/lib/locale/ru_RU";
import "./styles/HousesList.css";
import styles from "./styles/HousesList.module.scss"
import { Content } from "antd/es/layout/layout";
import { HouseDescription } from "./HouseDescription";
import { isNull } from "lodash";

const { Panel } = Collapse;

export const HousesList = () => {
    const [ address, setAddress ] = useState( {
        streetId: null,
        streetName: '',
        houseNumberId: null,
        houseNumberValue: ''
    } );
    const [ houses, setHouses ] = useState( [] );

    const addressesArray = useSelector( state => state.house.addressesArray )
    const description = useSelector( state => state.house.description )
    const isLoading = useSelector( state => state.house.loading )
    const dispatch = useDispatch()

    useEffect( () => {
            dispatch( fetchHouses() )
            // getDataFromAPI(ADMIN_HOUSES_API_URL).then(result => setAddresses(result.data))
        }, []
    )

    /*        const getDataFromAPI = async (url) => {
                try {
                    let response = await fetch(url)
                    return await response.json()
                } catch (error) {
                    console.log(error)
                }
            }*/

    const onChange = ( key ) => {
        console.log( addressesArray )
        console.log( key );
    };

    const setAddressStreet = ( street ) => {
        dispatch( clearDescription() )
        dispatch( setSelectedAddress( { streetName: street.name,houseNumber:''} ) )
        setAddress(
            {
                ...address,
                streetId: street.id,
                streetName: street.name,
                houseNumberId: null,
                houseNumberValue: ''
            } )
    }

    const setAddressHouseNumber = ( houseNumber ) => {
        console.log( address )
        console.log( houseNumber )
        let newAddress = Object.assign( address,
            {
                houseNumberId: houseNumber.id,
                houseNumberValue: houseNumber.value
            } )
        setAddress( newAddress )
    }
    useEffect( () => {
        return () => {
            if ( !isNull( address.houseNumberId ) ) {
                console.log( address )

                dispatch( fetchDescription( { streetId: address.streetId, houseNumberId: address.houseNumberId } ) )
                dispatch( setSelectedAddress( {
                    streetName: address.streetName,
                    houseNumber: address.houseNumberValue
                } ) )
            }
        };
    }, [ address ] );

    return (
        <ConfigProvider
            locale={ ruRu }
            theme={ {
                algorithm: theme.defaultAlgorithm,
            } }
        >
            <div className={ styles.houses__box }>
                { <Collapse accordion onChange={ onChange }>
                    { addressesArray.map( address => {
                            return (
                                <Panel
                                    className={ styles.houseNumber__buttons }
                                    header={ address.name }
                                    key={ address.id }
                                    onClick={ () => setAddressStreet( { id: address.id, name: address.name } ) }
                                >
                                    { address['house_numbers'].map( houseNumber => {
                                        return (
                                            <Button
                                                onClick={ () => setAddressHouseNumber( {
                                                    id: houseNumber.id,
                                                    value: houseNumber.value
                                                } ) }
                                                className={ styles.houseNumber__button }
                                                key={ houseNumber.id }>
                                                { houseNumber.value }
                                            </Button>
                                        )
                                    } ) }
                                </Panel>
                            )
                        }
                    ) }
                </Collapse> }

                { <Layout className={ styles.contentLayout }>

                    <Content onClick={ () => console.log( address ) }>
                        { isLoading && <div className={ styles.houseDescription__content }><Spin
                            className={ styles.contentSpinner }/></div> }
                        { description.id != null && <HouseDescription description={ description }/> }
                    </Content>
                </Layout> }
            </div>
        </ConfigProvider>
    )
}

