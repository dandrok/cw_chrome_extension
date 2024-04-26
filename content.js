const desiredValue = 4829;

let currentURL = window.location.href;

setInterval(() => {
  if (window.location.href !== currentURL) {
    console.log("interval ok");
    currentURL = window.location.href;
    location.reload();
  }
}, 1000); // Check every second

const textValue = document.querySelector("div.ml-10px.is-inline").textContent;
const value = Number(textValue.replace(",", ""));

const items = document.querySelector(".items");
const newLi = document.createElement("li");
newLi.classList.add("item-list");

newLi.textContent = `${desiredValue - value}`;
items.appendChild(newLi);
newLi.style.marginTop = "2px";
newLi.style.borderLeft = "solid 1px #e5e5e5";
