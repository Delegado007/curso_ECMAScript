// Object.entries pasa objectos a matrices
const data = {
  frontend: "Franco",
  backend: "Isabel",
  desing: "Ana",
};
// puede ser util para contar los elementos que tiene nuestro objeto
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
// [
//   [ 'frontend', 'Franco' ],
//   [ 'backend', 'Isabel' ],
//   [ 'desing', 'Ana' ]
// ]
// 3

//Object.value
const data2 = {
  frontend: "Franco",
  backend: "Isabel",
  desing: "Ana",
};
// Solo devuelve las asignaciones a cada clave de nuestro objeto
const values = Object.values(data2);
console.log(values);
//[ 'Franco', 'Isabel', 'Ana' ]
//padEnd y padStart agregan caracteres al comienzo o al final a un string
const string = "hello";
console.log(string.padStart(7, "hi")); //hihello -> output
// console.log(string.padStart(cantiCaracteresMax, "cadena para completar"));
console.log(string.padEnd(12, " --------")); // hello ------ -> output

//async y await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true //cambiar a false para ejecutar el reject
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
anotherFunction();

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};
helloAsync();
