// Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.

let divsquare = document.createElement("div");
divsquare.classList.add("divsquare");
document.body.append(divsquare);

let btn9 = document.createElement("button");
btn9.innerText = "Click on me to square the number";
btn9.style.backgroundColor = "pink";
divsquare.append(btn9);

let paragraphWithNumber = document.createElement("p");
paragraphWithNumber.innerText = "5";
paragraphWithNumber.style.border = "5px solid black";
paragraphWithNumber.style.width = "100px";
paragraphWithNumber.style.height = "100px";
divsquare.append(paragraphWithNumber);

function square() {
  let num = Number(paragraphWithNumber.innerText);
  let squared = num * num;
  paragraphWithNumber.innerText = squared.toString();
}
btn9.addEventListener("click", square);
