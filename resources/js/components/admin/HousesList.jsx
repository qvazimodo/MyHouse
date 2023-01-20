import React, { useEffect, useState } from 'react';
import { Button, Collapse, ConfigProvider, theme } from 'antd';
import { ADMIN_HOUSES_API_URL } from "../../helpers/API";
import ruRu from "antd/lib/locale/ru_RU";

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export const HousesList = () => {
        const [ addresses, setAddresses ] = useState( [] );
        const [ houses, setHouses ] = useState( [] );
        useEffect( () => {
                getDataFromAPI( ADMIN_HOUSES_API_URL ).then( result => setAddresses( result.data ) )
            }, []
        )

        const getDataFromAPI = async ( url ) => {
            try {
                let response = await fetch( url )
                return await response.json()
            } catch ( error ) {
                console.log( error )
            }
        }

        const onChange = ( key ) => {
            console.log( key );
        };
        return (
            <ConfigProvider
                locale={ ruRu }
                theme={ {
                    algorithm: theme.darkAlgorithm,
                } }>

                <Button type="primary" onClick={ () => console.log( addresses ) }>Click</Button>
                { addresses.map( (address => <p>{ address.name }</p>) ) }
                <Collapse defaultActiveKey={ [ '1' ] } onChange={ onChange }>
                    { addresses.map( address =>
                        <Panel header={ address.name } key={ address.id }>
                            <p>{ text }</p>
                        </Panel>
                    ) }

                </Collapse>
            </ConfigProvider>
        );
    }
;
