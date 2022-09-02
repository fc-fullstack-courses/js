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

let i = 0;

while (i < 20) {
  console.log(i);
  i++;
}

i = 0;
while (true) {
  console.log(i);
  i++;
  if (i >= 20) {
    break;
  }
}

let shouldContinue = true;
i = 0;

while(shouldContinue) {
  console.log(i);
  i++;
  shouldContinue = confirm('Should continue ?');
}
