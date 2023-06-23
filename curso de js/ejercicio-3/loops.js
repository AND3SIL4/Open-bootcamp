// factorial-for.js
let factorial = 1;
for (let num = 2; num <= 10; num++) {
    factorial *= num;
}
console.log("El factorial de 10 es:", factorial, "con for");

// // factorial-while.js
let factorial = 1;
let num = 2;

while (num <= 10) {
  factorial *= num
  num++;
}
console.log("El factorial de 10 es: ", factorial, "con while");

// factorial-break.js 
let factorial = 1;
let num = 1;
BucleWhile: while (true) {
  if (num > 10) {
    break BucleWhile;
  }
  factorial *= num;
  num++
}
console.log(factorial);
