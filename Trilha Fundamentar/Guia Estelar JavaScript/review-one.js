/*
    Variáveis e tipos de dados
*/

// declaração or declaration
var name;

// atribuição de valores or assignment
name = "Lucas";
let age, isHuman;

age = 24;
isHuman = true;

// tipo de dado ou data type
console.log(typeof name);
console.log(typeof age);
console.log(typeof isHuman);

console.log(name, age, isHuman);

// interpolando valores com template literals or template strings
console.log(`Name: ${name}
Age: ${age}
isHuman? ${isHuman}`);

// Object
const person = {
  name: "John",
  age: 28,
  weight: 77.8,
  isAdmin: true,
};

console.log(`${person.name} has ${person.age} years old.`);

// Array
const animals = ["Lion", "Monkey", "Cat", { name: "Dog", age: 12 }];

// Acessando valores no array
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3].name);
console.log(animals[3].age);
