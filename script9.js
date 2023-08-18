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
