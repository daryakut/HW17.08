// 1. Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
// Високосный год.
// Год, номер которого кратен 400, — високосный;
// Остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
// Остальные годы, номер которых кратен 4, — високосные [5].
// Все остальные годы — невисокосные.

function isleapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isleapYear(1900));

// Дан массив с числами:
// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

function reverseArray(arr) {
  for (let index = arr.length - 1; index >= 0; index--) {
    console.log(arr[index]);
  }
}
reverseArray([1, 2, 3, 4, 5]);

// Дан массив:
// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.

function deleteEmptyStrings(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "") {
      arr.splice(i, 1);
    }
  }
  return arr;
}
console.log(deleteEmptyStrings([1, "", 2, 3, "", 5]));

// Дан массив. Удалите из него каждый пятый элемент.
let arr = ["q", "q", "q", "q", "w", "q", "q", "q", "q", "w", "q", "q"];
function deleteEachFifthElement(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if ((i + 1) % 5 === 0) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
console.log(deleteEachFifthElement(arr));

// Дан следующий объект:
let obj = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  },
};
// Найдите сумму элементов этого объекта.

function getSumOfAllObjectsElenemts(obj) {
  let sum = 0;
  for (const parentKey in obj) {
    for (const childKey in obj[parentKey]) {
      sum += obj[parentKey][childKey];
    }
  }
  return sum;
}

console.log(getSumOfAllObjectsElenemts(obj));

// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
let array = [1, 5, 7, 10, 15, 34];
function devidedByFive(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 5 !== 0) {
      array.splice(i, 1);
    }
  }
  return array;
}
console.log(devidedByFive(array));

// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

function secondsToDays(seconds) {
  const secondsInDay = 60 * 60 * 24;
  let days = Math.floor(seconds / secondsInDay);
  return days;
}
console.log(secondsToDays(1234567));

// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр

function sumOfDigitsInNumber(num) {
  let sum = 0;
  while (num >= 10) {
    rest = Math.floor(num % 10);
    sum += rest;
    num = Math.floor(num / 10);
  }
  sum += num;
  return sum;
}

console.log(sumOfDigitsInNumber(104567));

// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

function isNumberPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
}
console.log(isNumberPrime(40));


