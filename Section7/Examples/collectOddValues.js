// 어느 배열에서 모든 홀수값을 모으는 것과 같은 작업을 수행하려고 한다면, 헬퍼 메소드 재귀를 사용하면 간단하게 구현할 수 있다.

function collectOddValues(arr) {
  let result = [];

  // 여기서 helper method 재귀 함수를 이용하는 이유는 재귀 함수 안에서 result=[]; 라고 선언하면
  // 매번 빈 배열로 리셋이 되기 때문에 외부 함수에 선언해두고 값을 모으려고 하기 때문이다.
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
