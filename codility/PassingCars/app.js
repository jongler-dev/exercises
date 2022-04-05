/*
A non-empty array A consisting of N integers is given.
The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars.
We say that a pair of cars (P, Q), where 0 ≤ P < Q < N,
is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.
*/

// naive approach, for every car heading East, look for all other cars heading West,
// runtime O(N^2), total score 50%
function solutionA(A) {
  const passingCars = [];
  for (let i = 0; i < A.length; i++) {
    // going east
    if (A[i] === 0) {
      for (let j = i + 1; j < A.length; j++) {
        // going west
        if (A[j] === 1) {
          passingCars.push(`(${i},${j})`);
        }
      }
    }
  }
  console.dir(passingCars);
  return passingCars.length > 1000000000 ? -1 : passingCars.length;
}

// slightly better than the naive approach:
// divide the array to two arrays, one for cars going east and the other for cars going west.
// this takes O(N) and is performed once.
// Then, iterate over the two new arrays instead of the big, original array
// runtime is still O(N^2), but slightly faster, total score 70%
function solutionB(A) {
  const easters = [];
  const westers = [];
  let numPairs = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) easters.push(i);
    else westers.push(i);
  }
  for (let e = 0; e < easters.length; e++) {
    for (let w = 0; w < westers.length; w++) {
      if (westers[w] > easters[e]) {
        if (numPairs > 1000000000) return -1;
        else numPairs++;
      }
    }
  }
  return numPairs;
}

// optimal, O(N), score 100%
// every car going west creates a pair with all previous cars going east
function solutionC(A) {
  let prevCarsGoingEast = 0;
  let numPairs = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) prevCarsGoingEast++;
    else numPairs += prevCarsGoingEast;

    if (numPairs > 1000000000) return -1;
  }

  return numPairs;
}

// Test cases
const solution = solutionC;
console.log(solution([0, 1, 0, 1, 1])); // 5
console.log(solution([0])); // 0
console.log(solution([1])); // 0
console.log(solution([0, 1])); // 1
console.log(solution([1, 0])); // 0
