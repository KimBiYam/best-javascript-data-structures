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

  DFSPreOrder() {
    const visited = [];

    const traversal = (node) => {
      visited.push(node.value);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    };

    traversal(this.root);

    return visited;
  }
  DFSInOrder() {
    const visited = [];

    const traversal = (node) => {
      if (node.left) traversal(node.left);
      visited.push(node.value);
      if (node.right) traversal(node.right);
    };

    traversal(this.root);

    return visited;
  }
  DFSPostOrder() {
    const visited = [];

    const traversal = (node) => {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      visited.push(node.value);
    };

    traversal(this.root);

    return visited;
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

binarySearchTree.DFSPreOrder(); // [15, 10, 1, 5, 12, 20, 50]
binarySearchTree.DFSInOrder(); // [1, 5, 10, 12, 15, 20, 50]
binarySearchTree.DFSPostOrder(); // [5, 1, 12, 10, 50, 20, 15]
