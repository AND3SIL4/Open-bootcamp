// Tipos de datos
const nombre = "Andres Felipe Silva";
const edad = 21;
const isDeveloper = true;
const nacimiento = new Date(2002, 4, 6);
const fechaNacimiento = nacimiento.getFullYear();
const anyoLibro = new Date(2003, 0);
const fechaLibro = anyoLibro.getFullYear();

const libroFavoito = {
  title: "Onze minutos",
  author: "Paulo Coelho",
  date: fechaLibro,
  ur: "https//google.com"
}

const listElements = [
  nombre,
  edad,
  isDeveloper,
  fechaNacimiento,
  libroFavoito
]

// Bucle for
for(let i = 0; i < listElements.length; i++){
  console.log(listElements[i]);
}

// Bucle for of
for (const i  of listElements) {
  console.log(i);
}

// Bucle for each
listElements.forEach(i => {
  console.log(i);
});

// Bucle for in 
for (const i in listElements) {
  console.log(listElements[i]);
}

// Bucle while
let num1 = 0;
let num2 = 10;

while (num1 < num2) {
  console.log(num1);
  num1++
  break
}

// Bucle do while
do {
  console.log(num1);
  num1++
} while (num1 < num2);

