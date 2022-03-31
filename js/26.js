// PROMISES

const usuarioAutoentificado = new Promise((resolve, reject)=>{
    const auth = true
    if (auth){
        resolve('Usuario autoentificado') //El PROMISE se cumple
    }else{
        reject('No se puede iniciar sesión') //El PROMISE no se cumple
    }
})

// console.log(usuarioAutoentificado);

usuarioAutoentificado
    .then (resultado=> console.log(resultado))
        .catch(error => console.log(error));
// .then (
//         function(resultado){
//             // console.log('Este mensaje es desde la promesa');
//             console.log(resultado);
//         }
//         )

        // .catch(
        //     function (error) {
        //         console.log(error);
        //     }
        // )

// En los Promise existen 3 valores
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fullfiled: Ya se cumplió
// Rejected: No se cumplió