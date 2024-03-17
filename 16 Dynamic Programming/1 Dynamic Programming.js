// value above 40 takes much longer time than memoized
// o(2^n)
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// memoized
// O(n)
// will be limited by call stack due to recursion
function fibM(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let result = fibM(n - 1, memo) + fibM(n - 2, memo);
  memo[n] = result;
  return result;
}

// Tabulated
// O(n)
function fibT(n) {
  if (n <= 2) return 1;
  let fibNum = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNum[i] = fibNum[i - 1] + fibNum[i - 2];
  }
  return fibNum[n];
}

console.log(fib(10));
console.log(fibM(100));
console.log(fibT(100));
