/*
  Exercício 1 - Notas escolares
*/

function getScore(score) {
  let scoreFinal;

  if (score >= 90) {
    scoreFinal = "A";
  } else if (score >= 80 && score < 90) {
    scoreFinal = "B";
  } else if (score >= 70 && score < 80) {
    scoreFinal = "C";
  } else if (score >= 60 && score < 70) {
    scoreFinal = "D";
  } else {
    scoreFinal = "F";
  }

  return scoreFinal;
}

const getScoreArrowFunction = (score) => {
  let scoreFinal;

  if (score >= 90) {
    scoreFinal = "A";
  } else if (score >= 80 && score < 90) {
    scoreFinal = "B";
  } else if (score >= 70 && score < 80) {
    scoreFinal = "C";
  } else if (score >= 60 && score < 70) {
    scoreFinal = "D";
  } else {
    scoreFinal = "F";
  }

  return scoreFinal;
};

console.log(getScore(77));
console.log(getScoreArrowFunction(96));
