`countUniqueValues` 함수를 구현한다. 해당 함수는 오름차순으로 정렬된 숫자 배열을 인자로 받는다.
해당 배열에서 고유한 값(중복을 무시하고 있는 값의 종류들)의 개수를 반환한다.

```jsx
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
```