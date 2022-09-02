// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);

// бесконечный цикл BAD
// while (true) {
//   console.log(1);
// }

// let i = 0;

// while (i < 20) {
//   console.log(i);
//   i++;
// }

// i = 0;
// while (true) {
//   console.log(i);
//   i++;
//   if (i >= 20) {
//     break;
//   }
// }

// let shouldContinue = true;
// i = 0;

// while (shouldContinue) {
//   console.log(i);
//   i++;
//   shouldContinue = confirm('Should continue ?');
// }
/*
залогируйте в цикле четные числа от 0 до 20
*/

let counter = 0;

// while (counter < 21) {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }
//   counter++;
// }

counter = 0;

// while (counter < 21 && counter % 2 === 0) {
//   console.log(counter);

//   counter += 2;
// }

// while (true) {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }

//   counter += 2;
//   if (counter > 20) {
//     break;
//   }
// }

// while (counter < 21) {
//   // debugger;
//   counter++;
//   if (counter % 2 !== 0) {
//     continue; // при попадании на него прерывает текущую итерацию и начинают новую
//   }

//   console.log(counter);
// }

// =============================================

do {
  console.log('do while');
} while (false);

while (false) {
  console.log('while');
}

counter = 1;

do {
  console.log(counter);

  counter++;
} while (counter < 21 && counter % 2 === 0);
