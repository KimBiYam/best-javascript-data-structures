class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
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

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  set(index, val) {
    const nodeToSet = this.get(index);
    if (!nodeToSet) return false;

    nodeToSet.val = val;

    return true;
  }
}
