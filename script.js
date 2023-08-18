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

// Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку над ней появлялось значение ее атрибута href.

let link1 = document.createElement("a");
link1.href = "https://example1.com";
link1.innerText = "Link 1";

let link2 = document.createElement("a");
link2.href = "https://example2.com";
link2.innerText = "Link 2";

link1.style.margin = "20px";
link1.style.padding = "20px";
link1.style.display = "inline-block";

link2.style.margin = "20px";
link2.style.padding = "20px";
link2.style.display = "inline-block";

document.body.append(link1, link2);

let div = document.createElement("div");
document.body.append(div);

let links = document.querySelectorAll("a");

function showHref(event) {
  let hrefValue = event.target.getAttribute("href");
  let tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerText = hrefValue;
  event.target.appendChild(tooltip);
}

function hideHref(event) {
  let tooltip = event.target.querySelector(".tooltip");
  if (tooltip) {
    event.target.removeChild(tooltip);
  }
}

links.forEach((link) => {
  link.addEventListener("mouseover", showHref);
  link.addEventListener("mouseout", hideHref);
});

// Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.
let divsquare = document.createElement("div");
divsquare.classList.add("divsquare");
document.body.append(divsquare);

let paragraphWithNumber = document.createElement("p");
paragraphWithNumber.innerText = "5";
paragraphWithNumber.style.border = "5px solid black";
paragraphWithNumber.style.width = "100px";
paragraphWithNumber.style.height = "100px";

let btn = document.createElement("button");
btn.innerText = "Click on me to square the number";
btn.style.backgroundColor = "pink";
document.body.append(btn);
document.body.append(paragraphWithNumber);


function square() {
  let num = Number(paragraphWithNumber.innerText);
  let squared = num * num;
  paragraphWithNumber.innerText = squared.toString();
}
btn.addEventListener("click", square);

// Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.

for (let i = 0; i < 7; i++) {
  let par = document.createElement("p");
  par.classList.add("paragraph");
  par.innerText = Math.floor(Math.random() * 100);
  document.body.append(par);
}

let btn1 = document.createElement("button");
btn1.innerText = "click to get sum";
document.body.append(btn1);

let result = document.createElement("p");
result.classList.add("result");
document.body.append(result);

function getsum() {
  let sum = 0;
  let paragraphs = document.getElementsByClassName("paragraph");
  for (p of paragraphs) {
    sum += Number(p.innerText);
  }
  result.innerText = `sum of all numbers is ${sum}`;
}

btn1.addEventListener("click", getsum);

// Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.

let b = document.createElement("button");
document.body.append(b);
b.innerText = "click to get sum from 1 to 100";
b.addEventListener("click", getSumFrom1to100);

let p1 = document.createElement("p");
document.body.append(p1);

function getSumFrom1to100() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  p1.innerText = sum;
}

// Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.

for (let i = 0; i < 10; i++) {
  let p = document.createElement("p");
  p.innerText = `I'm paragraph ${i}`;
  document.body.append(p);
}

let div1 = document.createElement("div");
document.body.append(div1);

let btn2 = document.createElement("button");
document.body.append(btn);
btn2.innerText = "click for a number of paragraphs";

function getNumOfParagraphs() {
  let pars = document.querySelectorAll("p");
  let length = pars.length;
  div1.innerText = length.toString();
}

btn2.addEventListener("click", getNumOfParagraphs);

// Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.

for (let i = 0; i < 8; i++) {
  let par = document.createElement("p");
  document.body.append(par);
  par.classList.add("parWithNums");
}
let bt = document.createElement("button");
document.body.append(bt);
bt.innerText = "create paragraphs with numbers";

function fillParagraphsWithNumbers() {
  let pars = document.querySelectorAll(".parWithNums");
  let i = 1;
  for (const p of pars) {
    p.innerText = `${i}`;
    i++;
  }
}
bt.addEventListener("click", fillParagraphsWithNumbers);

// Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.

let link3 = document.createElement("a");
link3.href = "https://example1.com";
let link4 = document.createElement("a");
link4.href = "https://example2.com";
document.body.append(link3, link4);
let btn3 = document.createElement("button");
document.body.append(btn3);
btn3.innerText = "Click to get href in a console";

let hrefArray = [];
function getHref() {
  let links = document.querySelectorAll("a");
  for (l of links) {
    hrefArray.push(l.href);
  }
  console.log(hrefArray);
}
btn3.addEventListener("click", getHref);

// Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.

let link = document.createElement("a");
link.href = "https://example1.com";
document.body.append(link);
let p = document.createElement("p");
document.body.append(p);
let btn4 = document.createElement("button");
document.body.append(btn4);
btn4.innerText = "Click to get href on the screen";
let href = link.href;
function addHrefToParagraph() {
  p.innerText = href;
}
btn4.addEventListener("click", addHrefToParagraph);

// Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.

let div2 = document.createElement("div");
div2.style.width = "100px";
div2.style.height = "100px";
div2.style.border = "5px solid black"; // Здесь исправлена ошибка
document.body.append(div2);

let btn5 = document.createElement("button");
document.body.append(btn5);
btn5.innerText = "Click to enlarge";

btn5.addEventListener("click", function () {
  div2.style.width = parseInt(div2.style.width) * 2 + "px";
  div2.style.height = parseInt(div2.style.height) * 2 + "px";
});
