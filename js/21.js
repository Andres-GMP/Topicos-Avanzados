// this en JAVA SCRIPT

//ESTE PERTENECE A EL CONTEXTO, ES DECIR, A WINDOW DONDE HACE REFERENCIA EL "this" QUE LEE EL CONTEXTO POR EL "arrow function"

window.nombre = 'Xenia'
window.precio = 50

const reservacion = {
    nombre: 'Pedro',
    appellido: 'Sola',
    total: 5000,
    pagado: false,
    informacion: function(){
        
        // LA SIGUIENTE LINEA DA UN ERROR POR NO SABER DESDE DONDE IMPRIMIR
        // console.log(`El cliente ${nombre} reservó y debe pagar ${total}`)
        
        // EN ESTE CASO LO SOLUCIONA PEROOO
        // console.log(`El cliente ${reservacion.nombre} reservó y debe pagar ${reservacion.total}`)

        console.log(this)
        console.log(`El cliente ${this.nombre} reservó y debe pagar ${this.total}`)
    }
}

const reservacion2 = {
    nombre: 'Andres',
    appellido: 'Sola',
    total: 5000,
    pagado: false,
    informacion: ()=>{
        // Aquí imprime 
        console.log(this)
        // "THIS" con el ARROW FUNCTION hace referencia a todo el contexto 
        console.log(`El cliente ${this.nombre} reservó y debe pagar ${this.total}`)
    }
}

console.log(reservacion.informacion())
console.log(reservacion2.informacion())