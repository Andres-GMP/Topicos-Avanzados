// ASYNC, AWAIT

function descargarClientes(){
    return new Promise (resolve => {
        console.log('Descargando clientes..., espere ...');

        setTimeout(()=> {
            resolve('Los clientes fueron descargados')

        // },Math.random()*5000)
        },5000)
    })
}
function descargarUltimosPedidos(){

    return new Promise (resolve => {
        console.log('Descargando pedidos..., espere ...');

        setTimeout(()=> {
            resolve('Los pedidos fueron descargados')
        // Milisegundos
        },3000)
    })
}

async function app(){
    try {
        // const clientes = await descargarClientes();
        // const pedidos = await descargarUltimosPedidos()
        // console.log(clientes);
        // console.log(pedidos);
        
        const resultados = await Promise.all([descargarClientes(), descargarUltimosPedidos()])
        
        console.log(resultados[0]);
        console.log(resultados[1]);
        // console.log(pedidos);
    } catch (error) {
        console.log(error);
    }
}

// async sincronizar las funciones, 

app()