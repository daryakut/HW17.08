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


