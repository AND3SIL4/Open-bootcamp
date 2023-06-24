import { suma, multiplicacion } from "./controller.js";
import chalk from "chalk";

const suma_uno = suma(1, 2)
console.log(chalk.red(suma_uno));
const suma_dos = suma(4, 5)
console.log(chalk.blue(suma_dos));
const multiplicacion_sumas = multiplicacion(suma_uno, suma_dos)
console.log(chalk.green(multiplicacion_sumas));