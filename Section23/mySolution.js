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
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }
  find(value) {
    if (!this.root) return null;
    let current = this.root;

    while (true) {
      if (current.value === value) return current;
      if (value > current.value) {
        if (!current.right) return null;
        if (current.right.value === value) return current.right;
        current = current.right;
      } else {
        if (!current.right) return null;
        if (current.left.value === value) return current.left;
        current = current.left;
      }
    }
  }
  contains(value) {
    if (!this.root) return false;
    let current = this.root;

    while (true) {
      if (current.value === value) return true;
      if (value > current.value) {
        if (!current.right) return false;
        if (current.right.value === value) return true;
        current = current.right;
      } else {
        if (!current.right) return false;
        if (current.left.value === value) return true;
        current = current.left;
      }
    }
  }
  BFS() {
    let currentNode = this.root;
    const queue = [];
    const visited = [];

    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      visited.push(currentNode);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return visited;
  }
  DFSPreOrder() {
    const visited = [];
    let current = this.root;

    const traversal = (node) => {
      visited.push(node);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    };

    traversal(current);
    return visited;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// tree.BFS().forEach((node) => console.log(node.value));
tree.DFSPreOrder().forEach((node) => console.log(node.value));
