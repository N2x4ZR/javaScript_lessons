'use strict';

let number;
let firstNum;
let centralNum;
let lastNum;

number = Number(prompt(`Введіть тризначне число`));

firstNum = parseInt(number / 100);
centralNum = parseInt(number / 10) % 10;
lastNum = number % 10;

if (firstNum === centralNum && centralNum === lastNum) {
   console.log(`1. всі цифри числа ${number} є однаковими ✅`)
} else {
   console.log(`1. всі цифри числа ${number} не є однаковими ❌`)
}

if (firstNum === centralNum || centralNum === lastNum || firstNum === lastNum) {
   console.log(`1. ${number} є однакові цифри ✅`)
} else {
   console.log(`1. ${number} нема однакових цифр ❌`)
}