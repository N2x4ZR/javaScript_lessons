'use strict';

let numberA;
let numberB;
let typeAction;

alert(`Welcome to calculator!`);
typeAction = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos`);

switch (typeAction) {
   case null: {
      alert(`Good by, see you later.`);
      break;
   }
   case `Add`:
   case `Diff`:
   case `Mult`:
   case `Div`: {
      numberA = parseFloat(prompt(`Enter first number`));
      switch(isNaN(numberA)) {
         case true: {
            alert(`This is bad digit, good by`);
            break;
         }
         default: {
            numberB = parseFloat(prompt(`Enter second number`));
            switch(isNaN(numberB)) {
               case true: {
                  alert(`This is bad digit, good by`);
                  break;
               }
               default: {
                  alert(
                     typeAction === `Add`
                     ? `Add of ${numberA} and ${numberB} is ${numberA + numberB}`
                     : typeAction === `Diff`
                     ? `Diff of ${numberA} and ${numberB} is ${numberA - numberB}`
                     : typeAction === `Mult`
                     ? `Mult of ${numberA} and ${numberB} is ${numberA * numberB}`
                     : typeAction === `Div`
                     ? `Div of ${numberA} and ${numberB} is ${numberA / numberB}`
                     : `This is bad digit, good by`
                  ); 
                  alert(`Good by, see you later.`);
                  break;
               }
            }
            break;
         }
      }
      break;
   }
   case `Sqrt`:
   case `Sin`:
   case `Cos`: {
      numberA = parseFloat(prompt(`Enter number`))
      switch(isNaN(numberA)) {
         case true: {
            alert(`This is bad digit, good by`);
            break;
         }
         default: {
            alert(
               typeAction === `Sqrt`
               ? `Sqrt of √${numberA} is ${Math.sqrt(numberA)}`
               : typeAction === `Sin`
               ? `Sin of ${numberA} is ${Math.sin(numberA)}`
               : typeAction === `Cos`
               ? `Cos of ${numberA} is ${Math.cos(numberA)}`
               : `This is bad digit, good by`
            );
            alert(`Good by, see you later.`);
            break;
         }
      }
      break;
   }
   default: {
      alert(`Good by, see you later.`);
      break;
   }
}

