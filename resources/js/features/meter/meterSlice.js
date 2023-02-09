import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {
    ADMIN_COLLECTIVE_METERS_API_URL,
    ADMIN_METER_BY_ID_VALUES_API_URL
} from '../../helpers/API'

const initialState = {
    loading: false,
    collectiveMetersArray: [],
    /*    meters: {
            client_id:
                [ {
                    id: null,
                    client_id: null,
                    type: "",
                    number: null,
                    accuracy_class: null,
                    manufacturing_date: "",
                    next_verification_date: "",
                    created_at: "",
                    updated_at: "",
                    house_id: null
                } ],
        },
        error: '',
        currentMeter: {
            id: null,
            client_id: null,
            type: "",
            number: null,
            created_at: "",
            updated_at: "",
            house_id: null,
        },
        currentMeterValues: { yearNumber: [] }*/
}
/*//получение всех счётчиков
export const fetchMeters = createAsyncThunk( 'house/fetchMeters', () => {
    return fetch( ADMIN_METERS_API_URL ).then( response => response.json() ).then( result => result.data )
} )*/

//получение всех общедомовых счётчиков
export const fetchCollectiveMeters = createAsyncThunk('house/fetchCollectiveMeters', () => {
    return fetch(ADMIN_COLLECTIVE_METERS_API_URL).then(response => response.json()).then(result => result.data)
})

export const fetchMeterValues = createAsyncThunk('house/fetchMeterValues', (meterId) => {
    let url = ADMIN_METER_BY_ID_VALUES_API_URL + "/" + `${meterId}`
    console.log(url)
    return fetch(url).then(response => response.json()).then(result => result.data)
})

const meterSlice = createSlice({
    name: 'meter',
    initialState,
    reducers: {
        /*        setCurrentMeter:(state, action)=>{
                    state.currentMeter = action.payload
                }*/
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCollectiveMeters.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCollectiveMeters.fulfilled, (state, action) => {
            state.collectiveMetersArray = action.payload
            state.loading = false
        })
        builder.addCase(fetchCollectiveMeters.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })

        builder.addCase(fetchMeterValues.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchMeterValues.fulfilled, (state, action) => {
            state.currentMeterValues = action.payload
            state.loading = false
        })
        builder.addCase(fetchMeterValues.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
    },
})


export default meterSlice.reducer
export const {} = meterSlice.actions
