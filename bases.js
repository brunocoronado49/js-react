console.log('Hello World');

// variables y constantes
const nombre = 'Bruce';
const apellido = 'Coronado'
let edad = 25;
edad = 26;

console.log(nombre);
console.log(edad);

console.log(typeof(nombre));
console.log(typeof(edad));

const nombreCommpleto = `${nombre} ${apellido}`;
console.log(nombreCommpleto);

function getSaludo(nombre) {
    return `Hola ${nombre}`;
}

console.log(`Este es un saludo: ${getSaludo(nombre)}`);