import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADMIN_EMPLOYEES_API_URL, ADMIN_EMPLOYEES_BY_ADDRESS_API_URL, } from '../../helpers/API'

const initialState = {
    loading: false,

    array: [],
    current: {},
    error: '',
}

export const fetchAllEmployees = createAsyncThunk( 'employee/fetchAllEmployees', () => {
    let url = ADMIN_EMPLOYEES_API_URL
    return fetch( url ).then( response => response.json() ).then( result => result.data )
} )

export const fetchEmployeesByAddress = createAsyncThunk( 'employee/fetchEmployeesByAddress', ( address ) => {
    // let address =  useSelector((state )=>state.house.selectedAddress)
    let url = ADMIN_EMPLOYEES_BY_ADDRESS_API_URL + "/" + `${ address.streetId }` + "/" + `${ address.houseNumberId }`
    console.log( url )
    return fetch( url ).then( response => response.json() ).then( result => result.data )
} )

export const putEmployeeById = createAsyncThunk( 'employee/putEmployee',
    ( newEmployeeData, thunkAPI ) => {
        console.log( newEmployeeData )
        let url = ADMIN_EMPLOYEES_API_URL
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
                    { ...newEmployeeData }
                )
            }
        ).then( response => response.json() ).then( data => data )

        return data
    }
)

export const deleteEmployee = createAsyncThunk( 'employee/deleteEmployee',
    ( employeeId, thunkAPI ) => {
        console.log( employeeId )
        let url = ADMIN_EMPLOYEES_API_URL + '/' + `${ employeeId }`
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
const employeeSlice = createSlice( {
    name: 'employee',
    initialState,
    reducers: {
        setCurrent: ( state, action ) => {
            state.current = action.payload
        }
    },
    extraReducers: ( builder ) => {

        //получение списка всех сотрудников компании
        builder.addCase( fetchAllEmployees.pending, ( state ) => {
            state.loading = true
        } )
        builder.addCase( fetchAllEmployees.fulfilled, ( state, action ) => {
            state.array = action.payload
            console.log( action.payload )
            state.loading = false
        } )
        builder.addCase( fetchAllEmployees.rejected, ( state, action ) => {
            state.error = action.payload
            state.loading = false
        } )

        //получение списка сотрудников по адресу обслуживаемого объекта
        builder.addCase( fetchEmployeesByAddress.pending, ( state ) => {
            state.loading = true
        } )
        builder.addCase( fetchEmployeesByAddress.fulfilled, ( state, action ) => {
            state.array = action.payload
            console.log( action.payload )
            state.loading = false
        } )
        builder.addCase( fetchEmployeesByAddress.rejected, ( state, action ) => {
            state.error = action.payload
            state.loading = false
        } )

//обновление данных сотрудника
        builder.addCase( putEmployeeById.pending, ( state ) => {
            state.loading = true
        } )
        builder.addCase( putEmployeeById.fulfilled, ( state, action ) => {
            state.array = action.payload
            console.log( action.payload )
            state.loading = false
        } )
        builder.addCase( putEmployeeById.rejected, ( state,
                                                   action ) => {
            state.error = action.payload
            state.loading = false
        } )

        //удаление клиента
        builder.addCase( deleteEmployee.pending, ( state ) => {
            state.loading = true
        } )
        builder.addCase( deleteEmployee.fulfilled, ( state, action ) => {
            state.array = action.payload
            console.log( action.payload )
            state.loading = false
        } )
        builder.addCase( deleteEmployee.rejected, ( state,
                                                  action ) => {
            state.error = action.payload
            state.loading = false
        } )
    }
})

export default employeeSlice.reducer
export const {setCurrent}=employeeSlice.actions
