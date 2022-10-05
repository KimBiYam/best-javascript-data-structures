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
    // YOUR CODE GOES HERE
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

var singlyLinkedList = new SinglyLinkedList();

console.log(singlyLinkedList.push(5)); // singlyLinkedList
console.log(singlyLinkedList.length); // 1
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 5

console.log(singlyLinkedList.push(10)); // singlyLinkedList
console.log(singlyLinkedList.length); // 2
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.tail.val); // 10

console.log(singlyLinkedList.push(15)); // singlyLinkedList
console.log(singlyLinkedList.length); // 3
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.head.next.next.val); // 15
console.log(singlyLinkedList.tail.val); // 15
