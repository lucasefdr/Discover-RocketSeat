/*
    Scope 
*/

// var -> o var é global e também local, e poderá funcionar fora de um escopo de bloco
// conceito de hoisting -> puxar a variável undefined pra cima do código
console.log("existe x antes do bloco? ", x); // n

{
  var x = 0;
}

console.log("existe x depois do bloco? ", x); // s

// const e let -> são locais e só funcionam no escopo onde foram criadas
// console.log("existe x antes do bloco? ", a, b); // error

{
  let a = 0;
  const b = 2;
  console.log("existe x antes do bloco? ", a, b);
}

// console.log("existe x depois do bloco? ", a, b); // error

// se você declarar o let antes do escopo, pode usá-lo dentro e fora dele
let m = 1;

{
  {
    {
      {
        {
          m = 1997;
        }
      }
    }
  }
}

console.log(m);
