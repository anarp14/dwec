/************************
Validacione de los campos
*************************/

function validarDNI(){
    var elemento = document.getElementById("dni");
    if (/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[A-Z]$/.test(elemento.value)){
        return true;
    }else{
        elemento.value = "";
    }
    return false;
}

function validarNombre(){
    var elemento = document.getElementById("nombre");
    if (/^[a-zA-Z]+\s[a-zA-Z]+(\s[a-zA-Z]+){0,2}$/.test(elemento.value)){
        if (elemento.value != ''){
            return true;
        }
    }
    elemento.value = "";
    return false;
}

function validarFecha(){

    var elemento = document.getElementById("f-nacimiento");
    if (/^([0-2][0-9]|[3][01])\/([0][0-9]|[1][1-2])\/([0-9]{4})$/.test(elemento.value)){
       if (elemento.value != ''){
           return true;
        }
    }
    elemento.value = "";
    return false;
}


function validarEmail(){
    var elemento = document.getElementById("correo");

    if (/^[-_a-zA-Z0-9]{3,50}@[a-zA-Z]{3,50}\.[a-z]{2,3}$/.test(elemento.value)){

        if (elemento.value != ''){
            return true;
         }
    }
    elemento.value = "";
    return false;
}

function validarWebl(){

    var elemento = document.getElementById("pagweb");

    if (/^(http:\/\/)+([w]{3}\.)+[a-z0-9]+\.[a-z]{2,3}$/.test(elemento.value)){
        if (elemento.value != ''){
            return true;
         }
    }
    elemento.value = "";
    return false;
}
function validarPass(){
    var elemento = document.getElementById("password");

    if (/^.{8,10}$/.test(elemento.value)){
        if (elemento.value != ''){
            return true;
        }
    }
    elemento.value = "";
    return false;
}

function validarPassC(){
    console.log("Pass validada");
    var elemento1 = document.getElementById("password");
    var elemento2 = document.getElementById("passwordc");
    debugger;
    if (/^.{8,10}$/.test(elemento2.value)){
        if (elemento1.value === elemento2.value){
            if (elemento1.value != '' && elemento2.value != ""){
                return true;
            }
        }
    }
    elemento1.value = "";
    elemento2.value = "";
    return false;
}





function validar(){
    if(validarDNI() && validarNombre()&& validarFecha() && validarEmail()
       && validarWebl() && validarPass() && validarPassC()){
        console.log("correcto");
    }
}


/***********************************
    Fin de ña Vidacione de los campos
**************************************/




function iniciar(){

    document.getElementById("guardar").addEventListener('click', validar, false);
    document.getElementById("ver").addEventListener('click', () => {
        let pass = document.getElementById("password");
        let passc = document.getElementById("passwordc");
        (pass.type =="password")? pass.type= "text": pass.type= "password";
        (passc.type =="password")? passc.type= "text": passc.type= "password";

    });
}

window.onload = iniciar;
