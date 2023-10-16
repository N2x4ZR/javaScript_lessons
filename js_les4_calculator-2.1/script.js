
'use strict';

let numberA;
let numberB;
let typeAction;

alert(`Welcome to calculator!`);
typeAction = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos`);

switch (typeAction) {
   // ! проверка на нажатие отмены.
   case null: {
      alert(`Good by, see you later.`);
      break;
   }
   // todo проверка на правильное написание действия.
   case `Add`:
   case `Diff`:
   case `Mult`:
   case `Div`: {
      // ? проверка на валидность числа A
      numberA = parseFloat(prompt('Enter first number')) 
      switch (isNaN(numberA)) {
         case true: {
            alert(`This is bad digit, good by`);
            break
         }
         default: {
            // ? проверка на валидность числа B
            numberB = parseFloat(prompt('Enter second number')) 
            switch (isNaN(numberB)) {
               case true: {
                  alert(`This is bad digit, good by`);
                  break
               }
               default: {
                  // ? Операция над числами
                  alert(
                     typeAction === 'Add'
                     ? `Add of ${numberA} and ${numberB} is ${numberA + numberB}`
                     : typeAction === 'Diff'
                     ? `Diff of ${numberA} and ${numberB} is ${numberA - numberB}`
                     : typeAction === 'Mult'
                     ? `Mult of ${numberA} and ${numberB} is ${numberA * numberB}`
                     : typeAction === 'Div'
                     ? `Div of ${numberA} and ${numberB} is ${numberA / numberB}`
                     : 'This is bad digit, good by'
                  ); 
                  break
               }
            }
         }
      } 
   }
   case `Sqrt`:
   case `Sin`:
   case `Cos`: {
      
      break
   }
   // todo не валидное действие.
   default: {
      alert(`Good by, see you later.`);
      break
   }
}

