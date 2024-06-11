let str = "the QuIck brown fox jumps over the lazy dog";

const vowels = ["a", "e", "i", "o", "u"];

function removeVowels(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i].toLowerCase())) {
      newString += string[i];
    }
  }
  return newString;
}

console.log(removeVowels(str));
