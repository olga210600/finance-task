import {getFullNameTicker} from "./commonFunctions";

describe("sum function", () => {
    it("should return Apple", () => {
        expect(getFullNameTicker('AAPL')).toEqual('Apple');
    });

    it("should return Alphabet", () => {
        expect(getFullNameTicker('GOOGL')).toEqual('Alphabet');
    });

    it("should return Amazon", () => {
        expect(getFullNameTicker('AMZN')).toEqual('Amazon');
    });

    it("should return Facebook", () => {
        expect(getFullNameTicker('FB')).toEqual('Facebook');
    });

    it("should return Tesla", () => {
        expect(getFullNameTicker('TSLA')).toEqual('Tesla');
    });
})