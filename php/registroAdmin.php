<?php
    $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
    mysqli_query($conexion, "SET NAMES 'utf8'"); 
 
    $email = trim($_POST["email"]);
    $contra = trim($_POST["contra"]);

    $sql = "call sp_registroAdmin('$email', '$contra');";
    $respuesta = mysqli_query($conexion,$sql);
    $msj = "";

    if($filas = mysqli_fetch_array($respuesta)){
        $msj .= $filas["MSJ"];
    }

    if(strcasecmp($msj,'Administrador registrado')==0){
    	echo "{\"estado\": \"1\"}";//crear sesión
    } else if (strcasecmp($msj,'Este correo ya está registrado')==0){	
    	echo "{\"estado\": \"2\"}";
    }
?>