function solutionC(A) {
  const hash = {};
  for (let index = 0; index < A.length; index++) {
    hash[A[index]] = 1; // non undefined value
  }
  for (let index = 1; index < 100002; index++) {
    if (!hash[index]) return index;
  }
  return 1;
}

const input1 = [1, 3, 6, 4, 1, 2]; // 5
const input2 = [1, 2, 3]; // 4
const input3 = [-1, -3]; // 1
const input4 = [1, 3, 6, 4, 100000, 5, 2]; // 7

console.log('solution C');
console.log(solutionC(input1));
console.log(solutionC(input2));
console.log(solutionC(input3));
console.log(solutionC(input4));
