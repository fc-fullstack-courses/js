const str1 = 'testes';

// console.log(str1[0]);
// console.log(str1[1]);
// console.log(str1[2]);
// console.log(str1[3]);

for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}

str1.charAt(3); // аналог str1[3]
const unicodeTSymbol = str1.charCodeAt(0);

const str2 = str1.concat('1234', 'true', 'false');

const isTInString = str1.includes('t');
const isSpaceInString = str1.includes(' ');

const firstE = str1.indexOf('e');

const str3 = str1.replace('e', 'x');

const str4 = str1.slice(1, 3);
