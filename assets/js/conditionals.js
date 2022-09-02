const getSumOfTwo = function (num1, num2) {
  // debugger;
  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 + num2;
  } else {
  }

  alert('vse ploxo');
  return NaN;
};

// if ... else
// switch case

// const input = prompt('Choose your fighter: \n1-Sub-Zero\n2-Scorpion\n3-Raiden');
// // debugger;
// switch (input) {
//   case '1':
//   case 1: {
//     alert('You picked Sub-Zero');
//     break; // останавливает выполнение
//   }
//   case '2': // ничего не сделал и пошел дальше
//   case 2: {
//     alert('You picked Scorpion');
//     break;
//   }
//   case '3':
//   case 3: {
//     alert('You picked Raiden');
//     break;
//   }
//   default:
//     alert('This fighter doesnt exist');
// }

// input === 1
// реализовать с помощью switch калькулятор
// он должен уметь умножать делить
// складывать и вычитать 2 числа

let expression = 1;

const num1 = -10;
const num2 = 20;
const operator = prompt('enter operator:');
/*
  +,-,*,/
*/
switch (operator) {
  // expression === 1
  case '+': {
    console.log(num1 + num2);
    break;
  }
  case '-': {
    console.log(num1 - num2);
    break;
  }
  case '*': {
    console.log(num1 * num2);
    break;
  }
  case '/': {
    console.log(num1 / num2);
    break;
  }
  case '^': {
    console.log(num1 ** num2);
    break;
  }
  default:
    console.log('Unsupported operator');
}
