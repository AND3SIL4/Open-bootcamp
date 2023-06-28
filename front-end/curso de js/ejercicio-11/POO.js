class Student {
  constructor(nombre, asig) {
    this._nombre = nombre;
    this._asiganturas = asig;
  }
  // Obtener nombre
  get nombre() {
    return this._nombre;
  }
  // Mostrar nombre
  set nombre(new_name) {
    this._nombre = new_name;
  }
  // Obtener asignaturas
  get asig() {
    return this._asiganturas;
  }
  //Mostrar asignaturas
  set asig(asignaturas) {
    this._asiganturas = asignaturas;
  }
  obtendatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asig,
    };
  }
}

const estudiante = new Student("Andres  Felipe Silva", [
  "JavaScript",
  "HTML",
  "CSS",
]);
const mostar_datos = estudiante.obtendatos();
console.log(mostar_datos);
