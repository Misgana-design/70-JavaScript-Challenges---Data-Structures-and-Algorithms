//Solution 1
function countOccurrences(str, char) {
  let c = 0;
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      c = c + 1;
    }
  }
  return c;
}

// Solution 2
function countOccurrences(str, char) {
  let words = str.split("");
  for (i = 0; i < str.length; i++) {
    if (words[i] === char) {
      c++;
    }
  }

  return c++;
}

//Solution 3
function countOccurrences(str, char) {
  return str.split(char).length - 1;
}

module.exports = countOccurrences;
