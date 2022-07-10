function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }

  let temp = sum;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];

    sum = Math.max(temp, sum);
  }

  return sum;
}
