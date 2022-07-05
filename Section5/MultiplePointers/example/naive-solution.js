function sumZero(arr) {
  // 이중 루프를 돌아 더했을때 0인 한 쌍의 값을 리턴
  // 이중 루프기 때문에 O(n²)의 시간 복잡도를 가진다.
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
