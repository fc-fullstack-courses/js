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


wrapper();
