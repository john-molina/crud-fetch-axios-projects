import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as art } from "./aritmetica.js";
console.log("Archivos modulos.js");
console.log(PI, usuario);
console.log(art.sumar(3, 4));
console.log(art.restar(3, 4));
saludar();
let saludo = new Saludar();
saludo;
