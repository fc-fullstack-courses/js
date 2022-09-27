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
