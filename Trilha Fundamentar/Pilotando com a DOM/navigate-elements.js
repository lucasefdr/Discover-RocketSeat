// Navegando pelos elementos
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const header = document.querySelector("header");

// pegando o elemento 'pai'
console.log(body.parentNode); // html
console.log(h1.parentNode); // header
console.log(p.parentNode); // header

// pegando os elementos 'filhos' - NodeList
console.log(header.childNodes);

// primeiro 'filho'
console.log(header.firstChild);

// último 'filho'
console.log(header.lastChild);

// pegando o elemento 'filho' - HTMLCollection
console.log(header.children);
console.log(header.firstElementChild);
console.log(header.lastElementChild);

// buscando pelos 'irmãos'
console.log(h1.nextElementSibling);
console.log(p.previousElementSibling);
