// Uso de arreglos: Crear arreglo
const numero = [10,20,30,40,50,60]

// Recorrer el arreglo con una función normal
console.log('Recorrido con funcion')
// forEach: Para cada elemento

numero.forEach(function(value){
    console.log(value)
   
})



 console.log("Hasta aquí imprime uno\n")

numero.forEach(num => console.log(num))

numero.forEach(function(num){
  console.log(num +'aqui ')  
})

// Agrega al final del arreglos
numero.push(90)


console.table(numero)

// Agregar el -10 y el 0 al inicio del arreglo 
numero.unshift(-10,0)

numero.pop(60)
// imprime el arreglo de una manera más bonita
console.table(numero)

//Quitta el del final
let ultimoNumero = numero.pop()
console.log(`El ultimo valor en el arreglo fue: ${ultimoNumero}`)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']

console.log(meses)

meses.splice(2,1)

let nuevosMeses = ['Diciembre', ...meses, 'Junio']
console.log(nuevosMeses)