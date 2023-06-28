const names = 'Andres Felipe'
const las_name = 'Silva'

const full_name = {
  first: names,
  last: las_name,
}
console.log(full_name);

// Almacenamiento en sesion storage
sessionStorage.setItem('nombre', JSON.stringify(full_name))
// Almacenamiento en local storage
localStorage.setItem('nombre', JSON.stringify(full_name))
localStorage.removeItem('nombre')

// Conversion de objeto a tipo String 
let nombreJson = JSON.stringify(full_name)
// Funcion para calcular la expiracion de la cookie
function duracion_cookie(minutos) {
  let d = new Date();
  d.setTime(d.getTime() + (minutos * 60 * 1000))
  return d.toUTCString();
}
// Almacenamiento de informacion en la cookie con expiracion
document.cookie = 'nombre=' + nombreJson+ ';expires='+ duracion_cookie(2)