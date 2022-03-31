
const boton = document.querySelector('#boton');

// boton.addEventListener('click', ()=>{console.log('Bienvenido a JS')})

// boton.addEventListener('click', ()=>{
//     Notification.requestPermission()
// });



boton.addEventListener('click', ()=>{
    Notification.requestPermission().then(resultado => console.log(resultado))
});

if(Notification.permission == 'granted'){
    new Notification('Esta es una notificación', {
        icon: 'images\caja.png',
        body: 'El Andrés aprende a programar'
    })
}

// Escuchar eventos