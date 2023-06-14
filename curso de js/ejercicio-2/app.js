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

for(let i = 0; i < listElements.length; i++){
  console.log(listElements[i]);
}