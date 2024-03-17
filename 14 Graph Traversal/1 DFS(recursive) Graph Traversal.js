class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    else return false;
  }
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
    if (this.adjacencyList[v1].includes(v2)) return false;
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    let arr1 = this.adjacencyList[v1];
    let arr2 = this.adjacencyList[v2];
    if (!arr1 || !arr2) return false;
    if (!arr1.includes(v2)) return false;
    this.adjacencyList[v1] = arr1.filter((v) => v !== v2);
    this.adjacencyList[v2] = arr2.filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;
    let arr = this.adjacencyList[vertex];
    for (let value of arr) {
      this.removeEdge(vertex, value);
    }
    delete this.adjacencyList[vertex];
  }
  // DFS Recursive
  DFS(start) {
    let result = [];
    let visited = {};
    let adjList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjList[vertex].forEach((element) => {
        if (!visited[element]) {
          return dfs(element);
        }
      });
    })(start);
    return result;
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
graph.addEdge("D", "E");
graph.addEdge("E", "B");
graph.addEdge("C", "B");
console.log(graph.DFS("B"));
