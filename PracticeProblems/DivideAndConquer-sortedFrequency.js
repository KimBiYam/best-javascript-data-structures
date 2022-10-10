function sortedFrequency(arr, target) {
  function countFrequencyRecursive(left, right) {
    if (left > right) {
      return 0;
    }

    if (left === right) {
      if (target === arr[left]) {
        return 1;
      }
      return 0;
    }

    const mid = Math.floor((right + left) / 2);

    // 중앙 인덱스 값으로 왼쪽 오른쪽을 쪼개서 합산을 리턴
    // 재귀적으로 호출 되어 target에 해당하는 값의 갯수가 더해진다
    return (
      countFrequencyRecursive(left, mid) +
      countFrequencyRecursive(mid + 1, right)
    );
  }

  const result = countFrequencyRecursive(0, arr.length - 1);
  return Boolean(result) ? result : -1;
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1
