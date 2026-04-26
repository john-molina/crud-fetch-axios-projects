export const PI = Math.PI;

export let usuario = "John";
let password = "qwerty";

const hello = () => console.log("Hola");

export default function saludar() {
  console.log("Hola modulos +ES6 soy una funcion");
}

export class Saludar {
  constructor() {
    console.log("Hola modulos +ES6 soy una clase");
  }
}
