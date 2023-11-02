'use strict';


function calcAction(type, a, b) {
   let action;
   switch(type) {
      case `add`: action = `Sum: ${a} + ${b} = ${a + b}`; break;
      case `diff`: action = `Diff: ${a} - ${b} = ${a - b}`; break;
      case `mult`: action = `Mult: ${a} * ${b} = ${a * b}`; break;
      case `div`: action = `Div: ${a} / ${b} = ${a / b}`; break;
      case `sqrt`: {
         if (a >= 0) {
            action = `Sqrt: √${a} = ${Math.sqrt(a)}`
         } else {
            alert('Number must to be positive')
         }
         break;
      }
      case `sin`: action = `Sin: ${a} = ${Math.sin(a)}`; break;
      case `cos`: action = `Cos: ${a} = ${Math.cos(a)}`; break;
   }
   if (action !== undefined) {
      alert(action); 
      history.push(action);
   }
}

function getUserNumber(message) {
   let number;
   do {
      const userChose = prompt(message, 0);
      if (userChose === null) {
         showNotification(`goodBy`);
         return null;
      }
      if (userChose === '' || isNaN(parseFloat(userChose))) {
         alert(`This is bad digit. Please enter correct digit.`);
         continue;
      }
      number = parseFloat(userChose)
   } while (!Number.isInteger(number));
   return number;
}

function showNotification(notificationType) {
   switch(notificationType) {
      case 'continue': {
         startCalc = confirm(`Do you want continue work with me?`);
         if (!startCalc) {
            alert(`Good by, see you later.`);
         }
         break;
      }
      case `goodBy`: {
         startCalc = false;
         alert(`Good by, see you later.`);
         break;
      }
      default: {
         alert(`Error: there's no such notice.`);
         break;
      }
   }
}


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
            let numberA = getUserNumber(`Enter first number`);
            if (numberA === null) {
               startCalc = false;
               break calculator;
            }
            let numberB = getUserNumber(`Enter second number`);
            if (numberB === null) {
               startCalc = false;
               break calculator;
            }

            calcAction(normAction, numberA, numberB);
            showNotification(`continue`);

            break;
         }
         case `sqrt`: 
         case `sin`:
         case `cos`: {
            let number = getUserNumber(`Enter first number`);
            if (number === null) {
               break calculator;
            }

            calcAction(normAction, number);
            showNotification(`continue`);

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
            showNotification(`continue`)

            break;
         }
         default: {
            alert(`I don't recognize your operation. Please choose correct operation like: Add, Diff, Mult, Div, Sqrt or Exp`);
            break;
         }
      }
   } else {
      showNotification(`goodBy`);
   }
} while (startCalc)
