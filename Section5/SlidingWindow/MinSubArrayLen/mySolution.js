function minSubArrayLen(arr, target) {
  // 최소값을 구하기 위해 초기 값을 Infinity로 할당
  let length = Infinity;
  let sum = 0;

  // sliding window 변수
  let start = 0;
  let end = 0;

  // 시작 변수가 배열 끝에 도달할때까지 루프
  while (start < arr.length) {
    // 합계가 목표치보다 낮고 end 변수가 배열 길이값보다 낮은 경우
    if (sum < target && end < arr.length) {
      // 배열에서 end 인덱스에 해당하는 값을 합계에 더해주고
      // 합계를 구하는 범위를 넓히기 위해 end 값을 증가시킨다.
      sum += arr[end];
      end++;
    } else if (sum >= target) {
      // 합계가 목표치보다 높거나 같은 경우 length에 기존 length 값과
      // 현재의 값의 범위 중 더 작은 값을 저장한다.
      length = Math.min(length, end - start);
      // 그리고 더 적은 길이의 연속 배열을 찾기 위해 시작점을 바꿔준다.
      // start 값을 증가하고 합계에서 start 인덱스에 해당하는 값을 빼준다.
      sum -= arr[start];
      start++;
    } else {
      // 만약 목표치에 해당하는 값 자체가 없다면 시작점이 계속 고정이기 때문에
      // 무한루프를 방지하기 위해서 루프를 중단한다
      break;
    }
  }

  return length === Infinity ? 0 : length;
}
