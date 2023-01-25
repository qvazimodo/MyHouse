import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Collapse } from 'antd';
import { fetchHouses } from "../../../features/house/houseSlice";
import { HouseDescription } from "./HouseDescription";


const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export const HousesList = () => {
        const [ addresses, setAddresses ] = useState( [] );
        const [ houses, setHouses ] = useState( [] );

        const addressesArray = useSelector( state => state.house.addressesArray )
        const description = useSelector( state => state.house.description )
        const dispatch = useDispatch()

        useEffect(() => {
                dispatch(fetchHouses())
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

        const onChange = (key) => {
            console.log(addressesArray)
            console.log(key);
        };
        return (
            <>
                 <HouseDescription description={ description }/>
                {/*<Button type="primary" onClick={ () => console.log( addressesArray ) }>Click</Button>*/ }
                {/*{ addressesArray.map( (address => <p>{ address.name }</p>) ) }*/ }
                {/*                <Collapse defaultActiveKey={ [ '1' ] } onChange={ onChange }>
                    { addressesArray.map( address =>
                        <Panel header={ address.name } key={ address.id }>
                            <p>{ address.name }</p>
                        </Panel>
                    ) }
                </Collapse>*/ }
            </>

        );
    }
;
