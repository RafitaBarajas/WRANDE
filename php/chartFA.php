<?php
    session_start();
    $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
    mysqli_query($conexion, "SET NAMES 'utf8'"); 

    $sql = "select nivel, count(*) as cantidad from facademica group by nivel;";
    $respuesta = mysqli_query($conexion,$sql);

    $faux = "";

    $array = array();

    if($filas = mysqli_fetch_array($respuesta)){
        $faux = $filas["fnac"];

	    $array["nombre"] = $filas["nombre"];
	    $array["apaterno"] = $filas["apaterno"];
	    $array["amaterno"] = $filas["amaterno"];
	    $array["fnac"]  = str_replace("-", "/", $faux);
	    $array["puesto"]  = $filas["puesto"];
	    $array["email"]  = $filas["email"];
    }

    echo json_encode($array);
?>