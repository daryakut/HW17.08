// Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.

for (let i = 0; i < 10; i++) {
  let p = document.createElement("p");
  p.classList.add("pScript5");
  p.innerText = `I'm paragraph ${i}`;
  document.body.append(p);
}

let div1 = document.createElement("div");
document.body.append(div1);

let btn2 = document.createElement("button");
document.body.append(btn2);
btn2.innerText = "click for a number of paragraphs";

function getNumOfParagraphs() {
  let pars = document.querySelectorAll(".pScript5");
  let length = pars.length;
  div1.innerText = length.toString();
}

btn2.addEventListener("click", getNumOfParagraphs);
