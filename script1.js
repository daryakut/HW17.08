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
