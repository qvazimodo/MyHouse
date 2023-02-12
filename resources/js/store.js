import {configureStore} from '@reduxjs/toolkit'


import houseReducer from './features/house/houseSlice'
import clientReducer from './features/client/clientSlice'
import employeeReducer from './features/employee/employeeSlice'
import passwordReset from "./features/passwordReset/passwordReset";

const store = configureStore({
    reducer: {
        house: houseReducer,
        employee: employeeReducer,
        client:clientReducer,
        passwordReset: passwordReset,
    }
})

export default store
