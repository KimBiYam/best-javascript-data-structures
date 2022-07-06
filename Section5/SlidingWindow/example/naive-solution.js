function maxSubarraySum(arr, num) {
  // 구하고자 하는 연속된 갯수보다 배열의 길이가 작으면 null 리턴
  if (num > arr.length) {
    return null;
  }
  // 배열에 음수 값도 들어갈 수 있기 때문에 초기 max 값에 -Infinity 할당
  var max = -Infinity;
  // i값의 최대치는 연속된 숫자를 구할 수 있는 시작점의 최대치까지만 반복
  // 이중 루프를 사용하기 때문에 O(n²)의 시간 복잡도를 가진다.
  for (let i = 0; i < arr.length - num + 1; i++) {
    // temp에 연속된 숫자 합계를 저장
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
