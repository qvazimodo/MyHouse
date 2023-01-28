import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useSelector  } from "react-redux";
import {
    ADMIN_CLIENTS_BY_ADDRESS_API_URL,
} from '../../helpers/API'

const initialState = {
    loading:false,
    array:[],
    current:{},
    error:''
}

export const fetchClients = createAsyncThunk( 'client/fetchClientsList', ( address ) => {
    // let address =  useSelector((state )=>state.house.selectedAddress)
    let url = ADMIN_CLIENTS_BY_ADDRESS_API_URL + "/" + `${ address.streetId }` + "/" + `${ address.houseNumberId }`
    console.log( url )
    return fetch( url ).then( response => response.json() ).then( result => {
        console.log( result.data )
    } )
} )

const clientSlice = createSlice({
    name:'client',
    initialState,
    reducers:{
        setCurrent:(state , action)=>{
            state.current = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase( fetchClients.pending, ( state ) => {
            state.loading = true
        } )
        builder.addCase( fetchClients.fulfilled, ( state, action ) => {
            state.clients = action.payload
            state.loading = false
        } )
        builder.addCase( fetchClients.rejected, ( state, action ) => {
            state.error = action.payload
        } )
    }
})

export default clientSlice.reducer
export const {setCurrent}=clientSlice.actions
