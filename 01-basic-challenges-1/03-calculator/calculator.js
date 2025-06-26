function calculator(a, b, o) {
  let result;
  switch (o) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    case "*":
      result = a * b;
      break;
    default:
      throw new Error("It is invalid");
  }
  return result;
}

module.exports = calculator;
