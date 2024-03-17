class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.value = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.value.push(newNode);
    this.bubbleUp();
    this.value;
  }
  bubbleUp() {
    let index = this.value.length - 1;
    const element = this.value[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.value[parentIdx];
      if (element.priority >= parent.priority) break;
      this.value[parentIdx] = element;
      this.value[index] = parent;
      index = parentIdx;
    }
  }
  dequeue() {
    const min = this.value[0];
    const end = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let index = 0;
    const length = this.value.length;
    const element = this.value[0];
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let left, right;
      let swap = null;
      if (leftIndex < length) {
        left = this.value[leftIndex];
        if (left.priority < element.priority) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        right = this.value[rightIndex];
        if (
          (swap === null && right.priority < element.priority) ||
          (swap !== null && right.priority < left.priority)
        ) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;
      this.value[index] = this.value[swap];
      this.value[swap] = element;
      index = swap;
    }
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
      smallest = nodes.dequeue().value;
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
// console.log(graph.adjacencyList);

console.log(graph.dijkstra("A", "E"));
