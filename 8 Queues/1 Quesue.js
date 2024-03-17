class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return temp.value;
  }
}

let list = new Queue();
list.enqueue(1);
list.enqueue(2);
list.enqueue(3);
list.enqueue(4);
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.dequeue());
