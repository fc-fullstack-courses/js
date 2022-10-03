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
