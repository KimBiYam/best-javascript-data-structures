`areThereDuplicates` 함수를 구현한다. 해당 함수는 전달된 인수에서 중복된 값이 있는지 여부를 반환한다. `FrequencyCounter` 혹은 `MultiplePointers` 패턴으로 해결할 수 있다.

해당 함수는 `O(n)`의 시간 복잡도와 `O(n)`의 공간 복잡도를 가지거나,
`O(n log n)`의 시간복잡도와 `O(1)`의 공간 복잡도를 가질 수 있다.

```jsx
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
```