# HashTable

## Set

### Set 의사 코드
1. key와 value를 받는다
2. key를 해시 처리한다
3. key-value 쌍을 해시 테이블 배열에서 개별 체이닝을 한다

## Get

### Get 의사 코드
1. key를 받는다.
2. key를 해시 처리한다.
3. 해시 테이블 배열에서 개별 체이닝을 해서 값을 찾는다
4. 값이 있다면 해당 값을 반환하고, 없다면 `undefined`를 반환한다.