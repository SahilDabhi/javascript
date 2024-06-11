let string = " madam ";

string.trim().split("").reverse().join("") == string.trim()
  ? console.log("palindrome")
  : console.log("not   ");

console.log(string.trim().split("").reverse().join(""));

//-------------------------------------------------------------------------------------------------

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

console.log(reverseString(string));
