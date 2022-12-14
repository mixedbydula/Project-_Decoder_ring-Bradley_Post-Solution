/* ORIGINAL ATTEMPT
  function caesar(input, shift, encode = true) {
    // your solution code here
    let inputNew = input.toLowerCase()
    let encodedPhrase = ""

    for (char in inputNew){
      let code = char.charCodeAt() + shift

      if(code >122){
        total = 97 + (code - 123)
        encodedPhrase += String.fromCharCode(total)
      }
      if (code < 97){
        total = 122 - (123 - code)
        encodedPhrase += String.fromCharCode(total)
      }
      if (code >=97 && code <= 122){
        total = code
        encodedPhrase += String.fromCharCode(total)
      }
      }
    return encodedPhrase
  }
        console.log(caesar("pUrple",5))
  }
*/