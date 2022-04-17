//big Int

const aBigNumber = 9007199254740991n; //primer forma
const anotherBigNumber = BigInt(9007199254740991); //sengunda forma

console.log(aBigNumber);
console.log(anotherBigNumber);

//promise all solve
const promise1 = new Promise((resolve, reject) => {
  reject("reject");
});
const promise2 = new Promise((resolve, reject) => {
  resolve("resolve");
});
const promise3 = new Promise((resolve, reject) => {
  resolve("resolve1");
});

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);
//Output ->
// [
//   { status: 'rejected', reason: 'reject' },
//   { status: 'fulfilled', value: 'resolve' },
//   { status: 'fulfilled', value: 'resolve1' }
// ]

console.log(window);
console.log(globalThis); //averiguar mas de esto

// operador nulo o valor default
const fooo = null ?? "default string";
console.log(fooo);

const fooo1 = "null" ?? "default string";
console.log(fooo1);

// optional chaining
const user = {};

console.log(user?.profile?.email); // con esta manera retorna undefined
//console.log(user.profile.email); // de esta forma se rompe el codigo y crashea

if (user?.profile?.email) {
  console.log("email");
} else {
  console.log("fail");
}
