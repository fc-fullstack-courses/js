/*
  bool
  number
  string
  null
  symbol - это уникальный и неизменяемый тип данных
  undefined
  bigint
  
  object
*/

const symbol2 = Symbol('id');

const user = {
  [Symbol('символ для пользователя 4')]: 'test message',
  test: true,
  name: 1234,
};

for (const key in user) {
  console.log(user[key]);
}

const symbols = Object.getOwnPropertySymbols(user);
const symbol1 = symbols[0];
console.log(symbol1.toString());

const iterator = arr[Symbol.iterator]();
/*
  1. for ... of 
  2. spread operator
  3. деструктуризация
*/
console.log(...arr);
// console.log(...myArr);

const phones = ['546846546316351', '6546546513135132', '3213153415641515'];
/*
  Array
  String

  Map
  Set

  arguments
  другие коллекции
*/
for (const phone of phones) {
  console.log(phone);
}

const str = 'sibd isab saiufhaiu bsb  i sdsa!';

for (const letter of str) {
  console.log(letter);
}
/*
  создайте функцию
  
  неограниченного кол-ва чисел
  которая считает произведение 
  используйте for of
*/
// 3, 7 , 8 = 168

function multiply(...numbers) {
  let result = 1;
  for (const number of numbers) {
    result *= number;
  }

  return result;
}

function divide(...numbers) {
  let result;

  for (const number of numbers) {
    if (result === undefined) {
      result = number;
    } else {
      result /= number;
    }
  }

  return result;
}

// for (const value of myArr) {
//   console.log(value);
// }
