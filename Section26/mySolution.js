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
}

const graph = new Graph();
graph.addVertex("hello");
graph.addVertex("bye");
graph.addVertex("hi");
graph.addVertex("haha");
graph.addEdge("hello", "bye");
graph.addEdge("hello", "haha");

console.log(graph.adjacencyList);
graph.removeVertex("hello");
console.log(graph.adjacencyList);
