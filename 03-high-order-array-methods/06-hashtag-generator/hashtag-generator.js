//Solution 1

// function generateHashtag(str) {
//   if (str.trim() === "") return false;
//   const words = str
//     .trim()
//     .split(/\s+/)
//     .map((word) => word[0].toUpperCase() + word.slice(1));
//   const hashTag = "#" + words.join("");
//   return hashTag.length > 140 ? false : hashTag;
// }

//Solution 2

function generateHashtag(str) {
  if (str.trim() === "") return false;
  const hashTag = str
    .trim()
    .split(/\s+/)
    .reduce((acc, word) => {
      return acc + word[0].toUpperCase() + word.slice(1);
    }, "#");

  return hashTag.length > 140 ? false : hashTag;
}

module.exports = generateHashtag;
