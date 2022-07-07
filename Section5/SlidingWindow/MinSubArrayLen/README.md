### 개요
양수 배열 하나와 양수 하나를 인자로 받는 `minSubArrayLen` 함수를 작성한다. 이 함수는 배열에서 두 번째 인자의 숫자 값과 같거나 큰 연속 배열의 최소 길이를 리턴한다.

```js
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
```

### 목표
- 시간 복잡도 : O(N)
- 공간 복잡도 : O(1)
