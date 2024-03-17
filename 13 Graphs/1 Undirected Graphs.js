class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // Add a vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    else return false;
  }
  // Add a edge
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
    if (this.adjacencyList[v1].includes(v2)) return false;
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  // remove a edge
  removeEdge(v1, v2) {
    let arr1 = this.adjacencyList[v1];
    let arr2 = this.adjacencyList[v2];
    if (!arr1 || !arr2) return false;
    if (!arr1.includes(v2)) return false;
    this.adjacencyList[v1] = arr1.filter((v) => v !== v2);
    this.adjacencyList[v2] = arr2.filter((v) => v !== v1);
  }
  // remove a vertex
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;
    let arr = this.adjacencyList[vertex];
    for (let value of arr) {
      this.removeEdge(vertex, value);
    }
    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("E", "A");
graph.addEdge("A", "B");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
console.log(graph.adjacencyList);
graph.removeVertex("C");
console.log(graph.adjacencyList);
