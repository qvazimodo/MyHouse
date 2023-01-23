import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Cascader } from 'antd';
import { fetchDescription, setSelectedHouseNumberId, setSelectedStreetId } from "../../../features/house/houseSlice";

export const Menu = () => {
    const [ theme, setTheme ] = useState( 'dark' );
    const [ current, setCurrent ] = useState( '1' );
    // const [addresses, setAddresses] = useState([]);
    const [ selectedStreet, setSelectedStreet ] = useState( [] );
    const [ housesNumbers, setHousesNumbers ] = useState( [] )

    const addressesArray = useSelector( state => state.house.addressesArray )
    const dispatch = useDispatch()

    const changeTheme = ( value ) => {
        setTheme( value ? 'dark' : 'light' );
    };

    //Получение номеров домов по id улицы
    const streetHandleChange = ( value ) => {
        dispatch( setSelectedStreetId( value ) )
        let filteredStreetWithHousesNumbers = addressesArray.filter( address => {
            console.log( address )
            return address.id == value
        } )
        console.log( filteredStreetWithHousesNumbers[0] )
        setSelectedStreet( filteredStreetWithHousesNumbers[0] )

        console.log( `selected ${ value }` );
    };

    const housesNumberHandleChange = ( value ) => {
        dispatch( setSelectedHouseNumberId( value ) )
    }

    //Очистка select номера дома при повторном выборе улицы
    useEffect( () => {
            setHousesNumbers(
                selectedStreet.length === 0 ? [] :
                    selectedStreet['house_numbers'].map( housesNumber => {
                        return {
                            value: housesNumber.id,
                            label: housesNumber.value,
                            // pivot: address['house_numbers'].pivot,
                        }
                    } ) )
            console.log( selectedStreet['house_numbers'] )
        }, [ selectedStreet ]
    )

    const getHousesNumbers = () => {
        return selectedStreet.length === 0 ? [] :
            selectedStreet['house_numbers'].map( housesNumber => {
                return {
                    value: housesNumber.id,
                    label: housesNumber.value,
                    // pivot: address['house_numbers'].pivot,
                }
            } )
    }

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    //TODO получить описания домов
    const fetchHouseDescription = () => {

    }

    const addresses = addressesArray.map((address) => {
        return {
            value: address.id,
            label: address.name,
            children: [
                ...address['house_numbers'].map(houseNumber => {
                    return {
                        value: houseNumber.id,
                        label: houseNumber.value
                    }
                })
            ]
        }
    })

    const onChange = (value, selectedOptions) => {
        let address = {
            streetId: value[0],
            houseId: value[1]
        }
        dispatch( fetchDescription( address ) )
        console.log( value, selectedOptions );
    };
    const filter = (inputValue, path) =>
        path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

    return (
       <>
           <Cascader
               // style={ { width: 200 , display:'flex', flexDirection:'column'} }
               // dropdownMenuColumnStyle={ {  }}
               // placement="bottomRight"
               // className={ styles.menu__select_address }
               dropdownRender={ menu => (
                   <div>
                       { menu }
                   </div>) }
               options={ addresses }
               onChange={ onChange }
               placeholder="Введите адрес"
               showSearch={ {
                   filter,
               } }
               onSearch={ ( value ) => console.log( value ) }
           />
           { <Button
               disabled
               onClick={ () => console.log( addresses ) }>Загрузить
           </Button> }
       </>
    );
};
