const obj = {
  display: 'flex',
  lineHeiht: 1.5,
  opacity: 0,
  'background color': 'red',
  1: 4551,
};

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
//DELETE
delete phone.test;
