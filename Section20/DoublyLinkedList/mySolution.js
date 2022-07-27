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
    if (!this.head) return undefined;

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

  reverse() {
    let currentNode = this.head;
    let tempNode = null;

    // head에서부터 순회함
    while (currentNode) {
      // tempNode에 이전 노드를 저장
      tempNode = currentNode.prev;
      // currentNode의 이전 노드를 currentNode의 next로 변경
      // currentNode의 다음 노드를 기존의 이전 노드인 tempNode로 변경
      // 이렇게 변경하면 현재 요소와 다음 요소를 서로 교환 하는 것과 같다.
      currentNode.prev = currentNode.next;
      currentNode.next = tempNode;
      // 기존의 다음 노드(위에서 교환을 했으므로 prev가 된다)를 다음 노드로 지정
      currentNode = currentNode.prev;
    }

    // tempNode에 prev 노드를 할당하기 때문에 해당 값이 없으면 빈 리스트거나 값이 1개인 리스트라서
    // tail과 head값을 업데이트 할 필요가 없다.
    if (tempNode) {
      this.tail = this.head;
      this.head = tempNode.prev;
    }

    return this;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);

list.reverse();
