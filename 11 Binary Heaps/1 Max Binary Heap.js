class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }
  insert(val) {
    this.value.push(val);
    this.bubbleUp();
    this.value;
  }
  bubbleUp() {
    let index = this.value.length - 1;
    const element = this.value[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.value[parentIdx];
      if (element <= parent) break;
      this.value[parentIdx] = element;
      this.value[index] = parent;
      index = parentIdx;
    }
  }
  extractMax() {
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
        if (left > element) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        right = this.value[rightIndex];
        if (
          (swap === null && right > element) ||
          (swap !== null && right > left)
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

let heap = new MaxBinaryHeap();
heap.insert(50);
heap.insert(70);
heap.insert(30);
heap.insert(26);
heap.insert(64);
heap.insert(81);
heap.insert(2);
heap.insert(7);
heap.extractMax();
