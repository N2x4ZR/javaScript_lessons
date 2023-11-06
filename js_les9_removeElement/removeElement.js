'use strict';

function removeElement(arr, item) {
   const copyArr = arr.slice();
   for (let i = copyArr.length - 1; i >= 0; i--) {
      if (Array.isArray(arr[i]) && Array.isArray(item)) {
         if (item.join() === arr[i].join()) {
            copyArr.splice(i, 1);
         }
      }
      if (copyArr[i] === item) {
         copyArr.splice(i, 1);
      }
   }
   return copyArr;
}

const arr = [1, [1, 4, 3], 5, 3, [1, 2, 3], 5, 6, `wasd`, [1, 2, 3], 43, `wasd`]

const copyArr = removeElement(arr, [1, 2, 3]);
console.log(copyArr);

const copyArr1 = removeElement(arr, 5);
console.log(copyArr1);

const copyArr2 = removeElement(arr, `wasd`);
console.log(copyArr2);

console.log(arr);
