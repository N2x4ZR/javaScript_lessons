'use strict';

let numberA;
let numberB;

numberA = Number(prompt('введіть число A'));
numberB = Number(prompt('введіть число B'));

if (numberA > numberB) {
   console.log(`${numberA} більше за ${numberB}`);
} else if (numberA < numberB) {
   console.log(`${numberB} більше за ${numberA}`);
} else {
   console.log(`${numberB} та ${numberA} рівні `)
}
   

