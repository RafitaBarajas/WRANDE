<?php
    $conexion = mysqli_connect("localhost","root","","cero");
    mysqli_query($conexion, "SET NAMES 'utf8'"); 

    $mail = trim($_POST["email"]);
    $contra = trim($_POST["contra"]);

    $sql = "call sp_login('$mail','$contra')";
    $respuesta = mysqli_query($conexion,$sql);
    $msj = "";

    if($filas = mysqli_fetch_array($respuesta)){
        $msj .= $filas["MSJ"];
    }

    if(strcasecmp($msj,'Administrador')==0){
    	echo 1;
    } else if (strcasecmp($msj,'Profesor')==0){	
    	echo 2;
    } else if(strcasecmp($msj,'Usuario no encontrado')==0){
    	echo 0;
    } 
?>