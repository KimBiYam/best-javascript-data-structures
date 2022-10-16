class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.last === null) {
      this.last = newNode;
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;
    return this.size;
  }
}

var stack = new Stack();

stack.push(10); // 1
stack.first.value; // 10
stack.last.value; // 10
stack.push(100);
stack.first.value; // 100
stack.last.value; // 10
stack.push(1000);
stack.first.value; // 1000
stack.last.value; // 10

var stack = new Stack();

stack.push(10); // 1
stack.size; // 1
stack.push(100); // 2
stack.size; // 2
stack.push(1000); // 3
stack.size; // 3
