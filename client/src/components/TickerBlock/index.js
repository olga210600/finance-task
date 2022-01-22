import React from 'react';
import {BlockWrapper, Ticker, Price, Abbreviation, PriceDifference, Percent, Wrap, Logo} from './TickerBlockStyled'
import {getFullNameTicker, checkOfNegativeNumber} from '../../utils/commonFunctions';

const TickerBlock = ({ticker, price, change_percent, prevPrice, logo}) => {
    const priceData = checkOfNegativeNumber(prevPrice, price)

    return (
        <BlockWrapper>
            <Logo>{logo}</Logo>
            <Ticker> {getFullNameTicker(ticker)} </Ticker>
            <Abbreviation>{ticker} </Abbreviation>
            <Wrap>
                <Percent>{change_percent} % </Percent>
                <PriceDifference isNegative={priceData.isNegative}>{priceData.result} </PriceDifference>
            </Wrap>
            <Price>{price} $</Price>
        </BlockWrapper>
    )
}

export default TickerBlock;