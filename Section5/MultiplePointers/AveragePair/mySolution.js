function averagePair(arr, targetAverage) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const average = (arr[left] + arr[right]) / 2;

    if (average === targetAverage) {
      return true;
    } else if (average > targetAverage) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}
