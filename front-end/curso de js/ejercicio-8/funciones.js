// funciones normales sin parametros
function siempre_true() {
  return true;
}
console.log(siempre_true());

const otra_siempre_true = () => {
  return true;
};
console.log(otra_siempre_true());

// funciones asincronas y promesas
const miPromsesa = new Promise((resolve, reject) => {
  let number = 9;
  if (number < 10) {
    resolve()
  } else {
    reject()
  }
})
setTimeout(() => {
  miPromsesa
  .then(() => console.log(`Success...`))
  .catch(() => console.log(`Error...`))
}, 3000)
// ejemplo de uso setTimeout
setTimeout(() => {
  let name = 'Andres'
  console.log(`Hola mi nombre es ${name}`);
}, 30000)

// funciones generadoras
function* generadorIndices() {
  let indice = 0;
  while (true) {
    indice++;
    // if (indice > 10) {
    //   return indice
    // }
    yield indice;
  }
}
// instanciar la funcion
const result = generadorIndices();
// invocacion de funcion generadora, funcion de tipo objeto
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
