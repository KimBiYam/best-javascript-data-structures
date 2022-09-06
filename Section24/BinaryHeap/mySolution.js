class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    // index 값이 유효할 동안만 반복
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2); // 이진 힙 배열에서 부모 노드를 찾는 공식
      const parentElement = this.values[parentIndex];

      if (element > parentElement) {
        this.values[parentIndex] = element;
        this.values[index] = parentElement;
        index = parentIndex;
      } else {
        break;
      }
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(100);
console.log(heap.values);
