// MÉTODOS DE FUNCIÓN

const reproductor = {
    reproducir: function(id){
        console.log(`reproduciendo... ${id}`)
    },
    pausar: function(){
        console.log("pausando...")
    },
    crearPlaylist: function(nombre){
        console.log(`Creando playlist num: ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproducir la playlist ${nomnbre}`)
    }

}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la canción ${id}`)
}

reproductor.reproducir(40);
reproductor.pausar();
reproductor.borrarCancion(35);
reproductor.crearPlaylist("Andrés")
reproductor.reproducirPlaylist('Mis favoritos')
