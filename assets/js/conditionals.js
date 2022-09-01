const getSumOfTwo = function (num1, num2) {
  // if (isNaN(num1) || isNaN(num2)) {
  //   alert('vse ploxo');
  //   return NaN;
  // } else {
  //   // const result = ;

  //   return num1 + num2;
  // }
  
  // if (isNaN(num1)) {
  //   alert('vse ploxo');
  //   return NaN;
  // }

  // if(isNaN(num2)) {
  //   alert('vse ploxo');
  //   return NaN;
  // }

  // return num1 + num2;
  // if (!isNaN(num1) && !isNaN(num2)) {

  //   return  num1 + num2;
  // } else {
  //   alert('vse ploxo');
  //   return NaN;
  // }
  if (!isNaN(num1)) {
    if (!isNaN(num2)) {
      return num1 + num2;
    }
  }

  alert('vse ploxo');
  return NaN;
};

// if ... else
if (2 > 10) {
  const test = 1;

  if (5 > 1) {
  }
} else if (2 > 1) {
  const test2 = 2;
} else if (2 > -100) {
  const test3 = 3;
} else {
}
// switch case

const friendName = 'Anton';

const badFriend = 'Anton';
const bestFriend = 'Test';
const justFriend = 'UNdefined';

if (friendName === bestFriend) {
  // условие 1
  console.log('Heelo my best friend');
} else if (friendName === justFriend) {
  //условие 2
  console.log('Hi');

  // if() {
  //   if( ) {
  //     if() {

  //     }
  //   }
  // }
} else {
  // все остальные случаи
  console.log('...');
}
