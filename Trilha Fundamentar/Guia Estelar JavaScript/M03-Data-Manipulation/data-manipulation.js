/*

  Manipulando Strings e Números

*/

let string = "123";
console.log(Number(string));
let number = 321;
console.log(String(number));

// tamanho da palavra - length
let word = "Tracejado";
console.log(word.length);

// quebrar casas decimais e trocar ponto por vírgula
let numberOne = 534.31635223;
console.log(Number(numberOne.toFixed(2)));
console.log(numberOne.toFixed(2).replace(".", ","));

// maiúsculas e minúsculas
let newWord = "JavaScript is very easy";
console.log(newWord.toLowerCase());
console.log(newWord.toUpperCase());

// split, join e includes
let text = "Today is very hot";
console.log(text.split(" "));
console.log(text.split(" ").join("_"));
console.log(text.includes("very"));

// criando array com constructor
let myArray = new Array(
  1,
  () => {
    return "hello, world";
  },
  "Lucas Eduardo",
  true
);
console.log(myArray);
console.log(myArray[1]());

// contar elementos do array
console.log(myArray.length);

// transformando uma cadeia de caracteres em um array
let wordTwo = "manipulation";
console.log(Array.from(wordTwo));

// manipulando arrays
let techs = ["html", "css", "js"];

// adicionando um item no fim
techs.push("java");
console.log(techs);

// adicionando um item no começo
techs.unshift("sql");
console.log(techs);

// removendo um item do final
techs.pop();
console.log(techs);

// removendo um item do começo
techs.shift("sql");
console.log(techs);

// pegando elementos do array
console.log(techs.slice(1, 3));

// remover um ou mais itens
techs.splice(1, 2);
console.log(techs);

// encontrar a posição de um elemento no array
techs.push("java");
let index = techs.indexOf("java");
console.log(index);
