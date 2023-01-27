//Se define una función anónima que se ejecuta cuando la página se carga completamente
//Se crea una variable "contador" y se asigna el valor de la cookie "contador" usando la función "getCookie".
window.onload = function () {
  var contador = getCookie("contador");

  /* Se comprueba si el contador es nulo (es la primera vez que se visita la página) y si es así, se establece una cookie llamada "contador" con un valor de 1.
  Si no es nulo, se incrementa el valor del contador en 1 y se establece el valor actual de la cookie "contador". */

  if (contador === null) {
    setCookie("contador", 1);
  } else {
    setCookie("contador", ++contador);
  }

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Visita actual → " + contador;

  /*  "setCookie" se utiliza para establecer un cookie con un nombre y un valor específicos, junto con una fecha de expiración (1 año a partir de la fecha actual) y una ruta de acceso "/". */
  function setCookie(name, value) {
    var d = new Date();
    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  /*"getCookie" se utiliza para obtener el valor de un cookie específico. */
  function getCookie(name) {
    var name = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
};
