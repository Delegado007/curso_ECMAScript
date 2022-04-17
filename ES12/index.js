//replace all
const string =
  "Javascript es maravilloso, con Javascript puedo crear el futuro de la web";

const replacedString = string.replace("Javascript", "Python");
console.log(replacedString);
// Output -> Python es maravilloso, con Javascript puedo crear el futuro de la web
const replacedString1 = string.replaceAll("Javascript", "Python");
console.log(replacedString1);
// Output -> Python es maravilloso, con Python puedo crear el futuro de la web

//metodos privados
class Message {
  #show(val) {
    // con # lo volvemos privado y anaccesible
    console.log(val);
  }
  get #add(val){
    ...
  }
}

const message = new Message();
message.show("Hola!");

//Promise any
const promise1 = new Promise((resolve, reject) => {
  reject("1");
})
const promise2 = new Promise((resolve, reject) => {
  resolve("2");
})

const promise3 = new Promise((resolve, reject) => {
  resolve("3");
})
// solo devuelve el primer valor de la primera promesa que se resuleva
Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response)) //Output -> 2

// cosa debil
class AnyClass {
  constructor(element) {
    this.ref = new WeakRef(element)
  }
  {...}
}

// operadores logicos nuevos

//Asignación AND lógico
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse)

//Asignación OR lógico
let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 ||= isFalse1)

//Asignación de anulación lógica
let isTrue2 = undefined;
let isFalse2 = false;
console.log(isTrue2 ??= isFalse2)

