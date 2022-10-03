class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, end) {
    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let current;

    // 초기화
    for (const vertex in this.adjacencyList) {
      const priority = vertex === start ? 0 : Infinity;

      distances[vertex] = priority;
      queue.enqueue(vertex, priority);
      previous[vertex] = null;
    }

    // 우선순위 큐에 값이 있는 동안 루프
    while (queue.values.length) {
      current = queue.dequeue().val;

      // 종료 지점의 vertex를 찾았다면
      if (current === end) {
        // previous 객체에서 히스토리를 찾아서 최단경로를 배열로 만들어준다.
        while (previous[current]) {
          path.push(current);
          current = previous[current];
        }

        // 위 while 조건문에 의해서 current 변수에 들어있는 시작점은 빠지기때문에 따로 추가해준다.
        // 그리고 previous에서 찾은 순서는 종료 지점의 vertex부터 역순으로 찾아가기 때문에 reverse로 실제 경로 순서로 변경한다.
        path = [...path, current].reverse();
        break;
      }

      // 인접점들에 대해서 루프
      if (current || distances[current] !== Infinity) {
        this.adjacencyList[current].forEach((next) => {
          const { node: nextNode, weight } = next;
          // 시작점부터 인접점까지의 거리
          const distance = weight + distances[current];

          if (distance < distances[nextNode]) {
            distances[nextNode] = distance;
            previous[nextNode] = current;
            queue.enqueue(nextNode, distance);
          }
        });
      }
    }

    return path;
  }
}

// 이진 힙을 사용하지 않고 구현한 우선순위 큐
// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }

//   enqueue(val, priority) {
//     this.values.push({ val, priority });
//     this.sort();
//   }

//   dequeue() {
//     return this.values.shift();
//   }

//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }

class Node {
  constructor(val, priority) {
    this.val = val;
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

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));
