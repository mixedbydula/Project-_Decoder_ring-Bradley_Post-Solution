// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  let alphabetMain = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let code = []

  function substitution(input, alphabet, encode = true) {
  // Check that the alphabet is a string of exactly 26 characters
  if (typeof alphabet !== "string" || alphabet.length !== 26) {
    return false;
  }
  // Check that all the characters in the alphabet are unique
  if (new Set(alphabet).size !== alphabet.length) {
    return false;
  }
//create a sortable input array as lowercase letters  
   let inputArray = input.toLowerCase().split("")
   
  // Create a list of the letters in the alphabet
     alphabet.split('');
      if(encode) {
        for(let i = 0; i < 25; i++){
          code[alphabetMain[i]] = alphabet[i]
        }
      } else {
        for (let i = 0; i < 25; i++) {
          code[alphabet[i]] = alphabetMain[i]
        }
      }
      let result = inputArray.map((letter) => {
        if(letter === " "){ return " "};
          return code[letter]
      })
      return result.join('')
    }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
