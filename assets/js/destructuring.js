'use strict';
// деструктуризация обьектов

const table = {
  material: 'oak',
  color: 'brown',
  dimensions: {
    width: {
      unit: 'sm',
      value: 120,
    },
    height: {
      unit: 'sm',
      value: 100,
    },
    length: {
      unit: 'sm',
      value: 250,
    },
  },
  shelves: [
    [
      {
        itemType: 'book',
        name: 'Kobzar',
        cover: 'solid',
      },
    ],
    [
      {
        itemType: 'pen',
        color: 'black',
      },
    ],
    [
      {
        itemType: 'money',
        amount: 500000,
        currencyType: 'USD',
      },
    ],
  ],
};

const tableHeight = `${table.dimensions.height.value} ${table.dimensions.height.unit}`;

// const { value, unit } = table.dimensions.height;

// const tableHeight1 = `${value} ${unit}`;

// const { material, dimensions } = table;
// const { height } = dimensions;
// const { value, unit } = height;
// const tableHeight1 = `${value} ${unit}`;

const {
  material,
  dimensions: {
    height: { value: tableHeightValue, unit: tableHeightUnit },
    width: { unit: tableWidthValue, value: tableWidthUnit },
  },
  shelves: [[book], [{ itemType }], thirdShelf],
} = table;

const tableHeight2 = `${tableHeightValue} ${tableHeightUnit}`;
const tableWidth = `${tableWidthValue} ${tableWidthUnit}`;

const {
  shelves,
  dimensions: { height, ...restDimensions },
  ...shelflessTable
} = table;

// const { height, ...restDimensions } = dimensions;

shelflessTable.dimensions = restDimensions;

// деструктуризация массивов

const arr = [1, 2, [3, 45, 5], 78, 6];

// const first = arr[0];

const [, , [test], fourth] = arr;

const [, , ...newArr] = arr;

const fullName = 'Test Testenko';
const [fisrtName, lastName] = fullName.split(' ');

const [test1, test2] = fullName;

let value1 = true;
let value2 = false;

// let value3 = value1;
// value1 = value2;
// value2 = value3;
[value2, value1] = [value1, value2];

// деструктуризацию параметров функций
const user1 = {
  firstName: 'User',
  lastName: 'Userenko',
  isMale: true,
  age: 18,
};
const user2 = {
  firstName: 'User',
  lastName: 'Userenko',
  isMale: true,
  age: 19,
};
const user3 = {
  firstName: 'User',
  lastName: 'Userenko',
  isMale: true,
  age: 20,
};

function greetUser(
  { firstName, lastName, ...restOfUser },
  otherParam,
  ...restParams
) {
  // const { firstName, lastName } = user;
  console.log(restOfUser);
  console.log(otherParam);
  console.log(restParams);
  return `Hello ${firstName} ${lastName}`;
}

const users = [user1, user2, user3];

// for (const { age } of users) {
//   console.log(age);
// }

for (const [key, value] of Object.entries(user1)) {
  console.log(`key - ${key}`);
  console.log(`value - ${value}`);
}
