// Operador ternario
// Si la condición es verdadera ? se ejecuta esto : falso esto
// condicion ? ____________

const numero = 40
const valor = numero > 30 ? 'El número es mayor a 30' : 'El número es menor'

console.log(valor)

const edad = 1

// const anios = edad === 1 ? `Tienes ${edad} año` : `Tu edad es ${edad} años`
// const anioss = edad != 1 ? `Tienes ${edad} año` : `Tu edad es ${edad} años`

const metodoDePago = 'tarjeta'

switch(metodoDePago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta')
        break
    default: 
        console.log('Aún no has pagado')
        break
}



console.log(anioss)