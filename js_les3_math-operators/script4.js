'use strict';

let numberA;

numberA = Number(prompt('введіть число') % 10);
if (numberA % 2 === 0) {
   console.log('Остання цифра є парною');
} else {
   console.log('Остання цифра не є парною')
}
console.log(numberA)

