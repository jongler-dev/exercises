/*
An array A consisting of N different integers is given.
The array contains integers in the range [1..(N + 1)], 
which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
*/

function solution(A) {
  if (A.length === 0) return 1;

  // creates [0,1,2,...,N], in the first example: [0,1,2,3,4]
  const sorted = [...Array(A.length + 1).keys()];

  // creates [null,null,null,3,null]
  A.forEach((element) => {
    sorted[element - 1] = null;
  });

  // finds the '3'
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== null) return i + 1;
  }
}

console.log(solution([2, 3, 1, 5])); // N = 4, missing value is 4
console.log(solution([])); // N = 0, missing value is ???
console.log(solution([2])); // N = 1, missing value is 1
