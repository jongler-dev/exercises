/*
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
*/

// time complexity = O(N)
function solution(A) {
  const numItems = A.length;
  const mySet = new Set(A); // removed multiple occurences

  // this is also tested in the next for statement,
  // I added this explicitly for better performance
  if (mySet.size !== numItems) {
    return 0;
  }

  for (let i = 1; i <= mySet.size; i++) {
    if (!mySet.has(i)) {
      return 0; // missing value in permutation
    }
  }

  return 1;
}

console.log(solution([4, 1, 3, 2])); // 1
console.log(solution([2, 1])); // 1
console.log(solution([1, 2])); // 1
console.log(solution([5, 1, 3, 2])); // 0
console.log(solution([1, 1, 3, 2])); // 0
console.log(solution([1, 1, 3])); // 0
console.log(solution([4])); // 0
console.log(solution([4, 1, 3])); // 0
console.log(solution([4, 1])); // 0
