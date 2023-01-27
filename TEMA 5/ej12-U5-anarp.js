/* selecciona todos los elementos de entrada de tipo texto en la página y recorre cada uno de ellos, agregando un evento change
y llamando a la función comprobar para cada uno de ellos
*/
document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('change' ,comprobar);
});

document.getElementById('ver').addEventListener('click', mostrarCookies);

/*Esta función es invocada cada vez que el usuario cambia el valor de un campo de entrada. La función obtiene el campo de entrada actual utilizando event.target,
obtiene el nombre y el valor del campo, y luego utiliza una estructura switch para seleccionar la expresión regular apropiada para ese campo en particular.
Luego, se llama a la función expresion(valor, expr, input) para validar el valor del campo. */
function comprobar(event) {
    let input = event.target,
        nombre = input.name,
        valor = input.value,
        expr;
    switch (nombre) {
        case "dni":
            expr = /^\d{2}.\d{3}.\d{2}-[A-Za-z]$/;
            break;
        case "nombre":
            expr =/^[a-zA-Z]+\s[a-zA-Z]+(\s[a-zA-Z]+){0,2}$/;
            break;
        case "fechaNacimiento":
            expr = /^([0-2][0-9]|[3][01])\/([0][0-9]|[1][1-2])\/([0-9]{4})$/;
            break;
        case "email":
            expr = /^[-_a-zA-Z0-9]{3,50}@[a-zA-Z]{3,50}\.[a-z]{2,3}$/;
            break;
        case "pagweb":
            expr = /^(http:\/\/)+([w]{3}\.)+[a-z0-9]+\.[a-z]{2,3}$/;
            break;
        case "contraseña":
        case "confirmarcontraseña":
            expr =/^.{8,10}$/;
            break;
    }
    expresion(valor, expr, input);

}
function expresion(valor, expr, input) {
    if(!expr.test(valor)){
        alert("Formato incorrecto para el campo " + input.name);
        input.value = "";
    }else{
        document.cookie = input.name+"="+input.value;
    }
}

/*Esta función se ejecuta cuando se hace clic en el botón "ver". Esta función muestra el contenido de las cookies guardadas mediante una alerta */
function mostrarCookies() {
   alert(document.cookie)
}
