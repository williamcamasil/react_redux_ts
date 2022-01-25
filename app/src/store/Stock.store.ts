import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch, AppThunk } from "."

const stock = createSlice({
    name: 'stock',
    initialState: {
        counter: 0
    },
    reducers: {
        //passando um payload para o método
        increment (state, action: PayloadAction<number>) {
            state.counter += action.payload
        },
        decrement (state) {
            state.counter -= 1
        }
    }
})

export const { increment, decrement } = stock.actions
export default stock.reducer


//-----------------ASYNC AWAIT


function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Ações assincronas
export function asyncIncrement (amount: number): AppThunk {
    return async function (dispatch: AppDispatch) {
        await sleep(3000)
        dispatch(increment(amount))
    }
}

export function asyncDecrement (): AppThunk {
    return async function (dispatch: AppDispatch) {
        await sleep(2000)
        dispatch(decrement())
    }
}