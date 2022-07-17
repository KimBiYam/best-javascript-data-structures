function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < current) break;
      arr[j + 1] = arr[j];
      arr[j] = current;
    }
  }

  return arr;
}

console.log(insertionSort([5, 1, 1, 2, 0, 0]));
