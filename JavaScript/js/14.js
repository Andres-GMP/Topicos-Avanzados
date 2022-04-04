

// LA FUNCTION AQUÍ TIENE ESA PALABRA
// const sumar = function (n1, n2) {
//     console.log(n1 + n2)
// }



const sumar = (n1,n2) => console.log(n1 + n2) 

// PRIMERA FORMA
// const cuadro = function(num){
//     console.log(num*num)
// }

// SEGUNDA FORMA
// const cuadro = (num) => console.log(num*num)

// TERCER FORMA
const cuadro = num => console.log(num*num)


const aprendiendo = tecnologia => console.log(`Estoy aprendiendo ${tecnologia}`)
aprendiendo('JavaScript')

const operaciones = (n1, n2) => {
    if(n1>n2){
        console.log('N1 es mayor que N2')
    }else{
        console.log('N2 es el mayor')
    }
}

operaciones(10,6)

sumar(20,30)