function merge(arr1, arr2) {
  const result = [];
  // 각각의 배열을 위한 인덱스 포인터
  let left = 0;
  let right = 0;

  // 배열 둘 중 하나라도 끝까지 돌면 루프를 중단
  while (left < arr1.length && right < arr2.length) {
    // 왼쪽 오른쪽 배열의 현재 포인터 값을 비교해서 왼쪽이 작다면 결과에 추가하고 왼쪽 포인터를 이동
    if (arr1[left] <= arr2[right]) {
      result.push(arr1[left]);
      left++;
    }

    // 왼쪽 오른쪽 배열의 현재 포인터 값을 비교해서 오른쪽이 작다면 결과에 추가하고 오른쪽 포인터를 이동
    if (arr2[right] <= arr1[left]) {
      result.push(arr2[right]);
      right++;
    }
  }

  // 위의 루프가 끝났을 때 만약 오른쪽 배열이 먼저 순회가 끝나서 왼쪽 배열을 끝까지 순회하지 않았다면 남은 값을 결과에 더해줌
  while (left < arr1.length) {
    result.push(arr1[left]);
    left++;
  }

  // 위와 동일
  while (right < arr2.length) {
    result.push(arr2[right]);
    right++;
  }

  return result;
}

console.log(
  merge([1, 10, 50], [2, 14, 99, 100]) // [1,2,10,14,50,99,100]
);
