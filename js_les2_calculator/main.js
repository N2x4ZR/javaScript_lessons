'use strict';

let a;
let b;
let sum;
let diff;
let mult;
let div;

a = prompt('Enter the number a');
b = prompt('Enter the number b');

sum = Number(a) + Number(b);
diff = Number(a) - Number(b);
mult = Number(a) * Number(b);
div = Number(a) / Number(b);

console.log('Calculations є finished!');
console.log('sum: ' + a + ' + ' + b + ' = ' + sum);
console.log('diff: ' + a + ' - ' + b + ' = ' + diff);
console.log('mult: ' + a + ' * ' + b + ' = ' + mult);
console.log('div: ' + a + ' / ' + b + ' = ' + div);

alert('Calculations є finished!\n' +
'sum: ' + a + ' + ' + b + ' = ' + sum + '\n' +
'diff: ' + a + ' - ' + b + ' = ' + diff + '\n' +
'mult: ' + a + ' * ' + b + ' = ' + mult + '\n' +
'div: ' + a + ' / ' + b + ' = ' + div + '\n');