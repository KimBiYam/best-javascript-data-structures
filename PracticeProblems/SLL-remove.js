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
  shift() {
    let nodeToShift = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.next = this.head.next;
      this.head = null;
    }

    this.length--;
    return nodeToShift;
  }

  remove(index) {
    if (index >= this.length) return undefined;
    if (index === 0) return this.shift();

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    const nodeToRemove = prev.next;
    prev.next = nodeToRemove.next;
    this.length--;

    return nodeToRemove;
  }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.remove(2).val; // 15
singlyLinkedList.remove(100); // undefined
singlyLinkedList.length; // 3
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 20
