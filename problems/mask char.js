let str = "hello world mask";

function maskCharacter(string, number) {
  let output = string.slice(0, string.length - number) + "#".repeat(number);
  return output;
}

console.log(maskCharacter(str, 4));
