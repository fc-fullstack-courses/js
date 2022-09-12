'use strict';
function Phone(model) {
  this.model = model;

  this.call = function () {
    console.log(1);
  };
}

const phoneProto = {
  isOn: false,
  call: function (number) {
    console.log(`${this.manufacturer} ${this.model} is calling ${number}`);
  },
};

const deviceProto = {
  turnOn: function () {
    console.log('device is turned on now');
  },
};

phoneProto.__proto__ = deviceProto;

const phone1 = {
  model: 'Pro',
  manufacturer: 'Apple',
  __proto__: phoneProto,
};

const phone2 = {
  model: 'Basic',
  manufacturer: 'Google',
};

// phone1.__proto__ = phoneProto;
phone2.__proto__ = phoneProto;

// const phone1 = new Phone('Pro');
// const phone2 = new Phone('Basic');

const arr1 = [1];
const arr2 = [1];
