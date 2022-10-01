class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    const currentArray = this.adjacencyList[vertex];

    currentArray.forEach((adjacencyVertex) => {
      this.removeEdge(adjacencyVertex, vertex);
    });

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(startVertex) {
    const result = [];
    const visited = {};

    const dfs = (vertex) => {
      if (!vertex) return null;

      result.push(vertex);
      visited[vertex] = true;

      this.adjacencyList[vertex].forEach((adjacency) => {
        if (!visited[adjacency]) dfs(adjacency);
      });
    };

    dfs(startVertex);

    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.adjacencyList);
console.log(graph.depthFirstRecursive("A"));
