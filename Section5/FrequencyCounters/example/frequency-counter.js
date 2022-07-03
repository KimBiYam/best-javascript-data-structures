function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // 두 객체를 사용해서 각 배열의 개별 값의 빈도를 카운팅 한다.
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // 첫 번째 배열을 반복 돌면서 두 번째 배열의 반복에서 값을 확인하는 대신
  // 각 배열마다 한 번씩 개별적으로 반복을 적용할 수 있다.
  // 각 배열마다 반복을 돌면 O(n)의 시간 복잡도를 가진다.
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // 현재 값의 제곱에 해당하는 값이 두 번째 frequencyCounter에 없으면 거짓이다.
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // 그 후 두 번째 frequencyCounter에서 현재 값의 제곱에 해당하는 값의 갯수와
    // 첫 번째 frequencyCounter에서의 갯수를 비교하여 다르면 거짓이다.
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
