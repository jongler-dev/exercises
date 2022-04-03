/*
A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N,
splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
*/

// time complexity is O(N),
// as were are running over the given array twice, but linearly.
function solution(A) {
  const N = A.length;

  // creates two auxiliary arrays:
  // one for sums of first N-1 elements, i.e. [sum(0), sum(0,1), ..., sum(0,1,..,N-2)]
  // and another for sums of last N-1 elements, i.e. [sum(N-1), sum(N-1,N-2), ..., sum(N-1,N-2,...,1)]
  const sumFirstItems = [A[0]];
  const sumLastItems = [A[N - 1]];
  for (let p = 1; p < N - 1; p++) {
    sumFirstItems.push(sumFirstItems[p - 1] + A[p]);
    sumLastItems.push(sumLastItems[p - 1] + A[N - p - 1]);
  }

  // look for the min value
  const NN = sumFirstItems.length;
  let min = Math.abs(sumFirstItems[0] - sumLastItems[NN - 1]);
  for (let p = 1; p < N - 1; p++) {
    const currentVal = Math.abs(sumFirstItems[p] - sumLastItems[NN - p - 1]);
    if (currentVal < min) {
      min = currentVal;
    }
  }
  return min;
}

console.log(solution([3, 1, 2, 4, 3])); // 1
