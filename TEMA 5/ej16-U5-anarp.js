function iniciar(){

  document.getElementById("votar").addEventListener('click', votar);

  mostrarResultados();

}

window.onload = iniciar;


function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function mostrarResultados() {
    let total = getCookie("total") ? parseInt(getCookie("total")): 0;
    if(!total)return false;
    let ios = getCookie("ios") ? parseInt(getCookie("ios")): 0,
        and = getCookie("and") ? parseInt(getCookie("and")): 0,
        win = getCookie("win") ? parseInt(getCookie("win")): 0
        oth = getCookie("oth") ? parseInt(getCookie("oth")): 0,
        resultado = "";

    resultado = ((ios*100)/total).toFixed(2);
    document.getElementById("b_ios").value = resultado;


    resultado = ((and*100)/total).toFixed(2);
    document.getElementById("b_and").value = resultado;


    resultado = ((win*100)/total).toFixed(2);
    document.getElementById("b_win").value = resultado;


    resultado = ((oth*100)/total).toFixed(2);
    document.getElementById("b_oth").value = resultado;


}

function votar() {
    let input = document.querySelector('input[type="radio"]:checked');
    if(!input) return alert("Por favor seleccione uno");
    let id = input.id,
        total = getCookie("total") ? getCookie("total") : 0,
        votos = getCookie(id) ? getCookie(id) : 0;
    document.cookie = "total = "+ (parseInt(total)+1);
    document.cookie = id + " = "+ (parseInt(votos)+1);
    document.location.reload();
}
