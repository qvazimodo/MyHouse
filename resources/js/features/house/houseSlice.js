import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ADMIN_ADDRESSES_API_URL, ADMIN_HOUSE_DESCRIPTION_API_URL, ADMIN_HOUSES_API_URL } from '../../helpers/API'

const initialState = {
    loading: false,
    addressesArray: [
        {
            "id": null,
            "name": "",
            "house_numbers": [
                {
                    "id": null,
                    "value": "null",
                    "pivot": {
                        "street_id": null,
                        "house_number_id": null
                    }
                },
            ]
        }
    ],
    array: [
        {
            "id": null,
            "house_number_street_id": null,
            "house_descriptions_id": null,
            "street_id": null,
            "house_number_id": null,
            "house_description": {
                "id": null,
                "total_area": null,
                "commissioning_year": null,
                "service_start_date": "",
                "year_of_next_overhaul": null,
                "entrances_amount": null,
                "floors_amount": null,
                "apartments_amount": null,
                "created_at": "",
                "updated_at": ""
            }
        }
    ],
    meters: {
        client_id: {
            id: null,
            client_id: null,
            type: "",
            number: null,
            created_at: "",
            updated_at: "",
            house_id: null
        }
    },
    error: '',
    // selectedStreetId: null,
    // selectedHouseNumberId: null,
    description: {
        id: null,
        total_area: null,
        commissioning_year: null,
        service_start_date: "",
        year_of_next_overhaul: null,
        entrances_amount: null,
        floors_amount: null,
        apartments_amount: null,
        created_at: "",
        updated_at: ""
    },
    selectedAddress: {
        streetName: '',
        houseNumber: null,
        streetId: null,
        houseNumberId: null
    },
    clients: [],
}

export const fetchAddresses = createAsyncThunk( 'house/fetchAddresses', () => {
    return fetch( ADMIN_ADDRESSES_API_URL ).then( response => response.json() ).then( result => result.data )
} )

//техническая информация обо всех домах
export const fetchHouses = createAsyncThunk( 'house/fetchHouses', () => {
    return fetch( ADMIN_HOUSES_API_URL ).then( response => response.json() ).then( result => result.data )
} )

export const fetchDescription = createAsyncThunk( 'house/fetchDescription', ( address ) => {
    let url = ADMIN_HOUSE_DESCRIPTION_API_URL + "/" + `${ address.streetId }` + "/" + `${ address.houseNumberId }`
    console.log( url )
    return fetch( url ).then( response => response.json() ).then( result => result.data[0]['house_description'] )
} )

const houseSlice = createSlice( {
    name: 'house',
    initialState,
    reducers: {
        setHouses: ( state, action ) => {
            state.array = action.payload
        },
        //добавление дома в список (для примера) - мутирует состояние
        addHouse: ( state, action ) => {
            state.array.push( action.payload )
        },
        setSelectedStreetId: ( state, action ) => {
            state.selectedStreetId = action.payload
        },
        setSelectedHouseNumberId: ( state, action ) => {
            state.selectedHouseNumberId = action.payload
        },
        clearSelectedAddress: ( state, action ) => {
            state.selectedAddress = { streetName: '', houseNumber: null, streetId: null, houseNumberId: null }
        },
        clearDescription: ( state ) => {
            state.description = {}
        },
        setSelectedAddress: ( state, action ) => {
            state.selectedAddress = {
                streetName: action.payload.streetName,
                houseNumber: action.payload.houseNumber,
                streetId: action.payload.streetId,
                houseNumberId: action.payload.houseNumberId
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase( fetchAddresses.pending, ( state ) => {
            state.loading = true
        } )
        builder.addCase( fetchAddresses.fulfilled, ( state, action ) => {
            state.addressesArray = action.payload
            state.loading = false
        } )
        builder.addCase( fetchAddresses.rejected, ( state, action ) => {
            state.error = action.payload
            state.loading = false
        } )

        builder.addCase( fetchHouses.pending, ( state ) => {
            state.loading = true
        } )
        builder.addCase( fetchHouses.fulfilled, ( state, action ) => {
            state.array = action.payload
            state.loading = false
        } )
        builder.addCase( fetchHouses.rejected, ( state, action ) => {
            state.error = action.payload
            state.loading = false
        } )

        builder.addCase( fetchDescription.pending, ( state ) => {
            state.loading = true
        } )
        builder.addCase( fetchDescription.fulfilled, ( state, action ) => {
            state.description = action.payload
            state.loading = false
        } )
        builder.addCase( fetchDescription.rejected, ( state, action ) => {
            state.error = action.payload
            state.loading = false
        } )
    },
})


export default houseSlice.reducer
export const {setHouses, setSelectedStreetId, setSelectedHouseNumberId, clearDescription, setSelectedAddress, clearSelectedAddress} = houseSlice.actions
