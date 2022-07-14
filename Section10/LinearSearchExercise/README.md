### 개요
배열과 값을 인자로 받아 배열에서 해당 값을 찾아 인덱스를 반환하는 `linearSearch` 함수를 작성한다. 값이 배열에 없으면 -1을 반환한다.

내장 함수 `indexOf`를 사용하지 않고 구현해야 한다.

```js
linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
linearSearch([100], 100) // 0
linearSearch([1,2,3,4,5], 6) // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
linearSearch([100], 200) // -1
```