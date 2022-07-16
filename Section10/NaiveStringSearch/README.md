### 개요
긴 문자열에서 짧은 문자열과 매칭되는 갯수를 찾는 `naiveSearch` 함수를 작성한다. 해당 함수는 문자열 두 개를 인자로 받고, 이중 루프를 이용해서 문자를 비교한다.

```js
naiveSearch("abc bbb ccc", "bbb") // 1
naiveSearch("hello bye by heolo hello bye", "hello") //2
```