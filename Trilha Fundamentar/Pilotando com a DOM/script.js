// Manipulando conteúdo
// textContent, innerText, innerHTML
const element = document.querySelector("h1");
element.textContent = "Manipulando com textContent";

console.log(element.textContent);

const elementsP = document.querySelectorAll("p");

elementsP[0].innerText = "innerText";
elementsP[1].innerHTML = "<strong>innerHTML<strong>";

console.log(elementsP[0]);
console.log(elementsP[1]);

// input.value
const input = document.querySelector("input");
input.value = "new value";
console.log(input.value);

// setAttribute, getAttribute, removeAttribute -> manipulando atributos
const header = document.querySelector("header");
header.setAttribute("id", "my-header");
header.setAttribute("class", "light");

const headerWithId = document.querySelector("#my-header");
console.log(headerWithId);
console.log(headerWithId.getAttribute("id"));
console.log(headerWithId.getAttribute("class"));

headerWithId.removeAttribute("id");

console.log(headerWithId.getAttribute("id"));
