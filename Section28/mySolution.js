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
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
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
