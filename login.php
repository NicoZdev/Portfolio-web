<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "basededatos1";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if (!$conn){
    die("No hay conexion: ".mysqli_connect_error());
}

$nombre = $_POST ["txtusuario"];
$password = $_POST ["txtpassword"];

$query = mysqli_query($conn,"SELECT * FROM login WHERE usuario = '".$nombre."' and password = '".$password."' ");
$nr = mysqli_num_rows($query);

if($nr == 1){
    header ("location: indexEdit.html");
}else if ($nr == 0){
    echo "Usuario o Contraseña incorrectos";
}
?>