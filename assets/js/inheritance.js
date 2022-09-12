function Phone(model) {
  this.model = model;

  this.call = function () {
    console.log(1);
  };
}

const phone1 = {
  model: 'Pro',
};

const phone2 = {
  model: 'Basic',
};

const phoneProto = {
  call: function () {
    console.log(1);
  },
};

phone1.__proto__ = phoneProto;
phone2.__proto__ = phoneProto;

// const phone1 = new Phone('Pro');
// const phone2 = new Phone('Basic');

const arr1 = [1];
const arr2 = [1];
