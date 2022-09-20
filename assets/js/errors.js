function multiply(num1, num2) {
  if (
    typeof num1 === 'number' &&
    typeof num2 === 'number' &&
    !isNaN(num1 - num2)
  ) {
    // все хорошо
    return num1 * num2;
  }
  // все плохо
  throw new TypeError('Incorrect parameters, expected two numbers');
}

const user = {
  name: 'Test',
  salary: 'three thousand',
  monthsOfPayment: 4,
};

const newPayment = multiply(user.salary, user.monthsOfPayment);


// throw 1235445;


alert(`You have been payed ${newPayment} $`);

/*
Error - базовая ошибка
RangeError - ошибка, при выходе за некоторый диапазон
TypeError - значение некорректного типа

EvalError - связано с eval()
InternalError - ошибка мозилы 
ReferenceError - обращение к несуществующей переменной
SyntaxError - ошибка, возникающая при попытке интерпретировать синтаксически неправильный код
URIError - ошибки связанные с адресом (URL/ URI)
*/
