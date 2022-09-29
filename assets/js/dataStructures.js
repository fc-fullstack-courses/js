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


const uniqueNames = [] // повторялок не будет