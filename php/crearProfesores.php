<?php
    $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
    mysqli_query($conexion, "SET NAMES 'utf8'"); 

    $index = $_POST["numItemsDisplayed"];


    $sql = "call sp_obtenerCorreos();";
    $respuesta = mysqli_query($conexion,$sql);
    $registros=mysqli_affected_rows($conexion);

    $array = array();
    $j=0;
    while ($filas = mysqli_fetch_array($respuesta)) {
    	$array[]=$filas["email"];
    }

    if($registros==0){
    	echo "</div>";
        echo "<div class=\"col s6 offset-s3 center\">";
        echo "<h4>No hay registros <i class=\"far fa-surprise\"></i></h4>";
        echo "</div>";
    }
    else{
    	$cantidadDesplegar=6;
        $restantes=$registros-1-$index;
        if($restantes !=0){
            $max=0;
            if($restantes>$cantidadDesplegar)
                $max=$cantidadDesplegar;
            else
                $max=$restantes;

                for ($i=$index+1; $i <= ($max+$index); $i++) {
                
                    
                }
                if(max==cantidadDesplegar){
                    out.println("<input type='hidden' data-continue='true' id='continue'>");    
                }
                else{
                    out.println("<input type='hidden' data-continue='false' id='continue'>");
                }

        }
    }


?>


