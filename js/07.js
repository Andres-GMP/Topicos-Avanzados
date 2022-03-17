"use strict"

const persona = {
    nombre: 'Xenia',
    genero: 'Mujer',
    edad: 20
}

const mascota = {
    nombreMascota: 'PerroBonito',
    edadMascota: '14',
    raza: 'dragon'
}

const datosPaciente = {...persona,...mascota}
console.log(datosPaciente)