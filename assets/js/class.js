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

class Dog extends Animal {}

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

// ИНКАПСУЛЯЦИЯ
class Figure {
  constructor(name) {
    this.name = name;
  }

  getArea() {
    //1
  }
  // getArea (x) {
  //   //2
  // }
  // getArea(x,y) {
  //   //3
  // }
}

class Triangle extends Figure {
  #a;
  #h;
  constructor(a, h, b, c) {
    super('triangle');
    this.#a = a; // инкапсуляция параметров
    this.#h = h;
    this.b = b;
    this.c = c;
  }

  get side() {
    return this.#a;
  }

  get height() {
    return this.#h;
  }

  set side(a) {
    if (typeof a !== 'number' || isNaN(a)) {
      throw new TypeError('Triangle side must be number');
    }

    this.#a = a;
  }

  getArea(mode = 'height') {
    switch (mode) {
      case 'height': {
        return 0.5 * this.#a * this.#h; // скрыли вычислительную сложность
      }
      case 'geron': {
        const p = (this.#a + this.b + this.c) / 2;

        return Math.sqrt(p * (p - this.#a) * (p - this.b) * (p - this.c));
      }
    }
  }
}

/*
  создайте класс Прямоугольника наслуддующегося от Фигуры
  и для ромба

  реализуйте ему метод getArea, расчитывающий его площадь. 
  
  В конструкторе приймите необходимые для этого параметры

*/
class Rectangle extends Figure {
  #sideA;
  #sideB;
  constructor(a, b) {
    super('rectangle');
    this.sideA = a;
    this.sideB = b;
  }

  get sideA() {
    return this.#sideA;
  }

  get sideB() {
    return this.#sideB;
  }

  set sideA(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new TypeError();
    }

    if (num <= 0) {
      throw new RangeError();
    }

    this.#sideA = num;
  }

  set sideB(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new TypeError();
    }

    if (num <= 0) {
      throw new RangeError();
    }

    this.#sideB = num;
  }

  getArea() {
    return this.#sideA * this.#sideB;
  }
}

class Rhombus extends Figure {
  constructor(a, h) {
    super('rhombus');
    this.a = a;
    this.h = h;
  }

  getArea() {
    return this.a * this.h;
  }
}

const fig1 = new Figure('some figure');
const triangle1 = new Triangle(10, 5, 3, 8);
const rect1 = new Rectangle(5, 8);
const rhombus1 = new Rhombus(5, 7);

function getFigureArea(figure, mode) {
  if(figure instanceof Figure) {
    return figure.getArea(mode);
  }
  throw new TypeError('not figure')
}
