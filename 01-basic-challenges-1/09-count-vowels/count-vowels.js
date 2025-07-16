function countVowels(str) {
  let formatedStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < formatedStr.length; i++) {
    const char = formatedStr[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count = count + 1;
    }
  }
  return count;
}

module.exports = countVowels;
