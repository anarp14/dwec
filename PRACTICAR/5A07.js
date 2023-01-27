function error(){
    document.getElementById("coment").innerHTML = "Ha habido un error en la imagen";
}
var img = document.getElementsByTagName("img")[0];
img.addEventListener('error', error);
img.addEventListener('abort', error);