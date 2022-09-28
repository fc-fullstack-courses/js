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

const symbol2 = Symbol('символ для телефона 8');

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
