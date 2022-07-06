function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  // 제일 처음 배열의 첫 요소부터 num 갯수만큼의 합계를 구한다
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // 처음 num 갯수만큼 합계를 구했으니 그 뒤 부터 배열을 반복하면서 진행한다.
  // 배열의 길이만큼 루프를 돌아서 O(n)의 시간 복잡도를 가진다.
  for (let i = num; i < arr.length; i++) {
    /**
     * 배열을 이동하면서 연속된 숫자의 합계를 구하는 것이 목적이므로
     * 이전에 구한 합계의 첫 요소를 빼주고 새로운 요소를 더해주기만 하면 된다.
     */
    tempSum = tempSum - arr[i - num] + arr[i];
    // 합계 최대치를 저장
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
