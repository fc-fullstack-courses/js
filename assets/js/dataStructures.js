const set1 = new Set();

const arr = [123, 123454, 5, 56, 54];
set1.add(1);
set1.add('test');
set1.add(arr);
set1.add(null);
set1.add(null);

// set1.clear(); удаляет все

set1.delete('test'); // удаляет конкретное значение
set1.delete(arr);

// console.log(set1.has(1)); // узнаем есть ли значение в сете
// console.log(set1.has(10000));

const arr1 = [5, 7, 8, 9, 3, 8, 8, 6];

const set2 = new Set(arr1);
const set3 = new Set([5, 7, 8, 9, 3, 8, 8, 6]);

/*
  Пусть у вас будут 2 массива с именами
  получите новый массив, 
  в котором не будет повторяющихся имен
*/

const names1 = ['Anton', 'Ivan', 'Petro', 'Anna'];
const names2 = ['Feofan', 'Simon', 'Stepan', 'Roman', 'Anton'];

// 1 отфильтровать имена так чтобы не было повторов
// const nameSet = new Set();

// for (const name of names1) {
//   nameSet.add(name);
// }

// const nameSet = new Set(names1);
// for (const name of names2) {
//   nameSet.add(name);
// }

// const names3 = names1.concat(names2);
// const nameSet = new Set(names3);

// const nameSet = new Set(names1.concat(names2));

// const nameSet = new Set([...names1, ...names2]);

// 2 прийти от сета к массиву
// const uniqueNames = []; // повторялок не будет
// for (const name of nameSet) {
//   uniqueNames.push(name);
// }

const uniqueNames = [...new Set([...names1, ...names2])];
const uniqueNames1 = new Array(...new Set([...names1, ...names2]));

// for (const key in uniqueNames1) {
//   console.log(key);
// }

// for (const value of uniqueNames1) {
//   console.log(value);
// }

set3.forEach((value, valueAgain, set) => {
  // console.log(value);
  // console.log(valueAgain);
  // console.log(set);
});

const setIter = set3.values(); // итератор

for (const item of setIter) {
  // console.log(item);
}

// для сета set.keys = set.values

for (const item of set3.keys()) {
  // console.log(item);
}

for (const item of set3.entries()) {
  // console.log(item); // массив с однотипной структурой - кортеж
}

/*
  1. ключом может быть ЧТО угодно
  2. сохраняется порядок вставки
  3. есть итератор
  4. нет ключей кроме установленных вами
  5. есть  свойство размера (size)
  6. Map лучше работает в сценариях с частым добавлением и удалением пар ключ-значение.
  7. преобразования для передачи по сети надо делать вручную
*/

const map = new Map();

map.set('key', 'value');
map.set(123, 456);
map.set('123', '456');

const func = () => {
  console.log('Why...');
};
map.set(func, true);
map.set(func, null);

console.log(map.get(func));
console.log(map.get(123));

console.log(map.has(999));
console.log(map.has(123));

map.delete(123);
// map.clear();

const map2 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3'],
  ['key4', 'value4'],
  ['key5', 'value5'],
  ['key6', 'value6'],
]);

const vocabulary = new Map([
  ['вітаю', 'hello'],
  ['собака', 'dog'],
  ['дякую', 'thanks'],
  ['україна', 'Ukraine'],
  ['осінь', 'autumn'],
  ['навчання', 'study'],
  ['погода', 'weather'],
  ['розробник', 'developer'],
  ['замовник', 'customer'],
  [`комп'ютер`, 'PC'],
]);

const testString = `ЗамоВник собака гепард дякую розРобник вітаю комп'ютер Україна осінь`;

function translate(stringToTranslate, vocab) {
  // привести все к одному регистру
  const lowerCased = stringToTranslate.toLowerCase();
  // разбить строку на слова
  // ['замовник', 'собака']
  const words = lowerCased.split(' ');
  // создать массив / строчку в котору складывае первод (результат)
  let translation = '';
  // пройтись по массиву слов
  for (const word of words) {
    // сравнить с данными из словаря
    // если есть то положить в результат
    if (vocab.has(word)) {
      translation += `${vocab.get(word)} `;
    } else {
      translation += `${word} `;
    }
  }

  // если у нас результат это массив то его надо сделать строкой

  // вернуть переведенную строку
  return translation.trim();
}

const translate2 = (stringToTranslate, vocab) =>
  stringToTranslate
    .toLowerCase()
    .split(' ')
    .map((word) => (vocab.has(word) ? vocab.get(word) : word))
    .join(' ');

/*

*/

const user1 = {
  id: 1,
  name: 'Test test',
};

const user2 = {
  id: 2,
  name: 'Null Null',
};

const messages1 = ['hi!', 'good', 'bye!'];
const messages2 = ['hello', 'how are you?', 'bye!'];

/*
Связать массивы сообщений с пользователями через Map
написать функцию, которой вы передаете пользователя а она 
возвращает массив его сообщений
*/
const userToMessagesMap = new Map([
  [user1, messages1],
  [user2, messages2],
]);

function getUserMessages(user) {
  if (userToMessagesMap.has(user)) {
    return userToMessagesMap.get(user);
  }

  throw new Error('User not found');
}

const messsage1 = getUserMessages(user1)[0];

userToMessagesMap.forEach((value, key, map) => {
  // console.log(value);
  // console.log(key);
  // console.log(map);
});

for (const key of userToMessagesMap.keys()) {
  console.log(key);
}

for (const value of userToMessagesMap.values()) {
  console.log(value);
}

for (const entry of userToMessagesMap.entries()) {
  console.log(entry);
}

for (const entry of userToMessagesMap) {
  console.log(entry);
}

const newUserToMesssagesMap = new Map([...userToMessagesMap]);

const user1Keys = Object.keys(user1); // массив строки
const user1Values = Object.values(user1); // массив знавчений
const user1Entries = Object.entries(user1); // массив кортежей [ключ, значение]

const userMap = new Map(user1Entries);
