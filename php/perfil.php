<?php
    session_start();
    $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
    mysqli_query($conexion, "SET NAMES 'utf8'"); 

    if(strcasecmp($_SESSION["tipo"],'user')==0){
            $mail = trim($_SESSION["emailsesion"]);
        }
       else{
            $mail = trim($_POST["email"]);
        }

    $sql = "call sp_datosPerfil('$mail')";
    $respuesta = mysqli_query($conexion,$sql);

    $faux = "";

    $array = array();

    if($filas = mysqli_fetch_array($respuesta)){

	    $array["nombre"] = $filas["nombre"];
	    $array["apaterno"] = $filas["apaterno"];
	    $array["amaterno"] = $filas["amaterno"];
	    $array["edad"]  = $filas["edad"];
	    $array["puesto"]  = $filas["puesto"];
	    $array["email"]  = $filas["email"];
    }

    echo json_encode($array);
?>