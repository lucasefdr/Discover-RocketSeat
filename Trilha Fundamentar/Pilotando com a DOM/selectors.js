// getElementById() -> pegando o elemento HTML pelo ID
const element = document.getElementById("blog-title");
console.log(element);

// getElementsByClassName -> pegando os elementos pela classe
const elements = document.getElementsByClassName("class-name");
console.log(elements[0]);
console.log(elements[1]);

// getElementsByTagName -> pegando os elementos pela tag
const elementsByTag = document.getElementsByTagName("meta");
console.log(elementsByTag[0]);
console.log(elementsByTag[1]);
console.log(elementsByTag[2]);

// querySelector -> pegando os elementos pelo seletor
// retorna o primeiro que achar
const elementByQuerySelector = document.querySelector(".class-name");
console.log(elementByQuerySelector);

const elementsByQuerySelectorAll = document.querySelectorAll("p");
elementsByQuerySelectorAll.forEach((element) => console.log(element));
