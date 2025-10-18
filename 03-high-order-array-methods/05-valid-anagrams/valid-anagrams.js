function validAnagrams(str1, str2) {
  const firstCount = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  const secondCount = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  
  const value = Object.keys(firstCount).every((char) => {
    return firstCount[char] === secondCount[char];
  });
  return value;
}

module.exports = validAnagrams;
