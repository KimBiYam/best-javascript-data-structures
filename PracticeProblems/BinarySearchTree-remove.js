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

  remove(value) {
    const findMin = (node) => {
      let min = node.value;
      while (node.left !== null) {
        min = node.left.value;
        node = node.left;
      }

      return min;
    };

    const removeRecursive = (node, value) => {
      // 삭제할 노드를 못찾은 경우 null을 리턴
      if (node === null) return node;
      // 삭제할 값이 현재보다 작은 경우 왼쪽 노드를 순회하기 위해 재귀 호출
      if (value < node.value) {
        node.left = removeRecursive(node.left, value);
        // 삭제할 값이 현재보다 큰 경우 오른쪽 노드를 순회하기 위해 재귀 호출
      } else if (value > node.value) {
        node.right = removeRecursive(node.right, value);
        // 삭제할 노드를 찾은 경우
      } else {
        // leaf node인 경우 null을 리턴한다
        if (node.left === null && node.right === null) return null;
        // 오른쪽 자식 노드만 있는 경우 오른쪽 노드를 리턴
        else if (node.left === null) return node.right;
        // 왼쪽 자식 노드만 있는 경우 왼쪽 노드를 리턴
        else if (node.right === null) return node.left;

        // 만약 자식 노드가 둘 다 있는 경우 현재 노드의 오른쪽 자식들에서 가장 큰 값을 찾아서 삭제할 노드의 대체 노드로 사용한다
        node.value = findMin(node.right);
        node.right = removeRecursive(node.right, node.value);
      }

      return node;
    };

    this.root = removeRecursive(this.root, value);
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
binarySearchTree.remove(50);
binarySearchTree.root.right.value; // 20
binarySearchTree.root.right.right; // null

binarySearchTree.remove(5);
binarySearchTree.root.left.left.value; // 1
binarySearchTree.root.left.left.right; // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

binarySearchTree.remove(1);
binarySearchTree.root.left.left.value; // 5
binarySearchTree.root.left.left.left; // null
binarySearchTree.root.left.left.right; // null

binarySearchTree.remove(20);
binarySearchTree.root.right.value; // 50
binarySearchTree.root.right.right; // null
binarySearchTree.root.right.left; // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50)
  .insert(60)
  .insert(30)
  .insert(25)
  .insert(23)
  .insert(24)
  .insert(70);

binarySearchTree.remove(10);
binarySearchTree.root.left.value; // 12
binarySearchTree.root.left.left.value; // 1
binarySearchTree.root.left.left.right.value; // 5

binarySearchTree.remove(50);
binarySearchTree.root.right.value; // 20
binarySearchTree.root.right.right.value; // 60
binarySearchTree.root.right.right.left.value; // 30

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(22)
  .insert(49)
  .insert(85)
  .insert(66)
  .insert(95)
  .insert(90)
  .insert(100)
  .insert(88)
  .insert(93)
  .insert(89);

binarySearchTree.remove(85);
binarySearchTree.root.right.right.value; // 88
binarySearchTree.root.right.right.right.left.left.value; // 89
