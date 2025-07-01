// function titleCase(string) {
//   let words = string.toLowerCase().split(" ");
//   for (i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" ");
// }

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ""))
    .join(" ");
}
  

module.exports = titleCase;
