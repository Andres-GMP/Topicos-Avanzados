// POO

// OBJECT LITERAL
const producto = {
    nombre : 'Table',
    precio: 500
}

// OBJETO CONSTRUCTOR
// CUANDO EL OBJETO COMIENZA CON MAYUSCULA HACE REFERENCIA A UNA CLASE
function Producto(x, y){
    this.nombre = x
    this.precio = y
}

const producto2 = new Producto('TV', 5000);
const producto3 = new Producto('Laptop', 4500);

console.log(producto3)
