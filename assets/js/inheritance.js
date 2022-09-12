function Phone(model) {
  this.model = model;

  this.call = function () {
    console.log(1);
  };
}

const phoneProto = {
  call: function () {
    console.log(1);
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
  __proto__: phoneProto,
};

const phone2 = {
  model: 'Basic',
};

// phone1.__proto__ = phoneProto;
phone2.__proto__ = phoneProto;

// const phone1 = new Phone('Pro');
// const phone2 = new Phone('Basic');

const arr1 = [1];
const arr2 = [1];
