/*

*/
class MyArray {
  constructor() {
    this.length = 0;
  }

  push(...elems) {
    // добавить элементы в конец массива
    for(let i = 0; i < elems.length; i++) {
      this[this.length++] = elems[i];
    }
    //  возвращает новую длину массива
    return this.length;
  }
}
