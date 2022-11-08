/*
  Exercício 3 - Celsius em Fahrenheit
*/

let celsius;
let fahrenheit;

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificado");
  }

  // fluxo ideal F -> C
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let degreeSign = "C";

  // fluxo alternativo
  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => (celsius * 9) / 5 + 32;
    degreeSign = "F";
  }

  return formula(updatedDegree).toFixed(2) + degreeSign;
}

try {
  console.log(transformDegree("10C"));
} catch (error) {
  console.log(error.message);
}
