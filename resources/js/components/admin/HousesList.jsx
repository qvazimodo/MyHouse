import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clearDescription, fetchDescription, fetchHouses } from "../../features/house/houseSlice"
import { Button, Collapse, ConfigProvider, Layout, Spin, theme } from 'antd';
import ruRu from "antd/lib/locale/ru_RU";
import "./styles/HousesList.css";
import styles from "./styles/HousesList.module.scss"
import { Content } from "antd/es/layout/layout";
import { HouseDescription } from "./HouseDescription";

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export const HousesList = () => {
    const [ streetId, setStreetId ] = useState( null );
    const [ houses, setHouses ] = useState( [] );

    const addressesArray = useSelector( state => state.house.addressesArray )
    const description = useSelector( state => state.house.description )
    const isLoading = useSelector( state=> state.house.loading)
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

    const selectStreet = ( streetId ) => {
        dispatch( clearDescription() )
        setStreetId( streetId )
    }

    const showHouseDescription = ( houseNumberId ) => {
        dispatch( fetchDescription( { streetId, houseNumberId } ) )
    }
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
                                    onClick={ () => selectStreet( address.id ) }
                                >
                                    { address['house_numbers'].map( houseNumber => {
                                        return (
                                            <Button

                                                data-pivot={ houseNumber.id }
                                                onClick={ () => showHouseDescription( houseNumber.id ) }
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

                {  <Layout>

                    <Content>
                        {isLoading && <div className={styles.houseDescription__content}><Spin className={styles.contentSpinner}/></div>}
                        { description.id != null && <HouseDescription description={ description }/> }
                    </Content>
                </Layout> }
            </div>
        </ConfigProvider>
    )
}

