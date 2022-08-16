// 배열의 기본 메소드인 push와 shift를 이용하면 큐처럼 사용이 가능하다.
const queue = [];
queue.push("first");
queue.push("second");
queue.push("third");
queue.shift();
queue.shift();
queue.shift();

// 혹은 배열의 기본 메소드인 unshift와 pop을 이용하여도 가능하다.
queue.unshift("first");
queue.unshift("second");
queue.unshift("third");
queue.pop();
queue.pop();
queue.pop();
