function displayLikes(names) {
  let length = names.length;

  if (length === 0) {
    return "no one likes this";
  } else if (length === 1) {
    return `${names} likes this`;
  } else if (length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }

  // "Peter likes this";
  // "Jacob and Alex like this";
  // "Max, John and Mark like this";
  // "Alex, Jacob and 2 others like this";
  // "Alex, Jacob and 3 others like this";
}

module.exports = displayLikes;
