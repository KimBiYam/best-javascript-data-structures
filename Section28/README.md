## 가중치 그래프

지도에서 각 지점 간의 거리를 비교한다고 가정하면 기존의 그래프는 가중치가 없어 어디가 더 가까운지 알 수 없기 때문에 이를 비교하기 위해 간선 간에 가중치 값을 둔 가중치 그래프를 구현한다.

## 다익스트라

다익스트라 알고리즘은 가장 유명하고 널리 사용되는 알고리즘 중에 하나이다.
이 알고리즘이 수행하는 일은 두 정점 사이에 존재하는 최단 경로를 찾는 것이다.

### 다익스트라의 의사코드

- 시작할 vertex와 종료할 vertex를 인자로 받는 함수를 작성한다.
- 시작점에서 각 vertex간의 최단 거리를 저장할 객체를 생성하고`(distances)` 시작 vertex는 0으로, 나머지는 `Infinity`로 초기화한다.
- `distances` 객체를 만든 후 우선순위 큐를 생성한다. 마찬가지로 각 vertex를 우선순위 큐에 저장하고 시작 vertex의 우선순위는 0으로, 나머지는 `Infinity`로 초기화한다.
- `previous` 객체를 생성하고 모든 vertex를 키로 가지고 값은 `null`로 초기화한다.
- 우선순위 큐에 값이 있는한 계속해서 루프를 돈다.
    - 우선순위 큐에서 `dequeue`를 한다.
    - 해당 vertex가 종료 지점의 vertex인지 확인한다 - 맞다면 종료한다.
    - 아니라면 각 인접점들에 대해 루프를 돈다.
        - 시작 점에서 해당 인접점 까지의 거리를 계산한다.
        - 새로운 합계가 현재 `distances` 객체에 저장하고 있는 값보다 작으면
            - `distances` 객체에 새로운 값으로 업데이트해준다.
            - `previous` 객체에 어느 vertex에서 이동했는지 업데이트해준다.
            - 시작 vertex부터의 거리 합계를 가지고 우선순위 큐에 `enqueue`해준다.