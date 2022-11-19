// Criando e adicionando elementos

// createElement -> criando elementos
const div = document.createElement("div");
div.innerHTML = "<h1>Hello, world!</h1>";

const p = document.createElement("p");
p.innerHTML = "<strong>lorem ipsum paragraph</strong>";

// append prepend -> adiciona no HTML
const body = document.querySelector("body");
const header = document.querySelector("header");

body.prepend(div);
body.append(p);

// insertBefore(firstElement, lastElement)
const pHeader = header.querySelector("p");
header.insertBefore(div, pHeader.nextElementSibling);
