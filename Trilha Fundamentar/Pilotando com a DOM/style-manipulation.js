// Alterando styles
// style
const bodyElement = document.querySelector("body");

// alterando estilo 
// bodyElement.style.backgroundColor = "#f9f3d2";
// console.log(bodyElement.style.backgroundColor);

// classList.add
bodyElement.classList.add("active", "green");

// classList.remove
bodyElement.classList.remove("active");
bodyElement.classList.remove("green");

// classList.toggle -> se existir, remove, se não, insere
bodyElement.classList.toggle("green");
