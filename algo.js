let hash = new Map();

function findSum(A, B, n) {

  for (let i = 0; i < n; i++) {
    console.log(A[i])
    if (hash.has(A[i])) {
      hash.set(A[i], 1 + hash.get(A[i]));
    }
    else
      hash.set(A[i], 1);

    if (hash.has(B[i]))
      hash.set(B[i], 1 + hash.get(B[i]));
    else
      hash.set(B[i], 1);
  }

  let sum = 0;
  //we will get tables containes of 2 index the number and the number of his iteration
  for (let entry of hash) {
    // need to acces to the iteration numbers of each number
    if (parseInt((entry[1]).toString()) == 1)
      sum += parseInt((entry[0]).toString());
  }


  return sum;

}


let A = [5, 4, 7, 8];
let B = [2, 8, 7, 1, 9];

let n = A.length;

// function call
document.write(findSum(A, B, n));

console.log(hash)
