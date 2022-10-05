let value = 500;

// function log() {
//   console.log(`log function ${value}`);
// }

function wrapper() {
  // debugger;
  let value = 100000; // замкнутая переменная

  console.log(`wrapper function ${value}`);

  function log() {
    console.log(`log function ${value}`);
  }

  log();
}

// wrapper();

// let i = 0;

// function counter() {
//   i++;
//   return i;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());

// function makeCounter() {
//   let counter = 0; // замыкание. инкапсулированная переменная

//   function incrementCounter() {
//     debugger;
//     counter++;

//     return counter;
//   }

//   return incrementCounter;
// }
// const increment1 = makeCounter();
// console.log(increment1());
// console.log(increment1());
// console.log(increment1());

// const increment2 = makeCounter();
// console.log(increment2());
// console.log(increment2());

function makeCounter() {
  let counter = 0; // замыкание. инкапсулированная переменная

  return {
    increment: function () {
      return ++counter;
    },
    decrement: function () {
      return --counter;
    },
  };
}

const counter1 = makeCounter();
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.decrement());
/*
  написать функцию createAdder(num)
  и возвращает другую функцию

  возвращенная функция должна складывать получаемый ею аргумент
  с аргументом num

  const adder = createAdder(100)
  adder(50) -> 150
  adder(25) -> 175 
  adder(100) -> 275
*/

// function createAdder(num) {
//   return function (number) {
//     return (num += number);
//   };
// }
const createAdder = (state) => (number) => (state += number);

const adder = createAdder(100);
console.log(adder(50));
console.log(adder(25));
console.log(adder(100));

// const test = function horror() {
//   debugger;
// };
