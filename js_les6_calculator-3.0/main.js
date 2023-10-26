'use strict';

alert('Welcome to calculator!');

let startCalc = true;

calculator: do {
   const typeAction = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos`);
   if (typeAction) {
      const normAction = typeAction.toLowerCase();
      switch (normAction) {
         case `add`:
         case `diff`:
         case `mult`:
         case `div`: {
            let numberA;
            let numberB;

            // todo First number (A)
            do {
               const userChose = prompt(`Enter first number`, 0);
               // ! null check
               if (userChose === null) {
                  startCalc = false;
                  alert(`Good by, see you later.`)
                  break calculator;
               }
               // ! valid check
               if (userChose === '' || isNaN(parseFloat(userChose))) {
                  alert(`This is bad digit. Please enter correct digit.`);
                  continue;
               }
               numberA = parseFloat(userChose);
            } while (!Number.isInteger(numberA));

            // todo Second number (B)
            do {
               const userChose = prompt(`Enter second number`, 0);
               // ! null check
               if (userChose === null) {
                  startCalc = false;
                  alert(`Good by, see you later.`)
                  break calculator;
               }
               // ! valid check
               if (userChose === '' || isNaN(parseFloat(userChose))) {
                  alert(`This is bad digit. Please enter correct digit.`);
                  continue;
               }
               numberB = parseFloat(userChose);
            } while (!Number.isInteger(numberB));

            switch (normAction) {
               case `add`: alert(`Sum of ${numberA} and ${numberB} is ${numberA + numberB}`); break;
               case `diff`: alert(`Diff of ${numberA} and ${numberB} is ${numberA - numberB}`); break;
               case `mult`: alert(`Miff of ${numberA} and ${numberB} is ${numberA * numberB}`); break;
               case `div`: alert(`Div of ${numberA} and ${numberB} is ${numberA / numberB}`); break;
               default: alert(`Ups somethings went wrong`); break;
            }

            startCalc = confirm(`Do you want continue work with me?`);
            if (!startCalc) {
               alert(`Good by, see you later.`);
            }
            break;
         }
         case `sqrt`: 
         case `sin`:
         case `cos`: {
            let number;

             // todo number
            do {
               const userChose = prompt(`Enter first number`, 0);
               // ! null check
               if (userChose === null) {
                  startCalc = false;
                  alert(`Good by, see you later.`)
                  break calculator;
               }
               // ! valid check
               if (userChose === '' || isNaN(parseFloat(userChose))) {
                  alert(`This is bad digit. Please enter correct digit.`);
                  continue;
               }
               number = parseFloat(userChose);
            } while (!Number.isInteger(number));

            switch (normAction) {
               case 'sqrt': {
                  (number >= 0)
                  ? alert(`Root of ${number} is ${Math.sqrt(number)}`)
                  : alert('Number must to be positive');
               }
               case 'sin': alert(`Sin of ${number} is ${Math.sin(number)}`); break;
               case 'cos': alert(`Cos of ${number} is ${Math.cos(number)}`); break;
            }
            
            break;
         }
         default: {
            alert(`I don't recognize your operation. Please choose correct operation like: Add, Diff, Mult, Div, Sqrt or Exp`);
            break;
         }
      }
   } else {
      startCalc = false;
      alert(`Good by, see you later.`);
   }
} while (startCalc)
