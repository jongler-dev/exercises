/*
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, 
returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, 
your function should return 3, 
because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
*/

// My implementation(s).
// time complexity = ???
function solution(A, B, K) {
  const offset = A % K === 0 ? 1 : 0;
  return parseInt(B / K) - parseInt(A / K) + offset;
}

// Test cases
console.log(solution(6, 11, 2)); // 3
console.log(solution(11, 345, 17)); // 20
console.log(solution(0, 0, 11)); // 1
console.log(solution(10, 10, 5)); // 1
console.log(solution(10, 10, 7)); // 0
console.log(solution(10, 10, 20)); // 0
console.log(solution(1, 1, 11)); // 0
