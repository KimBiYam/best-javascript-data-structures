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

  pop() {
    if (this.size === 0) return null;

    const nodeToPop = this.first;

    if (this.size === 1) {
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;
    return nodeToPop.value;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);

console.log(stack.pop());
console.log(stack);
