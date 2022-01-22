import React from 'react';
import {BlockWrapper, Ticker, Price, Abbreviation, PriceDifference, Percent, Wrap, Logo} from './TickerBlockStyled'
import {getFullNameTicker} from '../../utils/commonFunctions';


const checkOfNegativeNumber = (prevPrice, price) => {
    const result = prevPrice - price;
    const isNegative = result < 0;
    return ({
        result: result ? `${result.toFixed(2)} $` : '- No data - ',
        isNegative
    })
}

const TickerBlock = ({ticker, price, change_percent, prevPrice, logo}) => {

   const priceData = checkOfNegativeNumber(prevPrice, price)

    return (
        <BlockWrapper>
            {/*{companies.apple.icon && <img src={companies.apple.icon} />}*/}
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