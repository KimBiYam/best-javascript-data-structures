// function fib(num) {
//   if (num <= 2) return 1;
//   return fib(num - 1) + fib(num - 2);
// }

// memoization을 활용한 피보나치 수열 해결법
// recursion + memoization의 방법은 높은 수를 인자로 받는다면 stack overflow 에러가 발생할 수 있다.
// function fib(num, memo = {}) {
//   if (memo[num]) return memo[num];
//   if (num <= 2) return 1;

//   const result = fib(num - 1, memo) + fib(num - 2, memo);
//   memo[num] = result;
//   return result;
// }

// tabulation을 활용한 피보나치 수열 해결법
// tabulation 해결법에서는 재귀가 아니기 때문에 콜스택에 함수 호출이 쌓이지 않고 배열에 새로운 값만 추가되는 방식이기 때문에
// 높은 수를 인자로 받아도 stack overflow 에러가 발생하지 않는다.
function fib(num) {
  if (num <= 2) return 1;
  const fibNumbers = [0, 1, 1];
  // 구하고자 하는 숫자까지 루프를 돌면서 앞의 두 숫자를 더하여 배열에 저장한다
  for (var i = 3; i <= num; i++) {
    fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
  }

  return fibNumbers[num];
}

console.log(fib(100));
