<?php

//Array de nombres de ciudades
$array[] = "Casares";
$array[] = "Barcelona";
$array[] = "Alcorcón";
$array[] = "Málaga";
$array[] = "Fuengirola";
$array[] = "Marbella";
$array[] = "Río de Janeiro";
$array[] = "Gijón";
$array[] = "Oviedo";
$array[] = "Mérida";
$array[] = "Estepona";
$array[] = "París";
$array[] = "Londres";
$array[] = "Berlín";
$array[] = "Moscú";
$array[] = "Atenas";

$ciudad = $_GET['ciudad'];
$sugerencia = "";
$longitud = strlen($ciudad);

foreach ($array as $nombre){
  if(stristr($ciudad, substr($nombre,0,$longitud))){
    if($sugerencia === ""){
      $sugerencia = $nombre; //primera sugerencia
    } else{
      $sugerencia .= ", $nombre"; //segunda y siguientes sugerencias
    }
  }
}

//En el caso de no encontrar ninguna sugerencia se le hace saber al usuario.
// en el caso contrario devuelve las sugenrencias encontradas

echo $sugerencia == "" ? "ninguna sugerencia" : $sugerencia;
?>

