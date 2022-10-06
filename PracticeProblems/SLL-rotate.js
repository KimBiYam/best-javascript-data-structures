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
    let newNode = new Node(val);
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

  rotate(num) {
    if (num > 0) {
      for (let i = 0; i < num; i++) {
        const newTail = this.head;

        this.head = this.head.next;
        this.tail.next = newTail;
        this.tail = newTail;
        this.tail.next = null;
      }
    } else {
      for (let i = num; i < 0; i++) {
        let current = this.head;
        let newTail = current;

        while (current.next) {
          newTail = current;
          current = current.next;
        }

        const prevHead = this.head;
        this.head = this.tail;
        this.head.next = prevHead;
        this.tail = newTail;
        this.tail.next = null;
      }
    }
  }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;

singlyLinkedList.rotate(3);
singlyLinkedList.head.val; // 20
singlyLinkedList.head.next.val; // 25
singlyLinkedList.head.next.next.val; // 5
singlyLinkedList.head.next.next.next.val; // 10
singlyLinkedList.head.next.next.next.next.val; // 15
singlyLinkedList.tail.val; // 15
singlyLinkedList.tail.next; // null
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;

singlyLinkedList.rotate(-1);
singlyLinkedList.head.val; // 25
singlyLinkedList.head.next.val; // 5
singlyLinkedList.head.next.next.val; // 10
singlyLinkedList.head.next.next.next.val; // 15
singlyLinkedList.head.next.next.next.next.val; // 20
singlyLinkedList.tail.val; // 20
singlyLinkedList.tail.next; // null
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;

singlyLinkedList.rotate(1000);
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 15
singlyLinkedList.head.next.next.next.val; // 20
singlyLinkedList.head.next.next.next.next.val; // 25
singlyLinkedList.tail.val; // 25
singlyLinkedList.tail.next; // null
