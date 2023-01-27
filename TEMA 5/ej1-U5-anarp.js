document.addEventListener("mousedown", function (event) {
    if (event.button === 0) {
      alert("Has pulsado el botón izquierdo.");
    } else if (event.button === 1) {
      alert("Has pulsado el botón central.");
    } else if (event.button === 2) {
      alert("Has pulsado el botón derecho.");
    }
  });
