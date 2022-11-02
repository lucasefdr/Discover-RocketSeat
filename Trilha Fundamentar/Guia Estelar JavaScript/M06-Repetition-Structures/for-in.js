// for...in
let person = {
  name: "Lucas",
  weight: 80,
  age: 24,
};

// pega a propriedade do objeto
for (let property in person) {
  console.log(property);
  console.log(person["name"]);
  console.log(person.name);
  console.log(person[property]);
}
