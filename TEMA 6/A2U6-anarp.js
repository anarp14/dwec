const add = document.getElementById("add");
const borrar = document.getElementById("borrar");
const contenedor = document.getElementById("contenedor");

add.addEventListener("click", function() {
  const text = prompt("Escribe el texto para el nuevo nodo:");
  const newNode = document.createElement("div");
  newNode.textContent = text;
  contenedor.appendChild(newNode);
});

borrar.addEventListener("click", function() {
  const lastNode = contenedor.lastChild;
  if (lastNode) {
    contenedor.removeChild(lastNode);
  } else {
    alert("No hay más nodos que eliminar");
  }
});
