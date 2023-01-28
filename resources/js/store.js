import {configureStore} from '@reduxjs/toolkit'


import houseReducer from './features/house/houseSlice'
import clientReducer from "./features/client/clientSlice"

const store = configureStore({
    reducer: {
        house: houseReducer,
        client:clientReducer,
    }
})

export default store
