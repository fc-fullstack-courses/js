// =================== STRING ==================
const str1 = 'testes';

// console.log(str1[0]);
// console.log(str1[1]);
// console.log(str1[2]);
// console.log(str1[3]);

for (let i = 0; i < str1.length; i++) {
  // console.log(str1[i]);
}

str1.charAt(3); // аналог str1[3]
const unicodeTSymbol = str1.charCodeAt(0);

const str2 = str1.concat('1234', 'true', 'false');

const isTInString = str1.includes('t');
const isSpaceInString = str1.includes(' ');

const firstE = str1.indexOf('e');

const str3 = str1.replace('e', 'x');
// const str3 = str1.replaceAll('est', 'x');

const str4 = str1.slice(5, 3);
console.log(str4);
const str5 = str1.substring(5, 3);
console.log(str5);

const capsStr = str1.toUpperCase();

const test = '                                         email@mail.com       ';
const test1 =
  '                                         Test Testovich         Testenko       ';
const trimmedString = test1.trim();

const preArrayString = 'Ivan Stefanovich Petrenko';
const array = preArrayString.split(' ', 1);
const postArrayString = array.join('-');
