// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

function caesar(input, shift, encode = true) {
//requested parameters  
  if (shift === undefined || shift === 0 || shift >25 || shift <-25){return false}
//if decode; allow negative shift by mult shift by 2 and subtract result from shift  
  if (encode === false){shift = shift - (shift*2)}

// cleaner code for lowercase input
  const lowerInput = input.toLowerCase()

//create an array of the input > use map to iterate and create a new array
    let inputArray = [...lowerInput].map((i) => {
//store each iteration from array in a new variable as a number
      let letterAsNum = i.charCodeAt();
//if number lies within lowercase charCode > return number as corresponding letter      
        if (letterAsNum < 97 || letterAsNum > 122) 
          return String.fromCharCode(letterAsNum);

//add shift to each iterations charCode          
      let letterShift = letterAsNum + shift;
//if these parameters trigger; above or below 97/122; add to letter shift      
        if (letterShift < 97) {letterShift += 26};
        if (letterShift > 122) {letterShift -= 26};
//return shifted letter to inputArray        
          return String.fromCharCode(letterShift);
    });
    return inputArray.join("");
    };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
