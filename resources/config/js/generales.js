$(document).ready(function () {
    $("#lista_pantallas").on('click','.pantalla', function (){
        let ruta = $(this).attr('data-name');

        gral_cargar_pantalla(ruta);
    });

});

function gral_cargar_pantalla(ruta_pantalla){
    $("#contenedor").load(ruta_pantalla);
}