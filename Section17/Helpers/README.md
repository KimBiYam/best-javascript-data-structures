## getDigit

수와 위치를 가져온 다음 그 위치의 숫자를 반환한다.

```js
getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 2); // 3
getDigit(12345, 3); // 2
getDigit(12345, 4); // 1
getDigit(12345, 5); // 0
```

## digitCount

하나의 수에 대한 자릿수를 반환한다.

```js
digitCount(1); // 1
digitCount(25); // 2
digitCount(314); // 3
```

## mostDigits

숫자 배열을 받아서 가장 자릿수가 많은 수가 무엇인지 `digitCount`를 통해 알려준다.

```js
mostDigits([1234, 56, 7]) // 4
mostDigits([1, 1, 11111, 1]) // 5
mostDigits([12, 34, 56, 78]) // 2
```