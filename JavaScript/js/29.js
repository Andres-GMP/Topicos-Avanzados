
// FETCH API (literalmente es el API)
// AJAX: Permite enviar información al servidor u obtener información de un servidor
//      • Podemos obtener un archivo o una respuesta de un servidor (Texto o Json)
//      • Al igual que otros API's usa Promise y Await

// ¿Qué es Json?
//      • JSON → Javascript Object Notation
//     Un Jsoon puede ser creado en cualquier lenguaje y se puede consumir en JavaScript por medio de FetchAPI y poderlo mostrar en un sitio web
console.log("Hola mundo");    
// function obtenerEmpleados(){
//         // fetch('1.json')
//         const archivo = '1.json'
//         // const archivo = 'https://mercadito-flutter-default-rtdb.firebaseio.com/products.json'
//         // Con then, llamamos a la promesa
//         // Con fetch busca un endPoint a donde tu le digas
//         fetch(archivo)
//             // Se guardó en el RESULTADO lo que localizó 
//             .then(resultado => {
//                 // console.log(resultado)
//                 return resultado.json();
//                 // return resultado;
//             })
//             .then(datos => {
//                 console.log(datos)
//             })

//     }
function obtenerEmpleados(){
    const archivo = '1.json'
       fetch(archivo)
        .then(resultado => {
            return resultado.json();
        })
        .then(datos => {
            const {empleados} = datos
            console.log(empleados);
            empleados.forEach(element => {
                // Aquí imprime cada uno de los elementos del array
                console.log(element);
                // Aquí imprime cada uno de los elementos del array y ahora de cada objeto
                console.log(element.id, element.nombre, element.puesto);
            });
            
        })
        
}
    obtenerEmpleados();