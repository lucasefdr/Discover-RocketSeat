/*
  Function() constructor

  -> expressão new
  -> criar um novo objeto
  -> this keyword
*/

function Person(name) {
  // propriedades
  this.name = name;
  // métodos
  this.walk = () => {
    return this.name + " está andando...";
  };
}

// criando um novo objeto
const lucas = new Person("Lucas");
console.log(lucas);
console.log(lucas.walk());
const eduardo = new Person("Eduardo");
console.log(eduardo);
console.log(eduardo.walk());
