
"use strict"

const persona = {
    nombre:  'Xenia',
     genero: 'Mujer',
     edad: '20'
}
// Así agregamos una propiedad a este objeto
persona.peso = 70
console.log(persona)

// Así se elimina 
delete persona.edad
console.log(persona)

// Congela el objeto
// Object.freeze(persona)
// console.log(persona)

// delete persona.genero
// console.log(persona)

Object.seal(persona)
// persona.nombre = 'Yelena'
delete persona.edad
console.log(persona)