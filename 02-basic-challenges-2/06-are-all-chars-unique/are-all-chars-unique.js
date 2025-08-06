//Solution 1
function areAllCharactersUnique(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      return false;
    }
    charCount[char] = true;
  }
  return true;
}

//Solution 2

// function areAllCharactersUnique(str) {
//   let charSet = new Set();
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (charSet.has(char)) {
//       return false;
//     }
//     charSet.add(char);
//   }
//   return true;
// }

module.exports = areAllCharactersUnique;
