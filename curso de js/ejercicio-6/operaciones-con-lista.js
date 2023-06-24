let compra = ["Arroz", "Leche", "Fruta", "Comida perro", "Pan"];
compra.push("Aceite de Girasol");
compra.pop();
let pelicula_1 = {
  titulo: "Avengers End Game",
  director: "Anthiony Russo",
  fecha: 2019,
};
let pelicula_2 = {
  titulo: "8 Mile",
  director: "Curtis Hanson",
  fecha: 2002,
};
let pelicula_3 = {
  titulo: "Avatar el camino del agua",
  director: "James Cameron",
  fecha: 2022,
};
let peliculas = [pelicula_1, pelicula_2, pelicula_3];
// let peliculas_pósteriores =  peliculas.filter(function (pelicula) {
//   let fecha_despues = 2010;
//   return pelicula.fecha > fecha_despues;
// })
// console.log(peliculas_pósteriores)

let otra_manera = peliculas.filter((valor) => valor.fecha > 2010);
console.log(otra_manera);

let autores = peliculas.map((valor) => valor.director);
console.log(autores);

let titles = peliculas.map((valor) => valor.titulo);
console.log(titles);

let nueva_lista = autores.concat(titles);
console.log(nueva_lista);

let propagacion = [...autores, ...titles];
console.log(propagacion);

