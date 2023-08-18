// Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.

let link3 = document.createElement("a");
link3.href = "https://example1.com";
let link4 = document.createElement("a");
link4.href = "https://example2.com";
document.body.append(link3, link4);
let btn3 = document.createElement("button");
btn3.innerText = "Click to get href in a console";
document.body.append(btn3);

let hrefArray = [];
function getHref() {
  let links = document.querySelectorAll("a");
  for (l of links) {
    hrefArray.push(l.href);
  }
  console.log(hrefArray);
}
btn3.addEventListener("click", getHref);