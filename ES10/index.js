//flat para aplanar niveles en array
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2)); // valor de profundidad 2
// output -> [ 1, 2, 3, 1, 2, 3, 1, 2, 3]
//flatMap
let array1 = [1, 2, 3];
console.log(array1.flatMap((value) => [value, value * 2]));
// output -> [ 1, 2, 2, 4, 3, 6 ]

//trim space saca espacios a string del final o comienzo
let hello = "      hello world";

console.log(hello);
console.log(hello.trimStart());

let hello1 = "hello world          ";
console.log(hello1);
console.log(hello1.trimEnd());
// se mejora el manejo de error para no llamar error en catch y ya poderlo usar igual
//es9
try {
} catch (error) {
  error;
}
//es10
try {
} catch {
  error;
}

//fromEntries pasa array a objeto con clave valor
let entries = [
  ["name", "Franco"],
  ["age", 27],
];
console.log(Object.fromEntries(entries));
// Output -> { name: 'Franco', age: 27 }

//objeto de tipo simbolo
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
