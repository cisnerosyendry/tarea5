/*if... else*/
document.getElementById("ejemplo-flujo").textContent = 
let .edad = 17;
if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

/* switch*/
let dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("Fin de semana");
    break;
  default:
    console.log("Día normal");
}

/*try/catch/throw*/
function dividir(a, b) {
  try {
    if (b === 0) throw new Error("No se puede dividir por cero");
    return a / b;
  } catch (error) {
    console.error(error.message);
  }
}
dividir(10, 0);

document.getElementById("ejemplo-bucles").textContent = for (let i = 0; i < 3; i++) {
  console.log("Iteración número " + i);
}

// while
let contador = 0;
while (contador < 3) {
  console.log("Contador: " + contador);
  contador++;
}

// do...while
let x = 0;
do {
  console.log("Valor de x: " + x);
  x++;
} while (x < 3);

document.getElementById("ejemplo-funciones").textContent = /* Definir y llamar función*/
function saludar(nombre) {
  return "Hola, " + nombre;
}
console.log(saludar("Yendry"));

/*Asignacion y comparacion*/
document.getElementById("ejemplo-operadores").textContent = 
let .a = 5;
let b = 10;
console.log(a == b);  // false
console.log(a < b);   // true

// Aritméticos
console.log(a + b);   // 15
console.log(b - a);   // 5

// Lógicos
let esEstudiante = true;
let tieneTarea = false;
console.log(esEstudiante && tieneTarea); // false
console.log(esEstudiante || tieneTarea); // true`;

/* Number*/
document.getElementById("ejemplo-numeros").textContent = 
let .num = Number("123");
console.log(num + 1);

// Math
console.log(Math.sqrt(16));
console.log(Math.random());

// Date
let hoy = new Date();
console.log(hoy.toDateString());

document.getElementById("ejemplo-texto").textContent = /* Cadenas literales*/
let .saludo = /*Hola, \${"Yendry"}!*/
console.log(saludo);

// String
let texto = "JavaScript";
console.log(texto.toUpperCase());
console.log(texto.length);

document.getElementById("ejemplo-arreglos").textContent = /* Arreglos*/
let .frutas = ["manzana", "banana", "uva"];
console.log(frutas[1]);

// Arreglos tipados
let numeros = new Int16Array([10, 20, 30]);
console.log(numeros[2]);

document.getElementById("ejemplo-dom").textContent = /* Por ID*/
let .titulo = document.getElementById("titulo");

// Por etiqueta
let parrafos = document.getElementsByTagName("p");

// Por clase
let destacados = document.getElementsByClassName("destacado");

// Por selector CSS
let boton = document.querySelector(".btn");

// Por colección HTML
let inputs = document.forms[0].elements;
