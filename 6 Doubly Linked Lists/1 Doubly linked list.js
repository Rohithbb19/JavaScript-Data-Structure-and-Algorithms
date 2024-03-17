class Node {
  // creating a node with value
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  // creating an empty doubly linked list
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // insert a vale at the tail
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // remove the tail value
  pop() {
    if (!this.head) return false;
    let toPop = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = toPop.prev;
      this.tail.next = null;
      toPop = null;
    }
    this.length--;
    return this;
  }
  // remove the head value
  shift() {
    if (!this.head) return false;
    let toShift = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = toShift.next;
      this.head.prev = null;
      toShift = null;
    }
    this.length--;
    return this;
  }
  // insert a value to the head
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // get the node with value
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter, current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.perv;
        counter--;
      }
    }
    return current;
  }
  // change the value of the given index
  set(index, val) {
    let node = this.get(index);
    if (node !== null) {
      node.val = val;
      return true;
    }
    return false;
  }
  // insert a node in the given index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.unShift(val);
    if (index == this.length) return !!this.push(val);
    let newNode = new Node(val);
    let nextNode = this.get(index);
    let previousNode = this.get(index - 1);
    newNode.next = nextNode;
    newNode.prev = previousNode;
    previousNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }
  // remove the node with the given index
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.shift();
    if (index == this.length - 1) return !!this.pop();
    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next.next;
    previousNode.next = nextNode;
    nextNode.prev = previousNode;
    this.length--;
    return true;
  }
}

let list = new DoublyLinkedList();
list.push("hello");
list.push("world");
list.push("hi");
console.log(list);
console.log(list.remove(1));
console.log(list);
