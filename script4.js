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
