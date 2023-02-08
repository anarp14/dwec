
function existeActividad(){
    if (document.getElementById("actividad")){
        content.removeChild(document.getElementById("actividad"));
    }
    var divac = document.createElement("div");
    divac.setAttribute("id", "actividad");
    content.appendChild(divac);

}

 /**
 * Recibe una cadena como argumento (s) y devuelve la misma cadena con la primera letra en Mayúscula
 * @param {string} s
 * @returns {string}
 */
 function capitalize(s){
    return s.charAt(0).toLocaleUpperCase() + s.slice(1);
}
function capitalize(s){
   return s.charAt(0).toLocaleUpperCase() + s.slice(1);
}

function generaNueve(){

    const ALUMNOS = [];
    const NUMALUM = 5;

    /**
     * Genera la tabla de alumnos
     * @param {array} cabecera
     * @param {array} cuerpo
     */
    function crearTablaAlum(cabecera, cuerpo){
        if(document.getElementById("tabla")){
            actividad.removeChild(document.getElementById("tabla"))
        }
        var tabla = document.createElement("table");
        tabla.setAttribute("id", "tabla");

        var thead = document.createElement("thead");
        var tr = document.createElement("tr");

        for (e of cabecera){
            var th = document.createElement("th");
            var nodoTexto = document.createTextNode(capitalize(e));
            th.appendChild(nodoTexto);
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        tabla.appendChild(thead);

        // Genera el cuerpo de la tabla
        var tbody = document.createElement("tbody");
        for (fila of cuerpo){
            tr = document.createElement("tr");
            for (celda of fila){
                var td = document.createElement("td");
                nodoTexto = document.createTextNode(celda);
                td.appendChild(nodoTexto);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        //Finalmente, agrega la tabla al contenedor "actividad".

        tabla.appendChild(tbody);

        actividad.appendChild(tabla);

    }


    /**
     * Comprueba que ningun campo esté vacio
     * @param  {...any} re
     * @returns {boolean} true si hay alguno vacío
     */
    function comprobarRegistros(...re){
        let interruptor = false;
        re.forEach(e =>{
            if(e === ""){
                interruptor = true;
            }
        });
        return interruptor;
    }

    /**
     * Almacena a los alumnos y sus notas en un array llamado ALUMNOS
     */
    function guardarAlumno(){
       var nombre = document.getElementById("alumno").value;
       var modulo1 = document.getElementById("modulo1").value;
       var modulo2 = document.getElementById("modulo2").value;
       var modulo3 = document.getElementById("modulo3").value;

       //Si algun campo está vacío rompe la secuencia de la función, se muestra un mensaje de error.
       if (comprobarRegistros(nombre, modulo1, modulo2, modulo3)){
           alert("Ningún campo puede estar vacío")
           return;
       }

       //Si alguno de estos chequeos falla, se muestra un mensaje de error específico.

       if (isNaN(nombre) && !isNaN(modulo1, modulo2, modulo3)){

            if ([modulo1, modulo2, modulo3].every(e => e >= 0 && e <= 10)){

                //Si todos los chequeos son exitosos, se agrega el alumno a ALUMNOS y se limpian los campos de entrada.
                ALUMNOS.push([nombre,modulo1, modulo2, modulo3]);

                document.getElementById("alumno").value = "";
                document.getElementById("modulo1").value = "";
                document.getElementById("modulo2").value = "";
                document.getElementById("modulo3").value = "";

                if (ALUMNOS.length >= NUMALUM ){
                    alert("Todos los alumnos estan introducidos");
                    guardar.disabled = true;
                    generarTabla.disabled = false;
                }

            } else{
                alert("Error: Las notas deben estar comprendidas entre 0 y 10");
            }

       } else{
            if(!isNaN(nombre)){
                alert(`Dato incorreco: ${nombre} no es un nombre`);
            }
            if (isNaN(modulo1, modulo2, modulo3)){
                alert("Dato incorrecto: combruebe que en los modulos las notas sean números");
            }
       }


    }

    existeActividad();

    var actividad = document.getElementById("actividad");

    //creamos el formulario
    const FORMULARIO = ["alumno", "modulo 1", "modulo 2", "modulo 3"];

    FORMULARIO.forEach(e =>{
        //creacion del label

        //Crea un elemento "p" y un elemento "label"
        var p = document.createElement("p");
        var la = document.createElement("label");

        //el elemento label recibe un atributo "for" cuyo valor se establece con la función "replace" aplicada a la variable "e"
        la.setAttribute("for", e.replace(" ", ""));
        // se crea un nodo de texto con la función "document.createTextNode" y se añade al elemento label con el método "appendChild".
        nodoTexto = document.createTextNode(`${capitalize(e)}: `);
        la.appendChild(nodoTexto);
        //el elemento label se añade al elemento "p"
        p.appendChild(la);


        //creacion de los inputs

         //Crea un elemento "input"
        var inp = document.createElement("input");
        //el elemento input recibe un atributo "type" cuyo valor es "text"
        inp.setAttribute("type", "text");
        //el elemento input recibe un atributo "name" cuyo valor se establece con la función "replace" aplicada a la variable "e".
        //El método "replace" reemplaza todas las apariciones de un carácter de espacio en "e" con una cadena vacía, y el valor resultante se utiliza como valor para el atributo "name".
        inp.setAttribute("name", e.replace(" ", ""));
        //el elemento input recibe un atributo "name" cuyo valor se establece con la función "replace" aplicada a la variable "e"
        inp.setAttribute("id", e.replace(" ", ""));
        //el elemento inp se añade al elemento "p"
        p.appendChild(inp);

        //Metemos todo en el div
        actividad.appendChild(p);
    });

    //Generamos los botones para enviar

      //Crea un elemento "input"
    var guardar = document.createElement("input");
     //el elemento input (guardar) recibe un atributo "type" cuyo valor es "submit"
    guardar.setAttribute("type", "submit");
     //el elemento input (guardar) recibe un atributo "id" cuyo valor es "guardar"
    guardar.setAttribute("id", "guardar");
     //el elemento input (guardar) recibe un atributo "value" cuyo valor es "Guardar"
    guardar.setAttribute("value", "Guardar");
    actividad.appendChild(guardar);


    //Crea un elemento "input"
    var generarTabla = document.createElement("input");
    //el elemento input (generarTabla) recibe un atributo "type" cuyo valor es "submit"
    generarTabla.setAttribute("type", "submit");
    //el elemento input (generarTabla) recibe un atributo "id" cuyo valor es "generarTabla"
    generarTabla.setAttribute("id", "generarTabla");
    //el elemento input (generarTabla) recibe un atributo "value" cuyo valor es "Generar Tabla"
    generarTabla.setAttribute("value", "Generar Tabla");
    //el elemento input (generarTabla) recibe un atributo "disabled" cuyo valor es está vacio
    generarTabla.setAttribute("disabled", "");

    //Metemos todo en el div
    actividad.appendChild(generarTabla);

    // listeners

    //Añade listeners de eventos a elementos HTML con los valores de "id" "guardar" y "generarTabla"

    //El primer listener de eventos se adjunta al elemento "guardar" y activará la función "guardarAlumno" cuando ocurra el evento "click"
    document.getElementById("guardar").addEventListener('click', guardarAlumno);

    /****************************
     * El segundo listener de eventos se adjunta al elemento "generarTabla"
     * y activará una función arrow anónima que llama a la función "crearTablaAlum" con los argumentos "FORMULARIO"
     * y "ALUMNOS" cuando ocurra el evento "click"
     */
    document.getElementById("generarTabla")
            .addEventListener('click', () => {
                crearTablaAlum(FORMULARIO, ALUMNOS)
            });

}


//Botones para generar las actividades
var boton4 = document.getElementById("ej4");
var content = document.getElementById("content");

boton4.addEventListener("click", generaNueve);
