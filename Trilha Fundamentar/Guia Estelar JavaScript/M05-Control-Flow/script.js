// throw -> lançar
function sayMyName(name = "") {
  if (name === "") throw "error message";

  // se der erro, não irá retornar
  console.log("after error");
}

// try...catch -> tentar...capturar
try {
  sayMyName();
} catch (error) {
  console.log(error);
}

console.log("after try...catch");
