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

// functional declaration

// // arrow function

// const input1 = prompt('Enter first number');
// const input2 = prompt('Enter second number');

// functional experssion
const getSumOfTwo = function (num1, num2) {
  // тело функции
  const result = +num1 + +num2;

  return result;
};

// getSumOfTwo(10, 50);
// getSumOfTwo(-5, 15);
// const result = getSumOfTwo(input1, input2);

// alert(result);

// Реализовать функцию которая принимает имя пользователя
// и будет с ним здороватся
const createGreeting = function (username) {
  const message = 'Hello ' + username;
  return message;
};

const greetMeMessage = createGreeting('Kyrylo');

alert(createGreeting('Kyrylo'));
