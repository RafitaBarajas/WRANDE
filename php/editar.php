<?php
    $conexion = mysqli_connect("localhost","root","","cero");
    mysqli_query($conexion, "SET NAMES 'utf8'"); 
 
    $nom = trim($_POST["nombre"]);
    $apa = trim($_POST["APat"]);
    $ama = trim($_POST["AMat"]);
    $bd = trim($_POST["fecha"]);
    $puesto = trim($_POST["puesto"]);
    $email = trim($_POST["email"]);
    $contra = trim($_POST["contra"]);
    $contra = trim($_POST["acontra"]);
    $amail = trim($_POST["amail"]);


    $sql = "call sp_editar('$nom','$apa', '$ama', '$bd', '$puesto', '$email', '$contra', 'acontra', 'amail')";
    $respuesta = mysqli_query($conexion,$sql);
    $msj = "";

    if($filas = mysqli_fetch_array($respuesta)){
        $msj .= $filas["MSJ"];
    }

    if(strcasecmp($msj,'Este correo ya está registrado por otro usuario')==0){
    	echo echo "{\"estado\": \"1\"}";
    } else if (strcasecmp($msj,'La contraseña anterior es incorrecta')==0){	
    	echo echo "{\"estado\": \"2\"}";
    } else {
    	echo echo "{\"estado\": \"0\"}";
    } 
?>