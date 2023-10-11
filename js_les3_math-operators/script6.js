'use strict';

let number;
let sum;
let mult;
let firstNum;
let centralNum;
let lastNum;
number = Number(prompt(`Введіть тризначне число`));

firstNum = parseInt(number / 100);
centralNum = parseInt(number / 10) % 10;
lastNum = number % 10;

sum = firstNum + centralNum + lastNum;
mult = firstNum * centralNum * lastNum;

if (sum % 2 === 0) {
   console.log(`1. сума ${sum} є парною ✅`)
} else {
   console.log(`1. сума ${sum} не є парною ❌`)
}

if (sum % 5 === 0) {
   console.log(`2. сума ${sum} кратна п'яти ✅`)
} else {
   console.log(`2. сума ${sum} не кратна п'яти ❌`)
}

if (mult > 100) {
   console.log(`3. добуток ${mult} більше 100 ✅`)
} else {
   console.log(`3. добуток ${mult} не більше 100 ❌`)
}
