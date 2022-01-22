import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tickers: [],
    tickersData: {
        prevData: [],
        currData: []
    }
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        getTickets: (state, { payload }) => {
            state.tickersData.prevData = state.tickersData.currData;
            state.tickersData.currData = payload;
        }
    }
});

export const counterSelector = {
    getTickers: (state) => state.tickersData,
}

export const {getTickets} = counterSlice.actions;
export default counterSlice;
