class Stack {
  constructor() {
    this.mainQueue = new Queue();
    this.subQueue = new Queue();
    this.size = 0;
  }
  push(val) {
    this.mainQueue.enqueue(val);
    this.size++;

    return this;
  }
  pop() {
    if (this.size === 0) return null;

    // 메인 큐의 노드가 1개가 남을 때까지 dequeue하여 서브 큐에 집어넣는다
    while (this.mainQueue.size > 1) {
      this.subQueue.enqueue(this.mainQueue.dequeue());
    }

    // 1개 남은 노드가 마지막에 push된 노드이므로 해당 노드가 pop이 될 노드이다
    const popped = this.mainQueue.dequeue();

    // 메인 큐의 마지막 노드(스택에서는 첫 번째로 제거할 노드)가 제거된 후 서브 큐에 집어넣어져 있는 상태이다
    // pop이 될 노드를 찾고나면 기존의 큐를 다시 저장하기 위해 서브 큐와 메인 큐를 교환한다.
    const tempQueue = this.mainQueue;
    this.mainQueue = this.subQueue;
    this.subQueue = tempQueue;
    this.size--;

    return popped;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var s = new Stack();
s.push(10).push(20).push(30);
s.pop(); // 30
s.pop(); // 20
s.pop(); // 10
s.pop(); // null
s.push(30).push(40).push(50);
s.pop(); // 50
s.push(60);
s.pop(); // 60
