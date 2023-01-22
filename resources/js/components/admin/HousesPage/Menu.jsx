import {useEffect, useState} from "react";
import {Select, Space} from 'antd';
import {ADMIN_HOUSES_API_URL} from "../../../helpers/API";


export const Menu = () => {
    const [theme, setTheme] = useState('dark');
    const [current, setCurrent] = useState('1');
    const [addresses, setAddresses] = useState([]);
    const [selectedStreet, setSelectedStreet] = useState([]);
    const [housesNumbers, setHousesNumbers] = useState([])

    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    //Получение номеров домов по id улицы
    const streetHandleChange = (value) => {
        let filteredStreetWithHousesNumbers = addresses.filter(address => {
            console.log(address)
            return address.id == value
        })
        console.log(filteredStreetWithHousesNumbers[0])
        setSelectedStreet(filteredStreetWithHousesNumbers[0])

        console.log(`selected ${value}`);
    };

    //Очистка select номера дома при повторном выборе улицы
    useEffect(() => {
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
    useEffect(() => {
            getDataFromAPI(ADMIN_HOUSES_API_URL).then(result => setAddresses(result.data))
        }, []
    )

    const getDataFromAPI = async (url) => {
        try {
            let response = await fetch(url)
            return await response.json()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Space wrap>
            <Select
                defaultValue="Улица"
                style={{
                    width: 200,
                }}
                onChange={streetHandleChange}
                options={[...
                    addresses.map(address => {
                        return {
                            value: address.id,
                            label: address.name,
                        }
                    })

                ]}
            />
            <Select
                defaultValue="Номер дома"
                style={{
                    width: 120,
                }}

                options={[...getHousesNumbers()]}
            />
            <Select
                defaultValue="Год"
                style={{
                    width: 120,
                }}
                loading
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
