const getSumOfTwo = function (num1, num2) {
  // debugger;
  if (!isNaN(num1)) {
    if (!isNaN(num2)) {
      return num1 + num2;
    }
  }

  alert('vse ploxo');
  return NaN;
};

// if ... else
// switch case

const input = prompt('Choose your fighter: \n1-Sub-Zero\n2-Scorpion\n3-Raiden');
// debugger;
switch (input) {
  case '1':
  case 1: {
    alert('You picked Sub-Zero');
    break; // останавливает выполнение
  }
  case '2': // ничего не сделал и пошел дальше
  case 2: {
    alert('You picked Scorpion');
    break;
  }
  case '3':
  case 3: {
    alert('You picked Raiden');
    break;
  }
  default:
    alert('This fighter doesnt exist');
}
// input === 1
