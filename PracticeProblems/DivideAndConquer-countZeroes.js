function countZeroes(numbers) {
  // min, max 값을 0 부터 배열의 길이만큼으로 시작
  const firstZeroIndex = findFirstZeroRecursive(numbers, 0, numbers.length - 1);

  // 만약 0을 아예 찾지 못했다면 0을 리턴
  if (firstZeroIndex === -1) return 0;

  // 배열의 길이 - 첫 번째 0의 인덱스로 0의 갯수를 리턴
  return numbers.length - firstZeroIndex;
}

function findFirstZeroRecursive(numbers, min, max) {
  if (max >= min) {
    const mid = Math.floor((min + max) / 2);

    // mid 값이 0이거나(배열을 왼쪽 끝까지 모두 순회를 완료한 경우) 이전 인덱스 값이 1이면서
    // 현재 중앙의 값이 0이면 첫 번째 0의 인덱스를 찾았으므로 해당 인덱스를 리턴
    if ((mid === 0 || numbers[mid - 1] === 1) && numbers[mid] === 0) {
      return mid;
    }

    if (numbers[mid] === 1) {
      // 배열 중앙의 값이 1이라면 해당 값 이전 값은 전부 1이므로 최소 값을 중앙+1로 설정하여 재귀 호출
      return findFirstZeroRecursive(numbers, mid + 1, max);
    } else {
      // 배열 중앙의 값이 0이라면 해당 값 이후 값은 전부 0이므로 최대 값을 중앙-1로 설정하여 재귀 호출
      return findFirstZeroRecursive(numbers, min, mid - 1);
    }
  }

  return -1;
}

countZeroes([1, 1, 1, 1, 0, 0]); // 2
countZeroes([1, 0, 0, 0, 0]); // 4
countZeroes([0, 0, 0]); // 3
countZeroes([1, 1, 1, 1]); // 0
