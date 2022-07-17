function merge(arr1, arr2) {
  const result = [];
  let left = 0;
  let right = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] <= arr2[right]) {
      result.push(arr1[left]);
      left++;
    }

    if (arr2[right] <= arr1[left]) {
      result.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    result.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    result.push(arr2[right]);
    right++;
  }

  return result;
}

function mergeSort(arr) {
  // base case로 배열이 1개 이하의 요소를 가지면 바로 리턴
  if (arr.length <= 1) return arr;
  // 배열을 반씩 쪼개서 재귀적으로 다시 mergeSort 함수를 호출
  const middleIndex = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middleIndex));
  const right = mergeSort(arr.slice(middleIndex));

  // 왼쪽 오른쪽 배열이 구해졌다면 merge하여 리턴
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
