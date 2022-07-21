function getDigit(num, place) {
  // 숫자를 10과 자릿수 값의 제곱으로 나눈 후 소숫점을 버리고 10으로 나눈 나머지 값을 가져오면 해당 자릿수의 값을 얻을 수 있다.
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  return Math.abs(num).toString().length;
}

function mostDigits(numbers) {
  return Math.max(...numbers.map(digitCount));
}

console.log(
  mostDigits([1234, 56, 7]), // 4
  mostDigits([1, 1, 11111, 1]), // 5
  mostDigits([12, 34, 56, 78]) // 2
);
