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
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const tempNode = this.first;
      this.first = newNode;
      this.first.next = tempNode;
    }

    return ++this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);

console.log(stack.first);
