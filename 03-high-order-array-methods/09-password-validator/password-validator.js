function validatePassword(pass) {
  const isLengthValid = pass.length >= 8;
  const isUpperCase = pass
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());
  const isLowerCase = pass
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());
  const isDigit = pass.split("").some((num) => !isNaN(parseInt(num)));

  return isLengthValid && isUpperCase && isLowerCase && isDigit;
}

module.exports = validatePassword;
