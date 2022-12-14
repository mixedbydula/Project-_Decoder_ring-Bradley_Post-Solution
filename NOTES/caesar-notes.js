/*notes
DECODE
iterate through each letter in the input
SUBTRACT shift value
return string += adjusted letter

ENCODE
iterate through each letter in the input
ADD shift value
return string += adjusted letter


function caesarCipherEncryptor(string, key) {
    let output = "";
    for(let char of string){
        let newCode = char.charCodeAt() + key % 26;
        if(newCode <= 122){
                output += String.fromCharCode(newCode);
        } else {
            output += String.fromCharCode(96 + (newCode%122));
        }
    }
    return output;
}

Return Number
sentence.charCodeAt(index) 
Return letter
sentence.charAt(index)

a .z
97-122

Letter
fromCharCode
Index
charCodeAt

If $ > 122,
# becomes 97+ (difference -1)


*/
