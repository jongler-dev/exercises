/*
This is a demo task.

Write a function:

  function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0)
that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

// runtime: O(N), unless inserting to hash takes more than O(1)
function solution(A) {
  const hash = {};
  for (let index = 0; index < A.length; index++) {
    hash[A[index]] = 1; // non undefined value
  }
  for (let index = 1; index < 100002; index++) {
    if (!hash[index]) {
      return index;
    }
  }
  return 1;
}

// test cases
console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([2])); // 1
console.log(solution([1])); // 2
console.log(solution([0])); // 1
console.log(solution([-1, -3])); // 1
console.log(solution([1, 3, 6, 4, 100000, 5, 2])); // 7
