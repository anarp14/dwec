var actividad = document.getElementById("content");
/**
 * Genera una tabla con los vehiculos
 * @param  {...any} vehiculos
 */
function crearTablaCoche(...vehiculos) {
  if (document.getElementById("tabla")) {
    actividad.removeChild(document.getElementById("tabla"));
  }
  var tabla = document.createElement("table");
  tabla.setAttribute("id", "tabla");

  var thead = document.createElement("thead");
  var tr = document.createElement("tr");
  const CABECERA = ["Marca", "Modelo", "Color", "Año de fabricación"];

  for (e of CABECERA) {
    var th = document.createElement("th");
    var nodoTexto = document.createTextNode(e);
    th.appendChild(nodoTexto);
    tr.appendChild(th);
  }

  thead.appendChild(tr);

  tabla.appendChild(thead);

  var tbody = document.createElement("tbody");

  for (let i = 0; i < vehiculos.length; i++) {
    var tr = document.createElement("tr");

    for (const key in vehiculos[i]) {
      if (typeof vehiculos[i][key] != "function") {
        var td = document.createElement("td");
        nodoTexto = document.createTextNode(`${vehiculos[i][key]}`);
        td.appendChild(nodoTexto);
        tr.appendChild(td);
      }
    }
    tbody.appendChild(tr);
  }
  tabla.appendChild(tbody);
  actividad.appendChild(tabla);
}

//Creamos los objetos
function Vehiculo(marca, modelo, color, ano_fab) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  this.ano_fab = ano_fab;
  this.arrancar = function () {
    let texto =
      "El coche de marca " +
      this.marca +
      " modelo " +
      this.modelo +
      " color " +
      this.color +
      " ha arrancado";
    console.log(texto);
  };
}

var coche1 = new Vehiculo("Ferrari", "Scaglietti", "Rojo", "2010");
var coche2 = new Vehiculo("BMW", "Z4", "Blanco", "2010");
var coche3 = new Vehiculo("Seat", "Toledo", "Azul", "1990");
var coche4 = new Vehiculo("Fiat", "500", "Verde", "1995");
var coche5 = new Vehiculo("Mercedes", "GLC SUV", "Plateado", "2022");

// listeners

document.getElementById("generarTabla").addEventListener("click", () => {
  crearTablaCoche(coche1, coche2, coche3, coche4, coche5);
});
