// function hoisting
sayMyName();

// hoisting
function sayMyName() {
  console.log("Lucas");
}

// no hoisting
sayMyLastName();

const sayMyLastName = function () {
  console.log("Rosa");
};
