<?php
    session_start();
    $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
    mysqli_query($conexion, "SET NAMES 'utf8'"); 

    $sql = "select nivel, count(*) as cantidad from facademica group by nivel;";
    $respuesta = mysqli_query($conexion,$sql);

    $array = array();
    
    while($fila = mysqli_fetch_array($respuesta)){
      $array[] = $fila;
    }

    echo json_encode($array);
?>