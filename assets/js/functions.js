'use strict';
// const data = console.log(123453523); // всегда undefined

// const name = prompt('Enter your name:'); // string

// const greetingMessage = 'Hello ' + name;

// alert(greetingMessage);

// const num1 = +prompt('Enter first number');
// const num2 = Number(prompt('Enter second number'));

// const num1 = prompt('Enter first number');
// const num2 = prompt('Enter second number');

// const result = +num1 + Number(num2);

// const sumMessage = num1 + ' + ' + num2 + ' = ' + result;
// const message = num1 + ' + ' + num2 + ' = ' + (+num1 + Number(num2));
// alert(sumMessage);

// alert(num1 + ' + ' + num2 + ' = ' + (+num1 + Number(num2)));

// // arrow function

// const input1 = prompt('Enter first number');
// const input2 = prompt('Enter second number');
// console.log(getSumOfTwo2(5, 5));

// functional experssion
const getSumOfTwo = function (num1, num2) {
  // тело функции
  const result = +num1 + +num2;

  // return result;
};

// functional declaration
function getSumOfTwo2(num1, num2) {
  // тело функции
  const result = +num1 + +num2;
}

// const test12345 = new getSumOfTwo2();

const myFunc = function (num1, str2) {
  const test1 = 1;
  return test1;
};

// детерминированные функции - при одинаковых входных данных
// одинаковые реузльтаты
function sum(num1 = 2, num2 = 3) {
  return num1 + num2;
}

// побочные эффекты - читать и модифицировать значения глобальных
// переменных, осуществлять операции ввода-вывода,
// реагировать на исключительные ситуации, вызывать их обработчики.
let test = 1;

function sum2(num1 = 2, num2 = 3) {
  test++;
  return num1 + num2 + Math.random();
}
let test2;
test2 = sum(2, 2);

function User(name = 'User', age = 5000, isLoggedIn = false) {
  this.name = name;
  this.age = age;
  this.isLoggedIn = isLoggedIn;
}

const user1 = new User('Test', 40);
const user2 = new User('Test', 40, 'gadost');
const user3 = new User();
