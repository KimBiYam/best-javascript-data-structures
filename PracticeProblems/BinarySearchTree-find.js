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
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (value === this.root.value) return this.root;

    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (currentNode.right && value >= currentNode.right.value) {
        currentNode = currentNode.right;
      } else if (currentNode.left && value <= currentNode.left.value) {
        currentNode = currentNode.left;
      } else {
        return undefined;
      }
    }
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15).insert(20).insert(10).insert(12);
var foundNode = binarySearchTree.find(20);
console.log(foundNode.value); // 20
console.log(foundNode.left); // null
console.log(foundNode.right); // null

var binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(15).insert(20).insert(10).insert(12);
var foundNode = binarySearchTree.find(120);
foundNode; // undefined
