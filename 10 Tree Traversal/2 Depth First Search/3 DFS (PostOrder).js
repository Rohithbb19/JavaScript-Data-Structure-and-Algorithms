class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (value == current.value) return current;
      if (value < current.value) {
        if (current.left === null) return false;
        current = current.left;
      }
      if (value > current.value) {
        if (current.right === null) return false;
        current = current.right;
      }
    }
  }
  // Depth First Search (PostOrder)
  DFS() {
    let data = [];
    //helper recursive function
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(9);
tree.insert(10);
console.log(tree.DFS());
