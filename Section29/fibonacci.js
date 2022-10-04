// function fib(num) {
//   if (num <= 2) return 1;
//   return fib(num - 1) + fib(num - 2);
// }

// memoization을 활용한 피보나치 수열 해결법
function fib(num, memo = {}) {
  if (memo[num]) return memo[num];
  if (num <= 2) return 1;

  const result = fib(num - 1, memo) + fib(num - 2, memo);
  memo[num] = result;
  return result;
}

console.log(fib(100));
