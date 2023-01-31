import {configureStore} from '@reduxjs/toolkit'


import houseReducer from './features/house/houseSlice'
import clientReducer from './features/client/clientSlice'
import employeeReducer from './features/employee/employeeSlice'

const store = configureStore({
    reducer: {
        house: houseReducer,
        employee: employeeReducer,
        client:clientReducer,
    }
})

export default store
