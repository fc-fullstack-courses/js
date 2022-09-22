'use strict';

class Animal {
  #name;

  constructor(species, name, color, diet) {
    this.species = species;
    this.name = name;
    this.color = color;
    this.diet = diet;
  }

  // методы обьекта
  get name() {
    // возвращает значение
    return this.#name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Must be string');
    }

    // задает значение для свойства
    this.#name = value;
  }

  eat() {
    return `${this.#name} is eating`;
  }

  static isAnimal(obj) {
    return obj instanceof Animal;
  }

  static Pi = 3.14;
}

// const animal1 = new Animal('Grizun');

/*
OOП принципы

1* абстракция - описываете обьект максимально достаточно для решения задачи
2. инкапсуляция - сокрытия реализации обьекта / логики
3. наследование - обьекты потомки могут наследовать свойства / методы а не пересоздавать их
4. полиморфизм - повзоляет методам схожих классов реализовыватся по разному
*/

/* наследование */
class Squirell extends Animal {
  constructor(name, color) {
    // вызывается конструктор Animal, и даем ему все необходимые вещи
    super('squirell', name, color, 'acorn');
  }
}

const sq = new Squirell('Gaika', 'brown');
/*
class User
email
password

createMessage() -> '(user) created message'

class Moder -> User
*/
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.isBanned = false;
  }

  createMessage() {
    return `${this.email} created message`;
  }
}

const u1 = new User('u@u', 123454543);

class Moder extends User {
  constructor(email, password, age) {
    super(email, password);
    this.age = age;
  }

  deleteMessage() {
    return 'message deleted';
  }
}

const moder1 = new Moder('t1@t.t', 12345, 40);

/*
  создать класс Admin наследующийся от Moder
  firstname, lastname - уникальные свойства админов

  методы админов:
  ban (user) -> баните юзера (меняете свойство на true)

  *
  unban (user)
  сделайте так чтобы админы не могли банить других админов
*/
class Admin extends Moder {
  constructor(email, password, age, first, last) {
    super(email, password, age);

    this.first = first;
    this.last = last;
    
  }

  ban(user) {
    user.isBanned = true;
  }
}

const adm = new Admin('a@a.a', 12345, 100, 'Tiran', 'Tiranovich');
