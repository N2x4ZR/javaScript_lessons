'use strict';

let numberA;
let numberB;

numberA = Number(prompt('введіть число A'));
numberB = Number(prompt('введіть число B'));

if (numberA % numberB === 0) {
   console.log(`Число ${numberB} є дільником числа ${numberA}`)
} else {
   console.log(`Число ${numberB} не є дільником числа ${numberA}`)
}

if (numberB % numberA === 0) {
   console.log(`Число ${numberA} є дільником числа ${numberB}`)
} else {
   console.log(`Число ${numberA} не є дільником числа ${numberB}`)
}