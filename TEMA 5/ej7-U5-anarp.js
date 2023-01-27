document.addEventListener("DOMContentLoaded", function () {
    var image = document.getElementById("imagen");

    //La imagen no se ha cargado por un error
    image.addEventListener("error", function(){
        image.alt = "Error al cargar la imagen";
    });

    //La imagen no se ha cargado porque el usuario lo ha detenido
    image.addEventListener("abort", function(){
        image.alt = "Error al cargar la imagen";
    });

})
