let str = "helloworld";

str.charCodeAt;

function encodeString(string, shiftBy) {
  let encoded = "";
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    let newCharCode = charCode + shiftBy;
    encoded += String.fromCharCode(newCharCode);
  }
  return encoded;
}

console.log(encodeString(str, 1));

function decodeString(string, shiftBy) {
  let decoded = "";
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    let newCharCode = charCode - shiftBy;
    decoded += String.fromCharCode(newCharCode);
  }
  return decoded;
}

const encodedString = "";

// console.log(decodeString(encodedString, 2));
