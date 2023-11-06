'use strict';

function removeElement(arr, item) {
   const copyArr = arr.slice();
   for (let i = copyArr.length - 1; i >= 0; i--) {
      if (copyArr[i] === item) {
         copyArr.splice(i, 1);
      }
   }
   return copyArr;
}

const array = [12, 5, 12, 453, 5, 43, 5, `wasd`, 5, 5, 5];
console.log(array);
const readyArray = removeElement(array, 5);
console.log(readyArray);
console.log(array);
