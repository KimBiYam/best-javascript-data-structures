`averagePair` 함수를 작성한다. 해당 함수는 인자로 정렬된 숫자 배열과 목표 평균값을 받는다. 해당 배열에서 목표 평균값에 해당하는 쌍이 존재 여부를 리턴한다.

### 목표
- 시간 복잡도 : O(n)
- 공간 복잡도 : O(1)

```js
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6],4.1) // false
averagePair([],4) // false
```