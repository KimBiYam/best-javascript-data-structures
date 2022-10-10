function findRotatedIndex(arr, target) {
  function findTargetRecursive(left, right) {
    // left, right 값이 같다면 target 값을 찾지 못한 것으로 -1 리턴
    if (left === right) return -1;

    const mid = Math.floor((right + left) / 2);

    if (arr[mid] === target) return mid;

    // 배열을 반으로 쪼개서 재귀적으로 인덱스 값을 찾음
    const leftResult = findTargetRecursive(left, mid);
    const rightResult = findTargetRecursive(mid + 1, right);

    // Math.max 함수로 target 값을 찾았다면 해당 인덱스를, 아니면 -1을 리턴
    return Math.max(leftResult, rightResult);
  }

  return findTargetRecursive(0, arr.length - 1);
}

findRotatedIndex([3, 4, 1, 2], 4); // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3); // 6
findRotatedIndex([37, 44, 66, 102, 10, 22], 14); // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12); // -1
findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16); // 5
