### 개요
배열과 콜백 함수를 인자로 받는 `someRecursive` 재귀 함수를 작성한다. 해당 함수는 배열에서 하나의 값이라도 콜백 함수의 조건문을 통과하면 true를 리턴한다.

```js
// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], isOdd) // false
someRecursive([4,6,8], val => val > 10); // false
```
