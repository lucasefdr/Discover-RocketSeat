/*

  Expressões e operadores

  -> Expressions
  -> Operators
    -> Binary
    -> Unary
    -> Ternary
*/

// expression
let number = 1;

// new -> cria um novo objeto
let name = new String("Lucas");
let age = new Number(24);

name.surName = "Eduardo";
console.log(name, age);

// unary -> typeof, delete
console.log(typeof "Lucas");

const person = {
  name: "Lucas",
  age: 24,
};

delete person.age; // deleta a propriedade do objeto
console.log(person);

// operators
let numberOne = 78;
let numberTwo = 44;

console.log("adição: " + (numberOne + numberTwo));
console.log("subtração: " + (numberOne - numberTwo));
console.log("multiplicação: " + numberOne * numberTwo);
console.log("divisão: " + numberOne / numberTwo);
console.log("módulo: " + (numberOne % numberTwo));
console.log("incremento: " + ++numberOne);
console.log("decremento: " + --numberOne);
console.log("exponencial: " + numberOne ** 2);
