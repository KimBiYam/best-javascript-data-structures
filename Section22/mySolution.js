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
        if (!current.left) return null;
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
        if (!current.left) return false;
        if (current.left.value === value) return true;
        current = current.left;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree.find(10));
console.log(tree.find(2));
console.log(tree.find(100));
console.log(tree.contains(2));
console.log(tree.find(100));
