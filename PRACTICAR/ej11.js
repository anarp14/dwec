var dni = (names = fecha = email = pagina_web = password = "");
function comprobar(id, value) {
  if (value === "" || id === "") {
    return;
  }
  switch (id) {
    case "dni":
      if (!/^[0-9]{2}.[0-9]{3}.[0-9]{2}-[A-Za-z]{1}$/.test(value)) {
        alert("El DNI no cumple el formato");
        document.getElementById(id).value = "";
      } else {
        dni = value;
      }
      break;
    case "nombre":
      if (!/^[a-zA-Z]+\s[a-zA-Z]+(\s[a-zA-Z]+){0,2}$/.test(
        value
      )) {
        alert("El Nombre no cumple el formato");
        document.getElementById(id).value = "";
      } else {
        names = value;
      }
      break;
    case "fecha":
      if (!/^([0-2][0-9]|[3][01])\/([0][0-9]|[1][1-2])\/([0-9]{4})$/.test(value)) {
        alert("La fecha no cumple el formato");
        document.getElementById(id).value = "";
      } else {
        fecha = value;
      }
      break;
    case "email":
      if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value)) {
        alert("El email no cumple el formato");
        document.getElementById(id).value = "";
      } else {
        email = value;
      }
      break;
    case "pagina_web":
      if (!/^(http):\/\/www.[A-Za-z0-9]+.[a-z]+$/.test(value)) {
        alert("La url no cumple el formato");
        document.getElementById(id).value = "";
      } else {
        pagina_web = value;
      }
      break;
    case "password":
      if (!/^\w{8,10}$/.test(value)) {
        alert("La contraseña no cumple el formato");
        document.getElementById(id).value = "";
      } else {
        password = value;
      }
      break;
  }
}

function seeCookie() {
  cookie =
    document.cookie = `dni = ${dni}; nombre = ${names}; fecha = ${fecha}; email = ${email}; pagina_web = ${pagina_web}; password = ${password}`;
  alert(cookie);
}
