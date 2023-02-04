import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADMIN_CLIENTS_API_URL, ADMIN_CLIENTS_BY_ADDRESS_API_URL, } from '../../helpers/API'

const initialState = {
    loading: false,
    array: [
        {
            "user_id": null,
            "client_name": "",
            "client_birth_date": "",
            "client_phone": "",
            "client_email": "",
            "client_patronymic": "",
            "client.last_name": "",
            "client_id": null,
            "apartment_id": null,
            "apartment_number": null,
            "entrance": null,
            "floor": null,
            "street_name": "",
            "house_number": ""
        }
    ],
    error: '',
}

export const fetchClients = createAsyncThunk( 'client/fetchClients', () => {
    return fetch( ADMIN_CLIENTS_API_URL ).then( response => response.json() ).then( result => result.data
    )
} )

export const fetchClientsByAddress = createAsyncThunk( 'client/fetchClientsByAddress', ( address ) => {
    let url = ADMIN_CLIENTS_BY_ADDRESS_API_URL + "/" + `${ address.streetId }` + "/" + `${ address.houseNumberId }`
    console.log( url )
    return fetch( url ).then( response => response.json() ).then( result => result.data
    )
} )

export const putClientById = createAsyncThunk( 'client/putClient',
    ( newClientData, thunkAPI ) => {
        console.log( newClientData )
        let url = ADMIN_CLIENTS_API_URL
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

export const deleteClient = createAsyncThunk( 'client/deleteClient',
    ( clientId, thunkAPI ) => {
        console.log( clientId )
        let url = ADMIN_CLIENTS_API_URL + '/' + `${ clientId }`
        console.log( url )

        const data = fetch( url,
            {
                method: "DELETE", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
                headers: {
                    'Content-type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector( 'meta[name="csrf-token"]' )
                        .getAttribute( 'content' ),
                },
            }
        ).then( response => response.json() ).then( data => data )

        return data
    }
)
const clientSlice = createSlice( {
    name: 'client',
    initialState,
    reducers: {
        clearClientsArray: ( state ) => {
            state.array = []
        }
    },
    extraReducers: ( builder ) => {
//получение списка всех клиентов компании
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
            state.loading = false
        } )

//получение списка клиентов по указанному адресу
        builder.addCase( fetchClientsByAddress.pending, ( state ) => {
            state.loading = true
        } )
        builder.addCase( fetchClientsByAddress.fulfilled, ( state, action ) => {
            state.array = action.payload
            console.log( action.payload )
            state.loading = false
        } )
        builder.addCase( fetchClientsByAddress.rejected, ( state, action ) => {
            state.error = action.payload
            state.loading = false
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
            state.loading = false
        } )

        //удаление клиента
        builder.addCase( deleteClient.pending, ( state ) => {
            state.loading = true
        } )
        builder.addCase( deleteClient.fulfilled, ( state, action ) => {
            state.array = action.payload
            console.log( action.payload )
            state.loading = false
        } )
        builder.addCase( deleteClient.rejected, ( state,
                                                  action ) => {
            state.error = action.payload
            state.loading = false
        } )
    }
})

export default clientSlice.reducer
export const { clearClientsArray}=clientSlice.actions
