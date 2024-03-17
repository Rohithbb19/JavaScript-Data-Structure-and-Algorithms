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
  enQueue(val, priority) {
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
      if (element.priority <= parent.priority) break;
      this.value[parentIdx] = element;
      this.value[index] = parent;
      index = parentIdx;
    }
  }
  deQueue() {
    const max = this.value[0];
    const end = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = end;
      this.sinkDown();
    }
    return max;
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
        if (left.priority > element.priority) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        right = this.value[rightIndex];
        if (
          (swap === null && right.priority > element.priority) ||
          (swap !== null && right.priority > left.priority)
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

let heap = new PriorityQueue();
heap.enQueue("cold", 1);
heap.enQueue("fever", 2);
heap.enQueue("flu", 3);
heap.enQueue("accident", 4);
heap.enQueue("heart attack", 5);
console.log(heap.value);
console.log(heap.deQueue());
console.log(heap.value);
