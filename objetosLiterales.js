const persona = {
    nomrbe: 'Jill',
    apellido: 'Valentine',
    edad: 35,
    organizacion: 'STARS',
    direccion: {
        ciudad: 'Raccon City',
        pais: 'USA'
    }
};

console.log(persona);
console.log(persona.nomrbe);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.organizacion);

const persona2 = {...persona};
persona2.nomrbe = 'Claire';
persona2.apellido = 'Redfield';