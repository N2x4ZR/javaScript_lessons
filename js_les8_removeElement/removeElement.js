'use strict';

function removeElement(array, item) {
   for (let i = array.length; i >= 0; i--) {
      if (array[i] === item) {
         array.splice(i, 1);
      }
   }
}

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
removeElement(array, 5);
console.log(array);

const array2 = [1, `wasd`, 3, 4, 5, `wasd`, 7];
console.log(array2);
removeElement(array2, `wasd`);
console.log(array2);