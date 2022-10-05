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

  pop() {
    if (!this.tail) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }
}

var singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.get(0).val; // 5
singlyLinkedList.get(1).val; // 10
singlyLinkedList.get(2).val; // 15
singlyLinkedList.get(3).val; // 20
singlyLinkedList.get(4); // null
