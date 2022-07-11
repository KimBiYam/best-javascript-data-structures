function someRecursive(arr, callback) {
  // 배열에 요소가 남아있고 콜백 한번이라도 통과 하면 true 리턴
  if (callback(arr[0]) && arr.length !== 0) return true;

  // 배열에 요소가 없으면 끝까지 콜백 함수를 통과하지 못했기 때문에 false를 리턴
  return arr.length !== 0 ? someRecursive(arr.slice(1), callback) : false;
}
