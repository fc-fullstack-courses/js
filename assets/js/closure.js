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

function makeCounter() {
  let counter = 0; // замыкание. инкапсулированная переменная

  function incrementCounter() {
    debugger;
    counter++;

    return counter;
  }

  return incrementCounter;
}
const increment1 = makeCounter();
console.log(increment1());
console.log(increment1());
console.log(increment1());

const increment2 = makeCounter();
console.log(increment2());
console.log(increment2());
