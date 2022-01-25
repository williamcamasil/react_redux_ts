import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import stockReducer from './Stock.store'

const store = configureStore({
    reducer: {
        stock: stockReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store