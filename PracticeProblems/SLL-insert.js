class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.next = null;
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

  unshift(val) {
    var newNode = new Node(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
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

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return Boolean(this.push(val));
    if (index === 0) return Boolean(this.unshift(val));

    const prevNode = this.get(index - 1);
    if (!prevNode) return false;

    const newNode = new Node(val);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }
}
