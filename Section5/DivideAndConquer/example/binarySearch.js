// 해당 방식은 binary search 알고리즘으로, O(log n)의 시간 복잡도를 가진다.
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    // 중간 값의 인덱스를 찾는다
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < val) {
      /**
       * 배열이 정렬 되어 있기 때문에 중간 값이 찾고자 하는 값보다 작다면 해당 값 왼쪽의 값들은
       * 검색할 필요가 없기 때문에 min 인덱스 값을 중간값 다음 값으로 지정한다.
       */
      min = middle + 1;
    } else if (currentElement > val) {
      /**
       * 배열이 정렬 되어 있기 때문에 중간 값이 찾고자 하는 값보다 크다면 해당 값 오른쪽의 값들은
       * 검색할 필요가 없기 때문에 max 인덱스 값을 중간값 이전 값으로 지정한다.
       */
      max = middle - 1;
    } else {
      // 검색할 값을 찾았다면 바로 리턴
      return middle;
    }
  }

  return -1;
}
