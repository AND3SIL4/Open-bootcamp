let object = {
  nombre: "Andres Felipe",
  apellido: "Silva",
  edad: 21,
  altura: 182,
  isDeveloper: true,
};
let edad = object.edad;

let amigos = [
  {
    nombre: "Steven",
    apellido: "Bustos",
    edad: 20,
    altura: 170,
    isDeveloper: true,
  },
  {
    nombre: "Daniel",
    apellido: "Ramos",
    edad: 19,
    altura: 160,
    isDeveloper: false,
  },
];
amigos.unshift(object);

console.log(amigos.sort((a, b) => a.edad - b.edad));
