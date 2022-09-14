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

/*
  'test string test test new test'
  'Test String Test Test New Test'
*/

function toJadenCase(str) {
  // 1 Разбить на слова
  const words = str.split(' '); // получаем массив слов
  // console.log(words);
  // 2 создать переменную для результата
  let result = '';

  // 3 цикл для массива слов.
  // Каждую первую букву в слове сделать большой
  // и положить новое слово в результат
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstLetter = word[0];

    const capitalizedWord = firstLetter.toUpperCase() + word.slice(1);
    // console.log(capitalizedWord);
    result += capitalizedWord + ' ';
  }

  return result.trim();
}

const firstStr = 'test string aest test new yes';
console.log(toJadenCase(firstStr));

// ==================== Boolean ===============================
const boolResult = Boolean(firstStr); // приведение к булевому значению ===  !!

// ==================== Number ===============================

const number = Number('12356'); // приведение к числу ===  +value
