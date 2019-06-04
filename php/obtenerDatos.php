<?php
    $conexion = mysqli_connect("localhost","root","","cero");
    mysqli_query($conexion, "SET NAMES 'utf8'"); 

    $mail = trim($_POST["email"]);//CAMBIAR POR SESSION

    $sql = "call sp_obtenerDatos('$mail')";
    $respuesta = mysqli_query($conexion,$sql);

    $array = array();

    if($filas = mysqli_fetch_array($respuesta)){
	    $array["nombre"] = $filas["nombre"];
	    $array["apaterno"] = $filas["apaterno"];
	    $array["amaterno"] = $filas["amaterno"];
	    $array["fnac"]  = $filas["fnac"];
	    $array["puesto"]  = $filas["puesto"];
	    $array["email"]  = $filas["email"];
    }

    echo json_encode($array);
?>