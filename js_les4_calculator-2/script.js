'use strict';

let numberA;
let numberB;
let typeAction;

alert(`Welcome to calculator!`);
typeAction = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos`);

if (typeAction === null || !(typeAction === `Add` || typeAction === `Diff` || typeAction === `Mult` || typeAction === `Div` || typeAction === `Sqrt` || typeAction === `Sin` || typeAction === `Cos`)) {
   alert(`Good by, see you later.`);
} else {
   if (typeAction === `Add` || typeAction === `Diff` || typeAction === `Mult` || typeAction === `Div`) {
      numberA = parseFloat(prompt('Enter first number'));
      if (isNaN(numberA)) {
         alert(`This is bad digit, good by`);
      } else {
         numberB = parseFloat(prompt('Enter second number'));
         if (isNaN(numberB)) {
            alert(`This is bad digit, good by`);
         } else {
            if (typeAction === `Add`) alert(`Add of ${numberA} and ${numberB} is ${numberA + numberB}`);
            if (typeAction === `Diff`) alert(`Diff of ${numberA} and ${numberB} is ${numberA - numberB}`);
            if (typeAction === `Mult`) alert(`Mult of ${numberA} and ${numberB} is ${numberA * numberB}`);
            if (typeAction === `Div`) alert(`Div of ${numberA} and ${numberB} is ${numberA / numberB}`);
         }
      }
   } else {
      numberA = parseFloat(prompt('Enter number'));
      if (isNaN(numberA)) {
         alert(`This is bad digit, good by`);
      } else {
         if (typeAction === `Sqrt`) alert(`Sqrt of ${numberA} is ${numberA * numberA}`);
         if (typeAction === `Sin`) alert(`Sin of ${numberA} is ${Math.sin(numberA)}`);
         if (typeAction === `Cos`) alert(`Cos of ${numberA} is ${Math.cos(numberA)}`);
      }
   }  
}