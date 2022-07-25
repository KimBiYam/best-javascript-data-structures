function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  return Math.abs(num).toString().length;
}

function mostDigits(numbers) {
  return Math.max(...numbers.map(digitCount));
}

function radixSort(numbers) {
  const maxDigits = mostDigits(numbers);

  // 최대 자릿수 만큼 루프
  for (let k = 0; k < maxDigits; k++) {
    // 0~9까지의 자릿수 값을 담아놓을 버킷을 생성
    const bucket = Array.from({ length: 10 }, () => []);
    // numbers에서 루프를 돌며 맞는 자릿수 버킷에 값을 추가
    for (let num of numbers) {
      const digit = getDigit(num, k);
      bucket[digit].push(num);
    }

    // 기존 배열에 버킷에 넣은 순서대로(자릿수 순서대로, 그리고 각 자릿수 배열에 들어간 순서대로) 뽑아서 새로운 배열을 할당한다.
    // concat과 스프레드 연산자를 이용하면 간단하게 새로운 배열을 생성할 수 있다.
    numbers = [].concat(...bucket);
  }

  return numbers;
}

console.log(
  radixSort([
    3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743,
    4127,
  ])
);
