function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  let swapIndex = startIndex;

  const swap = (arr, idx1, idx2) => {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  };

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[startIndex] > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, startIndex, swapIndex);
  return swapIndex;
}

let arr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];
console.log(pivot(arr));
