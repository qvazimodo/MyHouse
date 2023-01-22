import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Button, Select, Space} from 'antd';
import {setSelectedStreetId, setSelectedHouseNumberId} from "../../../features/house/houseSlice";


export const Menu = () => {
    const [theme, setTheme] = useState('dark');
    const [current, setCurrent] = useState('1');
    const [addresses, setAddresses] = useState([]);
    const [selectedStreet, setSelectedStreet] = useState([]);
    const [housesNumbers, setHousesNumbers] = useState([])

    const addressesArray = useSelector(state => state.house.addressesArray)
    const dispatch = useDispatch()

    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    //Получение номеров домов по id улицы
    const streetHandleChange = (value) => {
        dispatch(setSelectedStreetId(value))
        let filteredStreetWithHousesNumbers = addressesArray.filter(address => {
            console.log(address)
            return address.id == value
        })
        console.log(filteredStreetWithHousesNumbers[0])
        setSelectedStreet(filteredStreetWithHousesNumbers[0])

        console.log(`selected ${value}`);
    };

    const housesNumberHandleChange = (value) => {
        dispatch(setSelectedHouseNumberId(value))
    }

    //Очистка select номера дома при повторном выборе улицы
    useEffect(() => {
            setHousesNumbers(
                selectedStreet.length === 0 ? [] :
                    selectedStreet['house_numbers'].map(housesNumber => {
                        return {
                            value: housesNumber.id,
                            label: housesNumber.value,
                            // pivot: address['house_numbers'].pivot,
                        }
                    }))
            console.log(selectedStreet['house_numbers'])
        }, [selectedStreet]
    )

    const getHousesNumbers = () => {
        return selectedStreet.length === 0 ? [] :
            selectedStreet['house_numbers'].map(housesNumber => {
                return {
                    value: housesNumber.id,
                    label: housesNumber.value,
                    // pivot: address['house_numbers'].pivot,
                }
            })
    }

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const fetchHouseDescription = () => {

    }

    return (
        <Space wrap>
            <Select
                defaultValue="Улица"
                style={{
                    width: 200,
                }}
                onChange={streetHandleChange}
                options={[...addressesArray.map(address => {
                    return {
                        value: address.id,
                        label: address.name,
                    }
                })

                ]}
            />
            <Select
                onChange={housesNumberHandleChange}
                defaultValue="Номер дома"
                style={{
                    width: 120,
                }}
                options={[...housesNumbers]}
            />
            <Button onClick={() => fetchHouseDescription()}>Загрузить информацию</Button>
            <Select
                defaultValue="Год"
                style={{
                    width: 120,
                }}
                loading={false}
                options={[
                    {
                        value: 'lucy',
                        label: 'Lucy',
                    },
                ]}
            />
            <Select
                defaultValue="Месяц"
                style={{
                    width: 120,
                }}
                allowClear
                options={[
                    {
                        value: 'lucy',
                        label: 'Lucy',
                    },
                ]}
            />
        </Space>
    );
};
