// Solution 1

function titleCase(string) {
  let words = string.toLowerCase().split(" ");
  for (i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    console.log(words[i]);
  }
  return words.join(" ");
}

//Solution 2

// function titleCase(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ""))
//     .join(" ");
// }

//Solution 3

// function titleCase(str) {
//   const words = str.toLowerCase().split(" ");
//   let wor = "";
//   for (let i = 0; i < words.length; i++) {
//     wor = wor + (words[i][0].toUpperCase() + words[i].slice(1)) + " ";
//   }
//   return wor.trim();
// }

// function titleCase(string) {
//   return string
//     .toLowerCase()
//     .split(" ")
//     .map((word) => (true ? word[0].toUpperCase() + word.slice(1) : ""))
//     .join(" ");
// }

module.exports = titleCase;
