import { createSlice } from "@reduxjs/toolkit";


export const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value +=action.payload
        },
        decrement: (state, action) => {
            state.value -= action.payload
        }
    }
})

export const {increment, decrement} = CounterSlice.actions
export default CounterSlice.reducer