// Eventos
const print = () => console.log("print");

// Eventos do teclado
const input = document.querySelector("input");

// input.onkeyup = function () {
//   console.log("key up");
// };

// input.onkeydown = () => console.log("key down");

// addEventListener(event, function) -> 'ouvidor' de eventos
const h1 = document.querySelector("h1");
h1.addEventListener("click", () => console.log("click on h1"));
h1.addEventListener("mouseover", () => console.log("mouse over on h1"));

// argumento event
input.onmouseover = (event) => console.log(event);
input.onkeyup = (event) => console.log(event.key);
input.onkeydown = (event) => console.log(event.currentTarget)
input.onkeydown = (event) => console.log(event.currentTarget.value)