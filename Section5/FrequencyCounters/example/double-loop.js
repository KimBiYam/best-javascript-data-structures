function same(arr1, arr2) {
  // 배열의 길이가 다르면 무조건 false를 반환
  if (arr1.length !== arr2.length) {
    return false;
  }

  // indexOf를 사용하면 사실상 이중 루프기 때문에 O(n²)의 시간 복잡도를 가진다.
  for (let i = 0; i < arr1.length; i++) {
    // arr1을 반복 돌면서 두 번째 배열에서 제곱과 같은 값의 인덱스가 있는지 확인함
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // 없다면 false를 리턴
    if (correctIndex === -1) {
      return false;
    }
    // 있다면 해당 값은 검증 됐으므로 두 번째 배열에서 인덱스를 이용하여 제거
    arr2.splice(correctIndex, 1);
  }
  return true;
}
