
/**
 * Crea el contenedor de la actividad si no existe
 * Si existe lo borra para generar uno nuevo
 */

//verifica si existe un elemento con el ID "actividad" en la página (con el if). Si existe lo elimina.
function existeActividad(){
    if (document.getElementById("actividad")){
        content.removeChild(document.getElementById("actividad"));
    }

    // Crea el contenedor de la actividad
    //Crea un nuevo elemento div con el ID "actividad" y lo agrega al elemento "content".
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

/**
 * La función utiliza el método charAt para obtener la primera letra de la cadena y convertirla a mayúscula mediante toLocaleUpperCase.
 *  Luego, concatena el resto de la cadena utilizando el método slice a partir de la segunda letra.
 */

/************************************
*
* Actividad 6
*
************************************/
function generaNueve(){

    const ALUMNOS = [];
    const NUMALUM = 5;

    /************************************
     *
     * FUNCIONES LOCALES A LA ACTIVIDAD
     *
     ************************************/
    /**
     * Genera la tabla de alumnos
     * @param {array} cabecera
     * @param {array} cuerpo
     */
    function crearTablaAlum(cabecera, cuerpo){
        //verifica si ya existe una tabla con el ID "tabla". Si existe la elimina.
        if(document.getElementById("tabla")){
            actividad.removeChild(document.getElementById("tabla"))
        }
        //crea un elemento table con el ID "tabla" y agrega una cabecera y un cuerpo a la tabla.
        var tabla = document.createElement("table");
        tabla.setAttribute("id", "tabla");

        //La cabecera y el cuerpo son generados a partir de dos arrays pasados como argumentos a la función crearTablaAlum
        //La cabecera se crea utilizando elementos th y el cuerpo utilizando elementos td.

        // genera la cabecera de la tabla
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
     *
     *  La función utiliza una variable interruptor inicializada en false que cambiará a true si se encuentra algún argumento vacío.
     *  utiliza el método forEach para recorrer los argumentos y comprobar si alguno es una cadena vacía.
     *  Finalmente, la función devuelve el valor de interruptor.
     *
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

       // comprueba si los campos esán en el tipo adecuado
       //Se verifica que el nombre sea una cadena de caracteres y que las notas (modulo1, modulo2 y modulo3) sean números entre 0 y 10.

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


    /************************************
     *
     * CREA EL CONTENIDO DE LA ACTIVIDAD
     *
     ************************************/

    // Combrobamos que no existe el contenedor de la actividad si existe lo borramos
    existeActividad();

    var actividad = document.getElementById("actividad");



    //Crea el enunciado

    //Crea un elemento "blockquote" y un nodo de texto con el enunciado de la actividad
    var enunciado = document.createElement("blockquote");
    var nodoTexto = document.createTextNode("9. Crear una array multidimensional que recoja los nombres de 5 alumnos y las notas obtenidas en tres módulos. Dicha información será introducida por el usuario y una vez finalizada la recogida de datos se mostrará el contenido del array en forma de tabla.");
    // el nodo de texto se añade al elemento "blockquote"
    enunciado.appendChild(nodoTexto);
    //el elemento "blockquote" se añade a un elemento con id "actividad"
    actividad.appendChild(enunciado);

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


/************************************
*
* Actividad 10 unidad 4
*
************************************/
function generaTrece(){

    existeActividad();
    var actividad = document.getElementById("actividad");



    //Crea el enunciado

    // crea un elemento HTML "blockquote" y establece su contenido de texto en la siguiente cadena.
    var enunciado = document.createElement("blockquote");
    var nodoTexto = document.createTextNode("13. Utilice el código empleado para la generación de las instancias del objeto Vehículo, y modifíquelo para que los valores de cada una de sus propiedades se impriman en una tabla HTML. Utilice la generación de código HTML desde código JavaScript. Cada instancia del objeto debeocupar una línea y el valor de cadapropiedad debe ocupar una celda de dicha línea. El resultado debe ser similar a:");
    //El elemento "blockquote"(enunciado) se agrega luego a un elemento HTML con el "id" de "actividad"
    enunciado.appendChild(nodoTexto);
    actividad.appendChild(enunciado);

     //Crea un elemento "input"
    var generarTabla = document.createElement("input");
     //el elemento input (generarTabla) recibe un atributo "type" cuyo valor es "submit"
    generarTabla.setAttribute("type", "submit");
    //el elemento input (generarTabla) recibe un atributo "id" cuyo valor es "generarTabla"
    generarTabla.setAttribute("id", "generarTabla");
     //el elemento input (generarTabla) recibe un atributo "value" cuyo valor es "Generar Tabla"
    generarTabla.setAttribute("value", "Generar Tabla");
    actividad.appendChild(generarTabla);

    /*************************
     * Funciones locales
     *
     *************************/

     /**
      * Genera una tabla con los vehiculos
      * @param  {...any} vehiculos
      */
    function crearTablaCoche(...vehiculos){
        debugger;

        //Se comprueba si existe el elemento con id "tabla". Si existe lo elimina.
        if(document.getElementById("tabla")){
            actividad.removeChild(document.getElementById("tabla"))
        }
        //Crea el elemento tabla.
        var tabla = document.createElement("table");

        //el elemento tabla recibe un atributo "id" cuyo valor es "tabla"
        tabla.setAttribute("id", "tabla");

        // genera la cebecera de la tabla

        //Se crea un elemento "thead" y un elemento "tr"
        var thead = document.createElement("thead");
        var tr = document.createElement("tr");
        const CABECERA = ["Marca", "Modelo", "Color", "Año de fabricación"];

        //Se itera sobre cada elemento del arreglo "CABECERA".Por cada elemento, se crea un elemento "th" y se asigna un nodo de texto con el título correspondiente.
        for (e of CABECERA){
            var th = document.createElement("th");
            var nodoTexto = document.createTextNode(e);
            th.appendChild(nodoTexto);
             //El elemento "th" se agrega al elemento "tr".
            tr.appendChild(th);
        }
         //El elemento "tr" se agrega al elemento "thead"
        thead.appendChild(tr);
        //el elemento "thead" se agrega a la tabla.
        tabla.appendChild(thead);

        // Genera el cuerpo de la tabla
        var tbody = document.createElement("tbody");

         for (let i = 0; i < vehiculos.length; i++){
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
    function Vehiculo(marca, modelo, color,ano_fab){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ano_fab = ano_fab;
        this.arrancar = function(){
                let texto = "El coche de marca " +  this.marca
                + " modelo " + this.modelo
                + " color " + this.color
                + " ha arrancado";
        console.log(texto);
        }
    }
    //Introducimos 4 vehículos diferente.
    var coche1 = new Vehiculo("Ferrari", "Scaglietti", "Rojo", "2010");
    var coche2 = new Vehiculo("BMW", "Z4", "Blanco", "2010");
    var coche3 = new Vehiculo("Seat", "Toledo", "Azul", "1990");
    var coche4 = new Vehiculo("Fiat", "500", "Verde", "1995");

    // listeners

    // el listener de eventos se adjunta al elemento "generarTabla"
    // activará una función arrow anónima que llama a la función "crearTablaCoche" con los argumentos (coche1,coche2,coche3 y coche4)
    // cuando ocurra el evento "click"

    document.getElementById("generarTabla")
            .addEventListener('click', () => {
                crearTablaCoche(coche1, coche2, coche3, coche4)
            });

}

//Botones para generar las actividades
var boton6 = document.getElementById("ej6");
var boton10 = document.getElementById("ej10");
var content = document.getElementById("content");

boton6.addEventListener("click", generaNueve);
boton10.addEventListener("click", generaTrece);
