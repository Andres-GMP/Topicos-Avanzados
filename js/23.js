// POO - CLASES

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

class carro {
    constructor(numLlantas, numPuertas, color, modelo, numCilindros){
            this.numLlantas = numLlantas
            this.numPuertas = numPuertas
            this.color = color
            this.modelo = modelo
            this.numCilindros = numCilindros
        }
        
        describirCarro(){
        return `Soy un carro de ${this.numLlantas} llantas , puertas: ${this.numPuertas},`
        }
    }

// const bici = new Vehiculo(4, 0, "azul")
const mazda = new carro(1,2,'Amarillo', 'Mazda 1990', 4)
// console.log(bici.describirVehiculo());
// bici.describirVehiculo()
console.log(mazda.describirCarro());