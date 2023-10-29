'use strict';

alert('Welcome to calculator!');

let startCalc = true;
const history = [];

calculator: do {
   const typeAction = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos${history.length > 0 ? `, (${history.length})History` : ``}`);
   if (typeAction) {
      const normAction = typeAction.toLowerCase();
      switch (normAction) {
         case `add`:
         case `diff`:
         case `mult`:
         case `div`: {
            let numberA;
            let numberB;

            do {
               const userChose = prompt(`Enter first number`, 0);

               if (userChose === null) {
                  startCalc = false;
                  alert(`Good by, see you later.`)
                  break calculator;
               }

               if (userChose === '' || isNaN(parseFloat(userChose))) {
                  alert(`This is bad digit. Please enter correct digit.`);
                  continue;
               }
               numberA = parseFloat(userChose);
            } while (!Number.isInteger(numberA));

            do {
               const userChose = prompt(`Enter second number`, 0);
               
               if (userChose === null) {
                  startCalc = false;
                  alert(`Good by, see you later.`)
                  break calculator;
               }

               if (userChose === '' || isNaN(parseFloat(userChose))) {
                  alert(`This is bad digit. Please enter correct digit.`);
                  continue;
               }
               numberB = parseFloat(userChose);
            } while (!Number.isInteger(numberB));

            switch (normAction) {
               case `add`: {
                  let action = `Sum: ${numberA} + ${numberB} = ${numberA + numberB}`;
                  alert(action); 
                  history.push(action)
                  break;
               } 
               case `diff`: {
                  let action = `Diff: ${numberA} - ${numberB} = ${numberA - numberB}`;
                  alert(action); 
                  history.push(action)
                  break;
               } 
               case `mult`: {
                  let action = `Mult: ${numberA} * ${numberB} = ${numberA * numberB}`;
                  alert(action); 
                  history.push(action)
                  break;
               }
               case `div`: {
                  let action = `Div: ${numberA} / ${numberB} = ${numberA / numberB}`;
                  alert(action); 
                  history.push(action)
                  break;
               } 
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

            do {
               const userChose = prompt(`Enter first number`, 0);

               if (userChose === null) {
                  startCalc = false;
                  alert(`Good by, see you later.`)
                  break calculator;
               }

               if (userChose === '' || isNaN(parseFloat(userChose))) {
                  alert(`This is bad digit. Please enter correct digit.`);
                  continue;
               }
               number = parseFloat(userChose);
            } while (!Number.isInteger(number));

            switch (normAction) {
               case 'sqrt': {
                  if (number >= 0) {
                     let action = `sqrt: √${number} = ${Math.sqrt(number)}`
                     alert(action);
                     history.push(action)
                  } else {
                     alert('Number must to be positive');
                  }
                  break
               }
               case 'sin': {
                  let action = `Sin: ${number} = ${Math.sin(number)}`
                  alert(action);
                  history.push(action);
                  break;
               }
               case 'cos': {
                  let action = `Cos: ${number} = ${Math.cos(number)}`
                  alert(action);
                  history.push(action);
                  break;
               }
            }
            
            break;
         }
         case `history`: {
            if (!history.length) {
               alert(`you haven't done any operations yet`)
               break;
            }
            let historyList = `Your operations:\n\n`;
            history.forEach((element, index) => {
               historyList += `${index + 1}. ${element}\n`;
            });
            alert(historyList);

            startCalc = confirm(`Do you want continue work with me?`);
            if (!startCalc) {
               alert(`Good by, see you later.`);
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
