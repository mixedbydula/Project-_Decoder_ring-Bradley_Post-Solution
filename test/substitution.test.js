const {substitution} = require("../src/substitution.js");
const expect = require("chai").expect;


describe("substitution", () => {
    it("Encode an input using the given substitution alphabet",() => {
        const expected = 'jrufscpw';
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("All the characters in the alphabet parameter must be unique.",() => {
        const actual = substitution("Thinkful assessment", "abctdo1568soindfvnoguiernb");
        expect(actual).to.be.false;
    });
    it("The alphabet parameter must be a string of exactly 26 characters.",() => {
        const actual = substitution("This should be falsy", "a1ksrtgbfw8p654o!znylv");
        expect(actual).to.be.false;
    });
//     it("Spaces should be maintained throughout.",() => {
//         const actual = substitution("This should maintain spaces", "xoyqmcgrukswaflnthdjpzibev");
//         expect(actual).to.be.false;
//     });
})



// The input could include spaces and letters as well as special characters such as #, $, *, etc.
// Capital letters can be ignored.
