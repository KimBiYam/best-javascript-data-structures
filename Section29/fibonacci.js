// function fib(num) {
//   if (num <= 2) return 1;
//   return fib(num - 1) + fib(num - 2);
// }

// memoization을 활용한 피보나치 수열 해결법
// function fib(num, memo = {}) {
//   if (memo[num]) return memo[num];
//   if (num <= 2) return 1;

//   const result = fib(num - 1, memo) + fib(num - 2, memo);
//   memo[num] = result;
//   return result;
// }

// tabulation을 활용한 피보나치 수열 해결법
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
