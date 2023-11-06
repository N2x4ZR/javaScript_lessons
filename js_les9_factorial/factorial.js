'use strict';

function factorial(n) {
   if (n === 0 || n === 1) {
      return 1;
   } else {
      return n * factorial(n - 1);
   }
}

const a = factorial(2);
const b = factorial(3);
const c = factorial(4);
const d = factorial(5);
console.log(a);
console.log(b);
console.log(c);
console.log(d);