//Solution 1
// function countOccurrences(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (char === str[i]) {
//       count = count + 1;
//     }
//   }
//   return count;
// }

// Solution 2
// function countOccurrences(str, char) {
//   let count = 0;
//   let words = str.split("");
//   for (i = 0; i < str.length; i++) {
//     if (words[i] === char) {
//       count++;
//     }
//   }

//   return count++;
// }

//Solution 3
function countOccurrences(str, char) {
  return str.split(char).length - 1;
}

module.exports = countOccurrences;
