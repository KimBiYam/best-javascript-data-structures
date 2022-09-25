class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
}

const graph = new Graph();
graph.addVertex("hello");

console.log(graph.adjacencyList);
