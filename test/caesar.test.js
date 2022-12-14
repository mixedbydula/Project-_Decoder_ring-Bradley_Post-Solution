const {caesar} = require("../src/caesar.js");
const expect = require("chai").expect;

  describe("caesar", () => {
    it("return false if there is no shift value", () => {
        const input = "green apple";
        const shift = undefined
        const actual = caesar(input, shift);
        expect(actual).to.be.false; 
    });
    it("return false if the shift is > than 25", () => {
        const input = "green apple";
        const shift = 50
        const actual = caesar(input, shift);
        expect(actual).to.be.false; 
    });
    it("return false if the shift < -25", () => {
        const input = "green apple";
        const shift = -60
        const actual = caesar(input, shift);
        expect(actual).to.be.false; 
    });
    it("return false if the shift = 0", () => {
      const message = "green apple";
      const shift = 0;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
    it("Spaces should be maintained throughout.", () => {
        const actual = caesar("a b c d", 8);
        const expected = "i j k l"
        expect(actual).to.eql(expected);
    });
    it("Capital letters can be ignored.", () => {
        const actual = caesar("ABC", 5, false);
        const expected = "vwx"
        expect(actual).to.equal(expected);
    });
    it("If a letter is shifted off the alphabet, it should wrap around to the front", () => {
        const actual = caesar("Zebra", 8);
        const expected = "hmjzi"
        expect(actual).to.equal(expected);
    });
})