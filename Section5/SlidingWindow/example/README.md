`maxSubarraySum` 함수를 작성한다. 해당 함수는 숫자 배열과 숫자 하나를 전달받는다. 배열 안에서 연속되는 값의 합계를 찾는데, 두 번째 인자로 받아온 숫자의 수만큼 연속되는 값 중 가장 높게 나올 수 있는 값을 리턴한다.

```jsx
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
```