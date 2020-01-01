/*
URL: https://www.codewars.com/kata/tribonacci-sequence/train/javascript

Instructions:
As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
*/

/*
Notes:
Fibonnaci (2) implementation:
function fibonacci(arr, c) {
  console.log(arr, c);

  if (c <= 0) {
    return arr;
  }
  let length = arr.length;
  let a = arr[length - 2];
  let b = arr[length - 1];

  arr.push(a + b);
  c -= 1;
  return fibonacci(arr, c);
}

*/

/*
Top Result:
// Comments point out issues with altering the array parameter instead of returning/operating on an new one.
function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
*/

function tribonacci(signature, n) {
  // console.log(JSON.stringify(signature), n);
  let length = signature.length;

  if (n <= 0) {
    return [];
  } else if (n < length) {
    return signature.slice(0, n);
  } else if (length === n) {
    return signature;
  }

  let a = signature[length - 3];
  let b = signature[length - 2];
  let c = signature[length - 1];

  signature.push(a + b + c);
  return tribonacci(signature, n);
}

module.exports = { tribonacci };
