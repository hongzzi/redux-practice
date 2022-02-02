import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => { state.value += 1},
        decrease: (state) => { state.value -= 1},
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

// actions 의 반환값은 기존 action처럼 아마도 상수값(immutable한 자체값)
export const {increment, decrease, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer
