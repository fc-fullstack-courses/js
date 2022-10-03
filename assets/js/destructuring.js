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
        itemType: 'notebook',
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
  dimensions: { height },
  dimensions
} = table;

const tableHeight2 = `${value} ${unit}`;