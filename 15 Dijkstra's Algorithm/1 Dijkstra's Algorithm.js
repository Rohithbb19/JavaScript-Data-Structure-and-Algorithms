class PriorityQueue {
  constructor() {
    this.value = [];
  }
  enqueue(val, priority) {
    this.value.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.value.shift();
  }
  sort() {
    this.value.sort((a, b) => a.priority - b.priority);
  }
}

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
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distance = {};
    const previous = {};
    let smallest;
    let path = [];
    // initialize distance values
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distance[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distance[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // visiting all the nodes
    while (nodes.value.length) {
      smallest = nodes.dequeue().val;
      if (smallest == finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distance[smallest] !== Infinity) {
        for (let element in this.adjacencyList[smallest]) {
          // find nodes connected to
          let nextNode = this.adjacencyList[smallest][element];
          // calculate distance to connected node
          let current = distance[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          if (current < distance[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distance[nextNeighbor] = current;
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, current);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let graph = new Graph();
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

console.log(graph.dijkstra("A", "E"));
