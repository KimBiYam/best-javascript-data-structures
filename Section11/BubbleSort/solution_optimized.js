// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
  // noSwaps 변수를 이용해서 배열을 순회할 때 교환을 하지 않는다면 이미 정렬이 완료된 배열이므로 루프를 중단시킨다.
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
