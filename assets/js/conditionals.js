const getSumOfTwo = function (num1, num2) {
  // if (!isNaN(num1) && !isNaN(num2)) {
  //   const result = num1 + num2;

  //   return result;
  // } else {
  //   alert('vse ploxo');
  //   return NaN;
  // }
  if (isNaN(num1) || isNaN(num2)) {
    alert('vse ploxo');
    return NaN;
  } else {
    const result = num1 + num2;

    return result;
  }
};

// if ... else
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
