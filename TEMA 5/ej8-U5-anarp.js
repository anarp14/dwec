//seleccionar un elemento de una lista de días en el formulario, basado en el valor que se pasa como parámetro.
function Dia_Preferente(value) {
  var dias = document.getElementById("dia_preferente");
  for (element of dias) {
    if (element.value == value) {
      element.setAttribute("selected", "");
    }
  }
}

function cambiarColorFondo(color) {
  document.body.style.backgroundColor = color.id;
}
document.forms[0].addEventListener('submit',(x) => {
    select();
 });

function select() {
    var seleccionado = document.querySelector('select').value;
    switch (parseInt(seleccionado)) {
        case 1:
            alert("Se enviará a Ana");
            break;
        case 2:
            alert("Se enviará a Paco");
            break;
        case 3:
            alert("Se enviará a Pepe");
            break;
        case 4:
            alert("Se enviará a María");
            break;
        case 5:
            alert("Se enviará a Paula");
            break;
        case 0:
            alert("Por favor, seleccione una asignatura");
            break;

    }
}
