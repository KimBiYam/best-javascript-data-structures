### 개요
숫자 배열과 숫자 하나를 인자로 받는 `maxSubarraySum` 함수를 작성한다. 배열에서 두 번째 인자로 받은 숫자의 갯수만큼 연속되는 숫자의 합산 중 제일 큰 값을 리턴한다.

```js
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
```


### 목표
- 시간 복잡도 : O(N)
- 공간 복잡도 : O(1)