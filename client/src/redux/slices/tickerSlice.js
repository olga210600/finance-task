import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tickers: [],
    tickersData: {
        prevData: [],
        currData: []
    }
}

const tickerSlice = createSlice({
    name: 'ticker',
    initialState: initialState,
    reducers: {
        getTickets: (state, {payload}) => {
            state.tickersData.prevData = state.tickersData.currData;
            state.tickersData.currData = payload;
        }
    }
});

export const tickerSelector = {
    getTickers: (state) => state.tickersData,
}

export const {getTickets} = tickerSlice.actions;

export default tickerSlice;
