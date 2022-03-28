// FOREACH

const carrito = [
    {nombre : 'television', precio: 500},
    {nombre : 'sofa', precio: 200},
    {nombre : 'carro', precio: 30000},
    {nombre : 'compu', precio: 50000}
]

// carrito.forEach(
//     function(producto){
//         console.log(producto)
//     }
// )
// AHORA EN ARROW FUNCTION

// forEach
const arreglo1 = carrito.forEach( producto => producto.nombre)
// Solo si quiero recorrer un arreglo


// map 
const arreglo2 = carrito.map( producto => producto.nombre)
// Da una posibilidad de sacar información para convertirlo en otro arreglo
console.log(arreglo1) // Undifenined: porque solo te regresa
console.log(arreglo2) // Te regresa un arreglo

const arreglo3 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`)
console.log(arreglo3)


