'use strict';

function UserConstructor(name, age) {
  this.name = name;
  this.age = age;
}

function UserProto() {
  this.isAdult = function () {
    return this.age >= 18;
  };
}

// const userProto = {
//   isAdult: function () {
//     return this.age >= 18;
//   },
// };

const userProto = new UserProto();

UserConstructor.prototype = userProto;

const user1 = new UserConstructor('Test', 12);
const user2 = new UserConstructor('Test', 19);

// class UserClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   isAdult() {
//     return this.age >= 18;
//   }
// }

class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  isAdult() {
    return this.age >= 18;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

const betterUser1 = new User('Test', 'Test 123', 12);
const betterUser2 = new User('Test', 'Test 123', 19);
