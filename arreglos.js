// const arreglo = new Array();
const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo, 5];

console.log(arreglo);
console.log(arreglo2);

arreglo2.map(numero => {
    console.log(numero);
});