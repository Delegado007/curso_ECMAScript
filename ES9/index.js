const obj = {
  name: "franco",
  age: 27,
  country: "ARG",
};

let { name, ...all } = obj;
console.log(name, all); // output -> franco { age: 27, country: 'ARG' }
console.log(all); // output -> { age: 27, country: 'ARG' }

// propagacion
const obj1 = {
  name: "Franco",
  age: 27,
};

const obj2 = {
  ...obj1,
  country: "ARG",
};
console.log(obj2); // output -> { name: 'Franco', age: 27, country: 'ARG' }

//promise.finally cuando termina la promesa ejecuta algo
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Hello World");
        }, 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("termino"));

//regexData

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2022-04-17");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
