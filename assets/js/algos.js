/*

  y = log x - логарифимическая
  y = k*x + b - линейная
  y = x^2 - квадратичная
  y = 2^x - експоненциальная
  y = x! - факториал

  x (n) - входные данные

  y = x^2 
  y = 2^x -плохой, чем быстрее растет сложность тем хуже

  O(2^n) - експоненциальная сложность алгоритма

*/

// O(1) - константная сложность
const arr = [10, 20, 30, 40];
const res = arr[2];

// O(n) - линейная сложность
function linearSearch(arr, searchItem) {
  for (let i = 0; i < arr.length; i++) {
    if (searchItem === arr[i]) {
      return i;
    }
  }

  return -1;
}

const arr2 = [7, 2, 8, 0, 1, 3, 5, 6, 9];
// O(n^2) - квадратичная сложность
function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    // цикл который передвигает большее число в конец
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        // меняем два значения местами в массиве
        const swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
  }

  return arr;
}
