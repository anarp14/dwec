const ocultar = document.getElementById("ocultar");
const mostrar = document.getElementById("mostrar");
const parrafo1 = document.getElementById("parrafo1");
const parrafo2 = document.getElementById("parrafo2");
const parrafo3 = document.getElementById("parrafo3");

ocultar.addEventListener("click", function () {
  let numParrafo = parseInt(
    prompt("¿Qué párrafo deseas ocultar (número)?", "")
  );

  switch (numParrafo) {
    case 1:
      parrafo1.style.visibility = "hidden";
      break;
    case 2:
      parrafo2.style.visibility = "hidden";
      break;
    case 3:
      parrafo3.style.visibility = "hidden";
      break;
    default:
      alert("Número de párrafo inválido");
  }
});

mostrar.addEventListener("click", function () {
  let numParrafo = parseInt(
    prompt("¿Qué párrafo deseas mostrar (número)?", "")
  );

  switch (numParrafo) {
    case 1:
      parrafo1.style.visibility = "visible";
      break;
    case 2:
      parrafo2.style.visibility = "visible";
      break;
    case 3:
      parrafo3.style.visibility = "visible";
      break;
    default:
      alert("Número de párrafo inválido");
  }
});
