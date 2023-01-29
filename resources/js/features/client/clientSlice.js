import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADMIN_CLIENTS_ADVANCED_API_URL, ADMIN_CLIENTS_BY_ADDRESS_API_URL, } from '../../helpers/API'

const initialState = {
    loading: false,
    array: [],
    current: {},
    error: '',
}

export const fetchClients = createAsyncThunk( 'client/fetchClients', ( address ) => {
    // let address =  useSelector((state )=>state.house.selectedAddress)
    let url = ADMIN_CLIENTS_BY_ADDRESS_API_URL + "/" + `${ address.streetId }` + "/" + `${ address.houseNumberId }`
    console.log( url )
    return fetch( url ).then( response => response.json() ).then( result => result.data
    )
} )

export const putClientById = createAsyncThunk( 'client/putClient',
    ( newClientData, thunkAPI ) => {
        console.log( newClientData )
        let url = ADMIN_CLIENTS_ADVANCED_API_URL
        console.log( url )

        const data = fetch( url,
            {
                method: "PUT", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
                headers: {
                    'Content-type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector( 'meta[name="csrf-token"]' )
                        .getAttribute( 'content' ),
                },
                body: JSON.stringify(
                    { ...newClientData }
                )
            }
        ).then( response => response.json() ).then( data => data )

        return data
    }
)

const clientSlice = createSlice( {
    name: 'client',
    initialState,
    reducers: {
        setCurrent: ( state, action ) => {
            state.current = action.payload
        }
    },
    extraReducers: ( builder ) => {
        builder.addCase( fetchClients.pending, ( state ) => {
            state.loading = true
        } )
        builder.addCase( fetchClients.fulfilled, ( state, action ) => {
            state.array = action.payload
            console.log( action.payload )
            state.loading = false
        } )
        builder.addCase( fetchClients.rejected, ( state, action ) => {
            state.error = action.payload
        } )

//обновление данных клиента
        builder.addCase( putClientById.pending, ( state ) => {
            state.loading = true
        } )
        builder.addCase( putClientById.fulfilled, ( state, action ) => {
            state.array = action.payload
            console.log( action.payload )
            state.loading = false
        } )
        builder.addCase( putClientById.rejected, ( state,
                                                   action ) => {
            state.error = action.payload
        } )
    }
})

export default clientSlice.reducer
export const {setCurrent}=clientSlice.actions
