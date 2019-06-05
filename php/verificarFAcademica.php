<?php
	 if(isset($_SESSION["emailsesion"])){  
	    session_start();
	    $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
	    mysqli_query($conexion, "SET NAMES 'utf8'"); 

	    $mail = trim($_SESSION["emailsesion"]);

	    $sql = "call sp_verificarFAcademica('$mail')";
	    $respuesta = mysqli_query($conexion,$sql);
	    $msj = "";

	    if($filas = mysqli_fetch_array($respuesta)){
	        $msj .= $filas["MSJ"];
	    }

	    if(strcasecmp($msj,'Contestado')==0){
	        echo 1;
	    } 
	}	
?>