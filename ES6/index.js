//parametros por defecto
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

//es6
function newFunction2(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunction();
newFunction2("Ricardo", "50", "CO");

//template literals
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//multilinea
let lorem =
  "Lorem Ipsum is simply dummy text of the printing \n" +
  "and typesetting industry.";
console.log(lorem);
//es6
let lorem2 = `otra frase epica que necesitamos
y seguimos abajo`;
console.log(lorem2);
//destructuracion de objetos
let person = {
  name: "oscar",
  age: 32,
  country: "mx",
};
console.log(person.name, person.age);

let { country } = person;
console.log(country);
//operador de propagacion
let team1 = ["oscar", "Julian", "Ricardo"];
let tema2 = ["Valeria", "Yesica", "camila"];

let education = ["David", ...team1, ...tema2];
console.log(education);

//let y su scope
{
  var globalVar = "Global var"; //disponible de forma global
}
{
  let globalLet = "Global Let";
  console.log(globalLet);
}
console.log(globalVar); //let inaccesible desde afuera

const a = "b";
a = "b"; // no prmite la reasignacion a una constante
console.log(a);

// propiedad de objetos mejorada
let name = "Franco";
let age = 32;
//es5
obj = { name: name, age: age };
obj2 = { name, age };
//es6
console.log(obj);
console.log(obj2);

//arrow function
const names = [
  { name: "Franco", age: 27 },
  { name: "Yesica", age: 27 },
];
//es5
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
//es6
let listOfNames2 = names.map((item) => console.log(item.name));
const listOfNames3 = (name, age, country) => {
  console.log("bloque de codigo a ejecutar");
};

const listOfNames4 = (name) => {
  console.log("bloque de codigo");
};

const square = (num) => num * num;

// promesas para trabajar asincronismo
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      //cambia a false para mandar a reject
      resolve("Hey!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//clases
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
  res(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA - this.valueB;
  }
}
const calc = new calculator();
console.log(calc.sum(2, 3));
const calc1 = new calculator();
console.log(calc1.res(2, 3));

//export and imports
const hello = require("./module");
console.log(hello());

//Generadores, recuerda cual fue el ultimo bloque que se ejecuta y con next pasa al siguiente
function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
