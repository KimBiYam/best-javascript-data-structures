function countUniqueValues(arr) {
  let count = 0;

  // 포인터 변수 2개를 만듦
  let left = 0;
  let right = 1;

  // 오른쪽 포인터가 배열 길이에 도달할때까지만 루프
  while (right <= arr.length) {
    // 두 포인터에 해당하는 값이 다를때만 카운트를 더해줌
    if (arr[left] !== arr[right]) {
      count++;
    }

    // 포인터를 번갈아가며 옮겨주기 위해 인덱스 값이 낮은 포인터를 높은 포인터 다음 값으로 할당
    if (left > right) {
      right = left + 1;
    } else {
      left = right + 1;
    }
  }

  return count;
}
