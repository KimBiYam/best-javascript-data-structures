## 코드 스타터

이중 연결 리스트는 단순히 요소(노드)들의 집합이다.
이를 위해서 연결 리스트 내부에서 사용할 `Node` 클래스와 `DoublyLinkedList` 클래스를 생성한다.

## Pushing

`push()` 메소드는 이중 연결 리스트의 가장 마지막에 새로운 요소를 추가한다.

### Push 의사 코드

- value를 인자로 받아서 새로운 노드를 생성한다.
- `head`가 null(혹은 길이가 0)이라면, `head`와 `tail` 모두 새로운 노드로 지정한다.
- 그렇지 않다면 현재 `tail`을 찾아서 `tail`의 `next`를 새로운 노드로 지정한다.
- 그리고 새로운 노드의 `prev`를 기존의 `tail`로 지정한다.
- `tail`을 새로운 노드로 바꿔준다.
- 길이를 1 증가시킨다.
- 리스트를 반환한다.

## Popping

`pop()` 메소드는 이중 연결 리스트에서 마지막 요소를 제거한다.

### Pop 의사 코드

- 리스트가 비어있다면(길이가 0이거나, `head` 혹은 `tail`이 `null`인 경우) `undefined`를 반환한다.
- 현재 `tail`을 이후에 반환하기 위헤 변수에 저장한다.
- 만약 길이가 1이라면 `head`와 `tail` 모두 `null`로 지정한다.
- `tail`을 기존의 `tail 이전 노드`로 지정한다.
- 새로운 `tail의 next`를 `null`로 지정한다.
- 삭제할 노드의 `prev`를 `null`로 지정한다. (반환되는 노드를 이용해서 리스트에 접근이 가능하기 때문)
- 길이를 1 감소시킨다.
- 제거한 요소를 반환한다.

## Shifting

`shift()` 메소드는 이중 연결 리스트의 가장 앞의 요소를 제거한다.

### Shift 의사 코드

- 길이가 0이라면 `undefined`를 반환한다.
- 그렇지 않다면 기존의 `head`를 변수에 저장한다.
- 만약 길이가 1이라면
    - head를 null로 지정한다.
    - tail을 null로 지정한다.
- 그렇지 않다면 `head`를 `기존 head의 next`로 지정한다.
- 그 후 새로운 `head`의 `prev`를 `null`로 지정한다.
- `기존 head의 next`를 `null`로 지정한다.
- 길이를 1 감소시킨다.
- 삭제한 head를 반환한다.

## Unshifting

`unshift()`메소드는 이중 연결 리스트의 시작 부분에 노드를 추가한다.

### Unshift 의사 코드

- 만약 길이가 0이라면
    - `head`를 새로운 노드로 지정한다.
    - `tail`을 새로운 노드로 지정한다.
- 비어있지 않다면
    - `head의 prev`를 새로운 노드가 되도록 지정한다.
    - `새로운 노드의 next`를 `기존의 head`로 지정한다.
    - `head`를 새로운 노드로 변경한다.
- 길이를 1 증가시킨다.
- 리스트를 반환한다.

## Get

`get()` 메소드는 이중 연결 리스트의 특정 위치에 있는 요소에 접근한다.

단일 연결 리스트에서는 `prev` 값이 없기 때문에 `head`에서부터 리스트를 전부 순회해야 하는데, 이중 연결 리스트에서는 `tail`에서부터 앞으로 순회하는 것도 가능하다. 따라서 인자로 받아온 인덱스 값이 0에 가까운지, 아니면 가장 끝의 요소에 가까운지에 따라서 작동 방식을 다르게 구현한다.

### Get 의사 코드

- 인덱스가 음수이거나 길이와 같거나 크다면 `null`을 반환한다.
- 만약 인덱스가 리스트 길이의 절반보다 작거나 같다면
    - `head`에서 부터 리스트를 순회한다.
    - 찾은 노드를 반환한다.
- 만약 인덱스가 리스트 길이의 절반보다 크다면
    - `tail`에서 부터 리스트를 순회한다.
    - 찾은 노드를 반환한다.

## Set

`set()` 메소드는 인덱스와 값을 인자로 받아서 해당 인덱스에 해당하는 요소의 값을 변경한다.

### Set 의사 코드

- 함수에 입력된 인덱스 값으로 `get` 메소드를 호출해 결과값을 변수에 담는다.
    - `get`이 유효한 노드를 반환한다면 해당 노드의 값을 인자로 받아온 값으로 변경한다.
    - `true`를 반환한다.
- `get`이 유효하지 않은 노드를 반환하면 `false`를 반환한다.

## Insert

`insert()` 메소드는 인덱스와 값을 받아 이중 연결 리스트에 새로운 노드를 추가한다.

### Insert 의사 코드

- 인덱스가 음수거나 리스트의 길이보다 크면 `false`를 반환한다.
- 인덱스가 0이면 `unshift`를 호출한다.
- 인덱스가 리스트의 길이와 같으면 `push`를 호출한다.
- 엣지 케이스에 해당되지 않는다면 `get` 메소드를 `index - 1`값으로 호출하여 이전 노드를 찾는다.
- 그리고 이전 노드, 생성한 노드, 기존의 next 노드의 `prev, next`를 연결해준다
- 길이를 1 증가시킨다.
- `true`를 반환한다.

## Remove

`remove()` 메소드는 인덱스 값을 받아서 해당 위치의 요소를 제거한다.

### Remove 의사 코드

- 인덱스가 0보다 작거나 길이보다 크거나 같으면 `undefined`를 반환한다.
- 인덱스가 0이면 `shift`를 호출한다.
- 인덱스가 `길이 - 1`과 같으면 `pop`을 호출한다.
- 엣지 케이스에 해당되지 않는다면 `get` 메소드를 통해 삭제할 노드를 찾는다.
- 삭제할 노드의 이전 노드와 다음 노드의 `prev, next`값을 지정해준다.
- 삭제할 노드의 `prev, next`를 null로 지정한다.
- 길이를 1 감소시킨다.
- 삭제한 노드를 반환한다.