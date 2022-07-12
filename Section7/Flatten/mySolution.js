function flatten(arr) {
  const result = [];

  // 결과값 축적을 위해서 inner helper 재귀 함수로 구현
  function innerRecursive(innerInput) {
    if (innerInput.length === 0) return;

    const current = innerInput[0];

    // 현재 값이 배열이면 내부로 들어가서 값을 쌓아줘야 하므로 재귀 함수 재호출
    if (Array.isArray(current)) {
      innerRecursive(current);
    } else {
      result.push(current);
    }

    return innerRecursive(innerInput.slice(1));
  }

  innerRecursive(arr);

  return result;
}

console.log(
  flatten([[1], [2], [3]]) // [1,2,3]
);
