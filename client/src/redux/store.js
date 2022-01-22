import {configureStore} from "@reduxjs/toolkit";
import tickerSlice from "./slices/tickerSlice";

const store = configureStore({
    reducer: tickerSlice.reducer
})

export default store;