class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const currentNode = this.values[index];

    // index 값이 유효할 동안만 반복
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2); // 이진 힙 배열에서 부모 노드를 찾는 공식
      const parentNode = this.values[parentIndex];

      // 자식 노드의 우선순위 값이 더 낮은 경우에만 진행(값이 낮을수록 우선순위가 높다)
      if (currentNode.priority >= parentNode.priority) break;

      this.values[parentIndex] = currentNode;
      this.values[index] = parentNode;
      index = parentIndex;
    }
  }

  dequeue() {
    const nodeToDequeue = this.values[0];
    const end = this.values.pop();

    // pop 했을 때 길이가 0 이면 max와 end가 같은 값이므로 스왑하거나 sink down 하지않고 바로 리턴
    if (this.values.length === 0) return end;

    this.values[0] = end;
    this.sinkDown();

    return nodeToDequeue;
  }

  sinkDown() {
    let index = 0;
    const currentNode = this.values[index];
    const length = this.values.length;

    while (true) {
      const leftChildIndex = index * 2 + 1; // 이진 힙 배열에서 왼쪽 자식 노드를 찾는 공식
      const rightChildIndex = index * 2 + 2; // 이진 힙 배열에서 오른쪽 자식 노드를 찾는 공식
      let leftChildNode;
      let rightChild;
      let swapIndex = null;

      if (leftChildIndex < length) {
        leftChildNode = this.values[leftChildIndex];
        // 왼쪽 자식의 우선순위 값이 더 낮으면(우선순위가 높음) swapIndex에 왼쪽 자식 인덱스를 저장
        if (leftChildNode.priority < currentNode.priority) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          // 왼쪽 자식이 현재 요소보다 크지 않으면 오른쪽 노드와 요소를 비교하고
          // 왼쪽 자식이 현재 요소보다 커서 swapIndex 값이 null이 아니면 오른쪽 자식과 왼쪽 자식을 비교
          (swapIndex === null && rightChild.priority < currentNode.priority) ||
          (swapIndex !== null && rightChild.priority < leftChildNode.priority)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      // 비교할 대상이 없다면 현재 요소보다 큰 자식 요소가 없다는 것이므로 루프 종료
      if (swapIndex === null) break;

      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = currentNode;
      index = swapIndex;
    }
  }
}

const queue = new PriorityQueue();
queue.enqueue("a", 5);
queue.enqueue("b", 10);
queue.enqueue("c", 0);
queue.enqueue("d", 0);
queue.enqueue("e", 0);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);
