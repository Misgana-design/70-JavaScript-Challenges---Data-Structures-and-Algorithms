function countOccurrences(str, char) {
  let c = 0;
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      c = c + 1;
    }
  }
  return c;
  // let words = str.split("");
  // for (i = 0; i < str.length; i++) {
  //   if (words[i] === char) {
  //     c++;
  //   }
  // }
  // return c++;
}

module.exports = countOccurrences;
