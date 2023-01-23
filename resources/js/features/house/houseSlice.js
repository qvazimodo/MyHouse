import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ADMIN_HOUSE_DESCRIPTION_API_URL, ADMIN_HOUSES_API_URL } from '../../helpers/API'

const initialState = {
    loading: false,
    addressesArray: [],
    error: '',
    // selectedStreetId: null,
    // selectedHouseNumberId: null,
    description: {}
}

export const fetchHouses = createAsyncThunk('house/fetchHouses', () => {
    return fetch(ADMIN_HOUSES_API_URL).then(response => response.json()).then(result => result.data)
})

export const fetchDescription = createAsyncThunk( 'house/fetchDescription', ( address ) => {
    let url = ADMIN_HOUSE_DESCRIPTION_API_URL + "/" + `${ address.streetId }` + "/" + `${ address.houseId }`
    console.log(url)
    return fetch( url ).then( response => response.json() ).then( result => result[0]['house_description'] )
} )

const houseSlice = createSlice({
    name: 'house',
    initialState,
    reducers: {
        setHouses: (state, action) => {
            state.array = action.payload
        },
        //добавление дома в список (для примера) - мутирует состояние
        addHouse: (state, action) => {
            state.array.push(action.payload)
        },
        setSelectedStreetId: (state, action) => {
            state.selectedStreetId = action.payload
        },
        setSelectedHouseNumberId: (state, action) => {
            state.selectedHouseNumberId = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHouses.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchHouses.fulfilled, (state, action) => {
            state.addressesArray = action.payload
            state.loading = false
        })
        builder.addCase(fetchHouses.rejected, (state, action) => {
            state.error = action.payload
        })

        builder.addCase(fetchDescription.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchDescription.fulfilled, (state, action) => {
            state.description = action.payload
            state.loading = false
        })
        builder.addCase(fetchDescription.rejected, (state, action) => {
            state.error = action.payload
        })
    },
})


export default houseSlice.reducer
export const {setHouses, setSelectedStreetId, setSelectedHouseNumberId} = houseSlice.actions
