// Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.

let link = document.createElement("a");
link.href = "https://example1.com";
document.body.append(link);
let p9 = document.createElement("p");
document.body.append(p9);
let btn4 = document.createElement("button");
document.body.append(btn4);
btn4.innerText = "Click to get href on the screen";
let href = link.href;
function addHrefToParagraph() {
  p9.innerText = href;
}
btn4.addEventListener("click", addHrefToParagraph);
