class Node {
  // creating a node with value
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  // creating a empty singly linked list
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // insert a vale at the tail
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }
  // remove the tail value
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return true;
  }
  // remove the head value
  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else this.head = this.head.next;
    this.length--;
    return true;
  }
  // insert a value to the head
  unShift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return true;
  }
  // get the node with value
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // change the value of the given index
  set(index, val) {
    let node = this.get(index);
    if (node === null) return console.log("ERROR:index not found");
    node.val = val;
    return this;
  }
  // insert a node in the given index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.unShift(val);
    if (index == this.length) return !!this.push(val);
    var newNode = new Node(val);
    let previousNode = this.get(index - 1);
    newNode.next = this.get(index);
    previousNode.next = newNode;
    this.length++;
    return true;
  }
  // remove the node with the given index
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.shift();
    if (index == this.length - 1) return !!this.pop();
    let previousNode = this.get(index - 1);
    previousNode.next = previousNode.next.next;
    this.length--;
    return true;
  }
  // reverse the list
  reverse() {
    if (this.length == 0) return false;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    var next;
    var prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("hi");
list.push("there");
list.push("all");

console.log(list.reverse());
