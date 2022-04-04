// Crear un objeto
const persona = {
    nombre:  'Xenia',
     genero: 'Mujer',
     edad: '20'
}
// ACCESO A DATOS POR PROPIEDAD
// 
console.log(persona.edad)
console.log(persona.genero)

console.log(persona["nombre"])

const {nombre, genero, edad} = persona

console.log('\n Acceso a datos por destruccturing ')
console.log(nombre)

//agregar propiedad al objeto
persona.peso = 30
console.log(persona.peso)
console.log(persona)


// ACCESO A DATOS USANDO DESTRUCTURING