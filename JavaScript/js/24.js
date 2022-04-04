// POO - CLASES - HERENCIA

class Vehiculo {
    
    constructor(numLlantas, numPuertas, color){
        this.numLlantas = numLlantas
        this.numPuertas = numPuertas
        this.color = color
    }

    describirVehiculo(){
        return `Soy un vehiculo de ${this.numLlantas} llantas`
        
    }
}

class carro extends Vehiculo{
    constructor(numLlantas, numPuertas, color, modelo, numCilindros){
            super(numLlantas, numPuertas, color)
            this.modelo = modelo
            this.numCilindros = numCilindros
        }
        
        describirCarro(){
        return `Soy un carro de ${this.modelo} llantas puertas ${this.numCilindros}`
        }
    }

const vehiculo = new Vehiculo(4,2,'amarillo')
const mazda = new carro(4,2,'amarillo','1990', 23)
// console.log(mazda.describirCarro());
console.log(vehiculo.describirVehiculo());
console.log(mazda.describirCarro());


