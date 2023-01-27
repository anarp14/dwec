<?php
    $destinatario = "anarodpe8@gmail.com";
    $asunto = "Información del formulario";
    $nombre = $_COOKIE["nombre"];
    $mensaje = $_COOKIE["mensaje"];
    $color = $_COOKIE["color"];
    $mensaje = "Nombre: " . $nombre . "\n";
    $mensaje .= "Mensaje: " . $mensaje . "\n";
    $mensaje .= "Color: " . $color . "\n";
    mail($destinatario, $asunto, $mensaje);
    echo "La información ha sido enviada al correo electrónico.";
?>
