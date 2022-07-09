### 개요
`findLongestSubstring` 함수를 작성한다. 해당 함수는 string 하나를 인자로 받아서, 중복되지 않고 연속되는 문자의 길이 중 가장 큰 값을 리턴한다.

```js
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
```

### 목표
- 시간 복잡도 : O(n)