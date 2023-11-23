'use strict';

class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;
    if (!this.isValidOperator(znak)) {
      console.log("Неправильний оператор. Введіть +, -, /, *, або %.");
      this.input();
      return;
    }
    const confirmMessage = `Ви хочете зробити дію ${znak} з числами ${X} і ${Y}? (Так/Ні): `;
    const userConfirm = prompt(confirmMessage);
    if (userConfirm.toLowerCase() === 'так') {
      this.performOperation(X, Y, znak);
    } else {
      this.input();
    }
  }

  performOperation(X, Y, znak) {
    switch (znak) {
      case '+':
        console.log(`${X} + ${Y} = ${X + Y}`);
        break;
      case '-':
        console.log(`${X} - ${Y} = ${X - Y}`);
        break;
      case '*':
        console.log(`${X} * ${Y} = ${X * Y}`);
        break;
      case '/':
        console.log(`${X} / ${Y} = ${X / Y}`);
        break;
      case '%':
        console.log(`${X} % ${Y} = ${X % Y}`);
        break;
      default:
        console.log("Неправильний оператор.");
    }
  }

  input() {
    const newX = parseFloat(prompt("Введіть число X:"));
    const newY = parseFloat(prompt("Введіть число Y:"));
    const newZnak = prompt("Введіть математичний оператор (+, -, /, *, %):");
    this.check({ X: newX, Y: newY, znak: newZnak });
  }

  isValidOperator(znak) {
    const validOperators = ['+', '-', '/', '*', '%'];
    return validOperators.includes(znak);
  }
}

const obj = { X:12, Y:3, znak:"/" };
const p = new SuperMath();
p.check(obj);