function partition(arr, startIndex = 0, endIndex = arr.length - 1) {
  const pivot = arr[startIndex];
  let swapIndex = startIndex;

  const swap = (arr, idx1, idx2) => {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  };

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, startIndex, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  // left가 right보다 큰 경우 해당 섹션의 모든 값이 파티션이 진행 된 이후이므로 base case로 지정
  // 퀵 소트에서는 새로운 배열을 만드는 형태가 아니므로 배열의 길이가 아닌 인덱스 값으로 판단
  if (left > right) return;
  // 파티션을 진행 후 해당 피벗 인덱스를 받아온다
  const pivotIndex = partition(arr, left, right);
  // 해당 피벗 인덱스에 해당하는 값은 이미 소팅이 완료된 값이니 그 이전 값들만 재귀적으로 다시 퀵 소트 호출
  quickSort(arr, left, pivotIndex - 1);
  // 해당 피벗 인덱스에 해당하는 값은 이미 소팅이 완료된 값이니 그 이후 값들만 재귀적으로 다시 퀵 소트 호출
  quickSort(arr, pivotIndex + 1, right);

  return arr;
}
console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
