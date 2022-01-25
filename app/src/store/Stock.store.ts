import { createSlice } from "@reduxjs/toolkit"
import { AppDispatch, AppThunk } from "."

const stock = createSlice({
    name: 'stock',
    initialState: {
        counter: 0
    },
    reducers: {
        increment (state) {
            state.counter += 1
        },
        decrement (state) {
            state.counter -= 1
        }
    }
})

export const { increment, decrement } = stock.actions
export default stock.reducer

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Ações assincronas
export function asyncIncrement (): AppThunk {
    return async function (dispatch: AppDispatch) {
        await sleep(3000)
        dispatch(increment())
    }
}

export function asyncDecrement (): AppThunk {
    return async function (dispatch: AppDispatch) {
        await sleep(2000)
        dispatch(decrement())
    }
}