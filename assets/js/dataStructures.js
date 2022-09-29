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

console.log(set1.has(1)); // узнаем есть ли значение в сете
console.log(set1.has(10000));

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

set3.forEach((value, valueAgain, set) => {
  console.log(value);
  console.log(valueAgain);
  console.log(set);
});

const setIter = set3.values(); // итератор

for (const item of setIter) {
  console.log(item);
}

// для сета set.keys = set.values

for (const item of set3.keys()) {
  console.log(item);
}

// 

for (const item of set3.entries()) {
  console.log(item); // массив с однотипной структурой - кортеж
}
