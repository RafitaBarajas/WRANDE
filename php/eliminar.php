<?php
    $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
    mysqli_query($conexion, "SET NAMES 'utf8'"); 
 
    $email = trim($_POST["email"]);

    $sql = "call sp_eliminar('$email');";
    $respuesta = mysqli_query($conexion,$sql);
    $msj = "";

    if($filas = mysqli_fetch_array($respuesta)){
        $msj .= $filas["MSJ"];
    }

    if(strcasecmp($msj,'Eliminado')==0){
    	echo "{\"estado\": \"1\"}";
    } else if (strcasecmp($msj,'Este correo ya está registrado')==0){	
    	echo "{\"estado\": \"2\"}";
    }
?>