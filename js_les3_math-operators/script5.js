'use strict';

let number;
let firstNum
let lastNum

number = Number(prompt('Введіть двозначне число'));
lastNum = number % 10;
firstNum = parseInt(number / 10);

if (lastNum > firstNum) {
   console.log(`${lastNum} більше за ${firstNum}`);
} else if (lastNum < firstNum) {
   console.log(`${firstNum} більше за ${lastNum}`);
} else {
   console.log(`${lastNum} та ${firstNum} рівні `)
}





