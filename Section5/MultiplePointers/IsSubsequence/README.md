두 개의 문자열을 받아서 첫 번째 문자열의 문자가 두 번째 문자열의 하위 시퀀스를 형성하는지 확인하는 `isSubsequence`라는 함수를 작성한다. 하위 시퀀스란 함수 첫 번째 문자열의 문자가 두 번째 문자열에 어딘가에 순서를 변경하지 않고 존재하는지를 확인하는 것이다.

### 목표
- 시간 복잡도 : O(n + m)
- 공간 복잡도 : O(1)

```js
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
```