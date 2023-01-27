// 10)Día preferente aquel que se haya marcado como disponible. Si marca varios, que coja el último.

function Dia_Preferente(value){
    var opciones = document.getElementById("dia_preferente");
    for (elemento of opciones){
        if(elemento.value == value){
            elemento.setAttribute("selected",'');
        }
    }
}



//11) Según el color de icono seleccionado, cambie el color de fondo del formulario

function cambiar_fondo(value){
    document.getElementById("formulario").style.backgroundColor =value;
}


document.getElementById("formulario").addEventListener('submit', enviar_correo);

// 9)Enviar cuestionario a un profsor distinto según asignatura


function enviar_correo(){
    var opcion = document.getElementById("asignatura").value;
    switch(parseInt(opcion)){
        case 1:
            alert("Se enviará a Ana");
            break;
        case 2:
            alert("Se enviará a Pepe");
            break;
        case 3:
            alert("Se enviará a Paquito");
            break;
        case 0:
            alert("Slecciona una asignatura");
            break;
    }
}
