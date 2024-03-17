class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
      else return false;
    }
    addEdge(v1, v2, weight) {
      if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
      if (this.adjacencyList[v1].includes(v2)) return false;
      this.adjacencyList[v1].push({ node: v2, weight });
      this.adjacencyList[v2].push({ node: v1, weight });
    }
    removeEdge(v1, v2) {
      let notFound = false;
      let arr1 = this.adjacencyList[v1];
      let arr2 = this.adjacencyList[v2];
      if (!arr1 || !arr2) return false;
      arr1.forEach((element) => {
        element.node != v2 ? (notFound = true) : (notFound = false);
      });
      if (notFound) return false;
      this.adjacencyList[v1] = arr1.filter((v) => v.node !== v2);
      this.adjacencyList[v2] = arr2.filter((v) => v.node !== v1);
    }
    removeVertex(vertex) {
      if (!this.adjacencyList[vertex]) return false;
      let arr = this.adjacencyList[vertex];
      for (let value of arr) {
        this.removeEdge(vertex, value.node);
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
  graph.addEdge("E", "A", 3);
  graph.addEdge("A", "B", 4);
  graph.addEdge("B", "D", 5);
  graph.addEdge("C", "E", 1);
  console.log(graph.adjacencyList);
  