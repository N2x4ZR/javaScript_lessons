'use strict';

let number;
let num1;
let num2;
let num3;
let num4;
let num5;
let num6;

number = Number(prompt(`введіть шестизначне число.`))

num1 = parseInt(number / 100000);
num2 = parseInt(number / 10000) % 10;
num3 = parseInt(number / 1000) % 10;
num4 = parseInt(number / 100) % 10;
num5 = parseInt(number / 10) % 10;
num6 = number % 10;

if (num1 === num6 && num2 === num5 && num3 === num4) {
   console.log(`Число ${number} є дзеркальним. ✅`)
} else {
   console.log(`Число ${number} не є дзеркальним. ❌`)
}