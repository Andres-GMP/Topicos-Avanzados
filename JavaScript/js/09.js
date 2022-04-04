const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']


// En este caso hacemos un arreglo que contiene objetos

const carrito = [
    {nombre : 'television', precio: 500},
    {nombre : 'sofa', precio: 200},
    {nombre : 'carro', precio: 30000},
    {nombre : 'compu', precio: 50000}
]

// Una manera de revisar si está en el arreglo la palabra 'Marzo'
meses.forEach(function(mes){
    if(mes === 'Marzo'){
        console.log('Si esta')
    }
})


// Otra manera de revisar si está 'Marzo' en el arreglo
let resultado = meses.includes('Marzo')
console.log(resultado)

// Para buscar en un array con objetos
res = carrito.some(
    function(producto){
        return producto.nombre === ' sofa'
    }
)

console.log(res + 'some ')

// Se almacena en producto y revisa si contiene ese nombre
res = carrito.some(producto => producto.nombre === 'carro')

console.log(res + 'some <=')

// Contar los precios
res = carrito.reduce(
    function(total, producto){
        return total + producto.precio
    },0
    
)
console.log(res + ' reduce')

// Suma todos los calres del precio
res = carrito.reduce((total,producto) => total + producto.precio, 0)

console.log(res + ' reduce arrow')

// filtra para los valores del precio
resultado = carrito.filter(
    function(producto){
        return producto.precio > 1000
    }
)
console.log(resultado)

res = carrito.filter((producto) => producto.precio<1000 )
res = carrito.filter((producto) => producto.nombre === 'carro')

console.log(res)

