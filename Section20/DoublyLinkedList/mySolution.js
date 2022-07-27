class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

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

  pop() {
    if (!this.head) return null;

    const tailToRemove = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tailToRemove.prev;
      this.tail.next = null;
      tailToRemove.prev = null;
    }

    this.length--;
    return tailToRemove;
  }

  shift() {
    if (!this.head) return undefined;

    const headToRemove = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = headToRemove.next;
      this.head.prev = null;
      headToRemove.next = null;
    }

    this.length--;
    return headToRemove;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count;
    let foundNode;

    if (index <= this.length / 2) {
      count = 0;
      foundNode = this.head;

      while (count !== index) {
        count++;
        foundNode = foundNode.next;
      }
    } else {
      count = this.length - 1;
      foundNode = this.tail;

      while (count !== index) {
        count--;
        foundNode = foundNode.prev;
      }
    }

    return foundNode;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return Boolean(this.unshift(val));
    if (index === this.length) return Boolean(this.push(val));

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    nextNode.prev = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const nodeToRemove = this.get(index);
    const prevNode = nodeToRemove.prev;
    const nextNode = nodeToRemove.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    nodeToRemove.prev = null;
    nodeToRemove.next = null;

    this.length--;
    return nodeToRemove;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log(list.remove(3));
console.log(list.get(2));
console.log(list.get(3));
