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
