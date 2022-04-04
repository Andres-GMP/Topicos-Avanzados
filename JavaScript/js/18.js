
const carrito = [
    // Estos objetos tienen  2 propiedades
    {nombre : 'television', precio: 500},
    {nombre : 'sofa', precio: 200},
    {nombre : 'carro', precio: 30000},
    {nombre : 'compu', precio: 50000}
]

// Para acceder a cada uno de los elementos se accede por el indice
for(let i =0; i<carrito.length; i++)
console.log(carrito[i].nombre + '\t'+ carrito[i].precio)