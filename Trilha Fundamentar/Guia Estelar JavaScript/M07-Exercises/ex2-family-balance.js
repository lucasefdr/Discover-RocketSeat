/*
  Exercício 2 - Sistema de gastos familiar
*/

let family = {
  incomes: [2000, 3000, 100],
  expenses: [1000, 320, 500],
};

function sum(array) {
  let total = 0;

  for (let element of array) {
    total += element;
  }

  return total;
}

function calculateExpenses() {
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);

  const total = calculateIncomes - calculateExpenses;

  const itsOk = total >= 0;
  let balanceText = "negative";

  if (itsOk) {
    balanceText = "positive";
  }

  console.log(`Your balance is ${balanceText}: R$ ${total.toFixed(2)}`);
}

calculateExpenses();
