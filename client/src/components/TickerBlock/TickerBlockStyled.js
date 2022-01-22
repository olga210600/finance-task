import styled from "styled-components";

export const BlockWrapper = styled.div`
  width: 30%;
  min-width: 300px;
  height: 200px;
  border-radius: 10px;
  margin: 20px;
  box-sizing: border-box;
  padding: 17px 13px ;
  box-shadow:rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  //box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  position: relative;
`
export const Ticker = styled.div`
  font-size: 27px;
  font-family: sans-serif;
  box-sizing: border-box;
  margin:  10px;
  color: #593c4a;
 
  //margin-top: 20px;
  font-weight: bold;
`
export const Wrap = styled.div`
  display: flex;
`

export const Abbreviation = styled.div`
  font-size: 15px;
  font-family: sans-serif;
  margin: 10px;
`

export const Percent = styled(Abbreviation)`&& {
  font-size: 15px;
}`

export const Price = styled.div`
  font-size: 23px;
  font-family: sans-serif;
  margin: 10px;
`

export const PriceDifference = styled(Abbreviation)`&& {
  color: ${({ isNegative }) => isNegative ? '#f01f1f' : '#12b021'};
  font-size: 15px;

}`
export const Logo = styled.div`
 position: absolute;
  left: 200px;
  top: 60px
`;