<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//get content of textfile
$filename = "resultados.txt";
$content = file($filename);

//put content in array
$array = explode("||", $content[0]);
$real = $array[0];
$bar = $array[1];
$atl = $array[2];
$sev = $array[3];

$vote = $_GET['vote'];

if ($vote == 0) {
  $real = $real + 1;
}
if ($vote == 1) {
  $bar = $bar + 1;
}
if ($vote == 2) {
  $atl = $atl + 1;
}
if ($vote == 3) {
  $sev = $sev + 1;
}

//insert votes to txt file
$insertvote = $real."||".$bar."||".$atl."||".$sev;
$fp = fopen($filename,"w");
fputs($fp,$insertvote);
fclose($fp);

//se calcula el % del voto de cada uno de los equipos
$denomidador = (int)$real+(int)$bar+(int)$atl+(int)$sev;
$tantoMadrid = 100*round($real/$denomidador,2);
$tantoBarcelona = 100*round($bar/$denomidador,2);
$tantoAtletico = 100*round($atl/$denomidador,2);
$tantoSevilla = 100*round($sev/$denomidador,2);

?>

<h2>resultados:</h2>
<table align="center">
<tr>
<td>Real Madrid:</td>
<td><img src="poll.gif" width='<?php echo ($tantoMadrid); ?>'height='20'>
<?php echo($tantoMadrid); ?>%
</td>
</tr>
<tr>

<td>Barcelona:</td>
<td><img src="poll.gif"
width='<?php echo ($tantoBarcelona); ?>'
height='20'>
<?php echo($tantoBarcelona); ?>%
</td>
</tr>

<td>Atlético de Madrid:</td>
<td><img src="poll.gif"
width='<?php echo ($tantoAtletico); ?>'
height='20'>
<?php echo($tantoAtletico); ?>%
</td>
</tr>

<td>Sevilla:</td>
<td><img src="poll.gif"
width='<?php echo ($tantoSevilla); ?>'
height='20'>
<?php echo($tantoSevilla); ?>%
</td>
</tr>
</table>

<p>Total de votos: <?php echo ($denomidador); ?></p>
<p><a href="encuesta.html">Volver a votar</a></p>
