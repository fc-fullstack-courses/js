// const obj = {
//   display: 'flex',
//   lineHeiht: 1.5,
//   opacity: 0,
//   'background color': 'red',
//   1: 4551,
// };

const phone = {
  color: 'blue',
  model: 'Moto G Plus',
  switchOn: function () {
    // method
    alert('Switched On');
  },
  cpu: {
    model: 'Qualcom Snapdragon 730',
    frequency: 4,
    frequencyUnit: 'GHz',
  },
  test: 'test',
};
// CRUD
// CREATE
const obj1 = {}; // literal, BEST
const obj2 = Object(); // BAD
const obj3 = new Object(); // BAD
// READ
console.log(phone);
// alert(phone);
// READ object values
console.log(phone.color);
console.log(phone.cpu);
console.log(phone.cpu.frequency);
console.log(phone.ljnhgifdhtgreiufhdifhdguyfdgd); // undefined
// UPDATE property
phone.color = 'black';
// Add property after creation
// let battery = 4000;
phone.battery = 4000;
// phone.battery = {
//   amount: 4000,
//   unit: 'mAh',
// };
// DELETE
// delete phone.test;
// ctrl + /

const obj = {
  // key - string || Symbol
  // value - any
  // key : value,
  // key2: value2,
  // method: function () {}
};

const message = {
  author: 'Ivan Vlasov',
  text: 'методы?',
  date: '17:54', // data курильщика
  // date: new Date(2022,09,06,17,54)
  test: {
    value: {
      data: 12345,
    },
  },
  kfbkdsdksj: 'sdsafda',
};

const message2 = {
  author: 'Ирина Мазур',
  text: 'фунуция',
  date: '17:52', // data курильщика
  // date: new Date(2022,09,06,17,52)
};

console.log(message.author);
console.log(message);
console.log(message.test.value.data);

/*
  создать 2 -3 обьекта пользователей
  у пользователей должны быть
  имя
   фамилия
   возраст
   функция чистки зубов
*/
// const user1 = {
//   firstName: 'Test',
//   lastName: 'Testenko',
//   age: 42,
//   brushTeeth: function () {
//     console.log('Burshing teeth ...');
//   },
// };

// const user2 = {
//   firstName: 'Null',
//   lastName: 'Nullovich',
//   age: 50,
//   brushTeeth: function () {
//     console.log('Burshing teeth ...');
//   },
// };

// const user3 = {
//   firstname: 'Undefined',
//   lastnAme: 'Undefined',
//   age: 15,
//   brushTeeth: function () {
//     console.log('Burshing teeth ...');
//   },
// };

// функция - конструктор
const User = function (firstName, lastName, age, email) {
  // debugger;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;

  this.brushTeeth = function () {
    console.log('Burshing teeth ...');
  };

  return false; // в режиме конструктора игнорируется
};
// const CompanyName = function () {}
const user1 = new User('Test', 'Testenko', 42, 'test@test.test');
const user2 = new User();
const user4 = new User('Anton', 'Antonovich', 12, 'test1@test.test'); // правильно
// const user5 = User('Anton', 'Antonovich', 12); // неправильный вызов
