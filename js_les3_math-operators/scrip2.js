'use strict';

let numberA;
let numberB;

numberA = Number(prompt('введіть відстань у кілометрах ', 0) * 1000);
numberB = Number(prompt('введіть відстань у футах', 0) * 0.305);

if (numberA > numberB) {
   console.log(`${numberA + ' м.'} більше за ${numberB + ' м.'}`);
} else if (numberA < numberB) {
   console.log(`${numberB + ' м.'} більше за ${numberA + ' м.'}`);
} else {
   console.log(`${numberB + ' м.'} та ${numberA + ' м.'} рівні `)
}
