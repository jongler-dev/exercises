/*
A small frog wants to get to the other side of the road.
The frog is currently located at position X and wants to get to a position greater than or equal to Y.
The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

function solution(X, Y, D);

that, given three integers X, Y and D, 
returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Write an efficient algorithm for the following assumptions:

X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y.
*/

// correct, but not efficient
function solutionA(X, Y, D) {
  let currentPosition = X;
  let jumps = 0;
  while (currentPosition < Y) {
    currentPosition += D;
    jumps++;
  }

  return jumps;
}

// correct AND efficient
function solutionB(X, Y, D) {
  return Math.ceil((Y - X) / D);
}

const solution = solutionB;
console.log(solution(10, 85, 30)); // 3
console.log(solution(10, 15, 30)); // 1
console.log(solution(10, 20, 1)); // 10
console.log(solution(10, 10, 20)); // 0
console.log(solution(10, 200, 5)); // 38
console.log(solution(3, 999111321, 7)); // 142730189
