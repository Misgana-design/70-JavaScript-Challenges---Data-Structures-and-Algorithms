//Solution 1
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

//Solution 2

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

module.exports = reverseString;
