var original = "perro.jpg";
var nueva = "gato.jpg";

document.addEventListener("mousedown", () => {
  document.getElementById("imagen").src = nueva;
});

document.addEventListener("mouseup", () => {
  document.getElementById("imagen").src = original;
});
