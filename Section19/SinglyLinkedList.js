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

  push() {}
}

const list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
