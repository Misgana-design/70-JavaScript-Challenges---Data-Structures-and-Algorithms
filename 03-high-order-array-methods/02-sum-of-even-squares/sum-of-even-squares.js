function sumOfEvenSquares(arr) {
  const evenNum = arr.filter((num) => num % 2 === 0);
  const evenSquare = evenNum.map((num) => num * num);
  const evenSquareSum = evenSquare.reduce((total, num) => {
    return total + num;
  }, 0);
  return evenSquareSum;
}

module.exports = sumOfEvenSquares;
