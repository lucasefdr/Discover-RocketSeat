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

// split e join
let text = "Today is very hot";
console.log(text.split(" "));
console.log(text.split(" ").join("_"));
