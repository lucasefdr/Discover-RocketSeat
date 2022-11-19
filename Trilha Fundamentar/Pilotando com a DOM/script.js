// Manipulando conteúdo
// textContent
const element = document.querySelector("h1");
element.textContent = "Manipulando com textContent";

console.log(element.textContent);

const elementsP = document.querySelectorAll("p");

elementsP[0].innerText = "innerText";
elementsP[1].innerHTML = "<strong>innerHTML<strong>";

console.log(elementsP[0])
console.log(elementsP[1])