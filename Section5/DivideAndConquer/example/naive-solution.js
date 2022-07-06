// 해당 방식은 linear search 알고리즘으로, O(n)의 시간 복잡도를 가진다.
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
