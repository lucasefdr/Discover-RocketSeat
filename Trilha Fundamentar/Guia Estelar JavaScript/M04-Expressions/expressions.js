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
