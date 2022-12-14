const {polybius} = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () => {
    it("Encode a message converting an input to numeric output",() => {
        const actual = polybius("message");
        const expected = '23513434112251';
        expect(actual).to.equal(expected);
    });
    it("Spaces should be maintained throughout.",() => {
        const expected = '3211535345 2142244432411145';
        const actual = polybius("happy birthday");
        expect(actual).to.equal(expected);
    });
    it("The letters I and J share a space. When encoding, both letters can be converted to 42", () => {
        const expected = '42423335';
        const actual = polybius("jinx");
        expect(actual).to.equal(expected);
    })
    it("Decode an input by converting each numeric pair into a single letter", () => {
        const expected = "help";
        const actual = polybius('32511353', false);
        expect(actual).to.equal(expected);
    })
    it("When decoding, the number of characters in the string excluding spaces should be even.", () => {
        const actual = polybius("534313452142435434 43414", false);  
        expect(actual).to.be.false;
    })
}); 


// You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
// When encoding, your output should still be a string.
// Capital letters can be ignored.
// The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.