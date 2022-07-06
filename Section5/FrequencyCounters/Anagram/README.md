문자열 두 개를 입력받아서 같은 문자가 있는지를 확인하고 각 문자 별로 동일한 갯수를 가지는지 비교하는 문제이다.

```jsx
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwiasttime', 'timetwisttext') // true
```