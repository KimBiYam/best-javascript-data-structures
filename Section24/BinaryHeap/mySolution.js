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

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    // pop 했을 때 길이가 0 이면 max와 end가 같은 값이므로 스왑하거나 sink down 하지않고 바로 리턴
    if (this.values.length === 0) return end;

    this.values[0] = end;
    this.sinkDown();

    return max;
  }

  sinkDown() {
    let index = 0;
    const element = this.values[index];
    const length = this.values.length;

    while (true) {
      const leftChildIndex = index * 2 + 1; // 이진 힙 배열에서 왼쪽 자식 노드를 찾는 공식
      const rightChildIndex = index * 2 + 2; // 이진 힙 배열에서 오른쪽 자식 노드를 찾는 공식
      let leftChild;
      let rightChild;
      let swapIndex = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        // 왼쪽 자식이 크면 swapIndex에 왼쪽 자식 인덱스를 저장
        if (leftChild > element) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          // 왼쪽 자식이 현재 요소보다 크지 않으면 오른쪽 노드와 요소를 비교하고
          // 왼쪽 자식이 현재 요소보다 커서 swapIndex 값이 null이 아니면 오른쪽 자식과 왼쪽 자식을 비교
          (swapIndex === null && rightChild > element) ||
          (swapIndex !== null && rightChild > leftChild)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      // 비교할 대상이 없다면 현재 요소보다 큰 자식 요소가 없다는 것이므로 루프 종료
      if (swapIndex === null) break;

      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = element;
      index = swapIndex;
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
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);
