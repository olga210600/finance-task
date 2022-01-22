import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {io} from "socket.io-client";
import uuid from 'react-uuid'
import styled from 'styled-components'

import {counterSelector, getTickets} from "./redux/createBlock/main";
import {companies} from "./utils/commonFunctions";
import TickerBlock from './components/TickerBlock';


const AppWrapper = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  margin:100px auto;
`

const socket = io("http://localhost:4000");

const App = () => {
    const dispatch = useDispatch();
    const tickers = useSelector(counterSelector.getTickers);

    useEffect(() => {
        socket.emit('start');
        socket.on('ticker', (data) => {
            dispatch(getTickets(data));
        })
    }, [dispatch])

    console.log(" tickers.currData", tickers)

    return (
            <AppWrapper>
                <GlobalStyle/>
                {tickers.currData.map((item, index) => {
                    return (
                        <div>
                            <TickerBlock
                                key={uuid()}
                                prevPrice={tickers.prevData[index]?.price}
                                ticker={item.ticker}
                                price={item.price}
                                change_percent={item.change_percent}
                                logo={companies[item.ticker].icon}
                            />
                        </div>
                    )
                })}
            </AppWrapper>
    );
}

export default App;
