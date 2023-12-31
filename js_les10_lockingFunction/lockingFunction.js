'use strict';

function sumFunction() {
   let sum = 0;
   return function(number) {
      sum += number;
      return sum; 
   }
}

const sum = sumFunction();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
