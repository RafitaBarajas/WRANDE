<?php
    $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
    mysqli_query($conexion, "SET NAMES 'utf8'"); 
 
    $nom = trim($_POST["nombre"]);
    $apa = trim($_POST["APat"]);
    $ama = trim($_POST["AMat"]);
    $bd = trim($_POST["fecha"]);
    $puesto = trim($_POST["puesto"]);
    $email = trim($_POST["email"]);
    $contra = trim($_POST["contra"]);

    $sql = "call sp_registro('$nom','$apa', '$ama', '$bd', '$puesto', '$email', '$contra');";
    $respuesta = mysqli_query($conexion,$sql);
    $msj = "";

    if($filas = mysqli_fetch_array($respuesta)){
        $msj .= $filas["MSJ"];
    }

    if(strcasecmp($msj,'Has sido registrado')==0){
    	echo "{\"estado\": \"1\"}";//crear sesión
    } else if (strcasecmp($msj,'Este correo ya está registrado')==0){	
    	echo "{\"estado\": \"2\"}";
    }
?>