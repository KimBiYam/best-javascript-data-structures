## Stack
스택은 LIFO(Last in first out)의 형태를 가진 자료 구조이다.
스택 자체는 해당 형태로 구현만 하면 되기 때문에(어떤 식으로 구현할지 결정 되어있는 건 아님) 배열 혹은 링크드 리스트로 구현 할 수 있다.

## 링크드 리스트로 Stack 구현

### Push 의사 코드

해당 메소드는 LinkedList의 push 메소드와 이름은 같지만 `O(1)`의 시간 복잡도를 가지기 위해 맨 뒤에서 추가를 하는 대신에 맨 앞에서 추가를 한다.
DoublyLinkedLIst로 구현한다면 기존의 push, pod 메소드의 로직을 그대로 사용해도 된다.

- 스택에 노드가 하나도 없을 경우에는 새로운 노드가 first이자 last가 되도록 할당한다.
- 노드가 하나라도 있을 경우에는 현재 first를 저장하는 변수를 만들고 first가 새로운 노드가 되도록 할당한다.
- 새로운 노드의 next를 기존의 first로 할당한다.
- 사이즈를 1 증가시킨다.

### Pop 의사 코드

해당 메소드도 마찬가지로 `O(1)`의 시간 복잡도를 가지기 위해 맨 앞에서 삭제를 한다.

- 스택에 노드가 없다면 `null`을 반환한다.
- 그렇지 않다면 first를 저장하는 변수를 만든다.
- 만약 노드가 하나 밖에 없으면 first와 last에 null을 할당한다.
- 노드가 하나이상이면 first를 기존 first의 next로 할당한다.
- 사이즈를 1 감소시킨다.
- 제거된 노드를 반환한다.