import {configureStore} from '@reduxjs/toolkit'


import houseReducer from './features/house/houseSlice'

const store = configureStore({
    reducer: {
        house: houseReducer,
    }
})

export default store
