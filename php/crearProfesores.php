<?php
    $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
    mysqli_query($conexion, "SET NAMES 'utf8'"); 

    $index = $_POST["numItemsDisplayed"];

    $sql = "call sp_obtenerCorreos();";
    $respuesta = mysqli_query($conexion,$sql);
    $registros=mysqli_affected_rows($conexion);
    
    $j=0;
    while ($j<$registros) {
        $filas = mysqli_fetch_array($respuesta);
    	$array[$j]=$filas["email"];
        $j++;
    }
                

    if($registros==0){
    	echo "</div>";
        echo "<div class=\"col s6 offset-s3 center\">";
        echo "<h4>No hay registros <i class=\"far fa-surprise\"></i></h4>";
        echo "</div>";
    }
    else{
    	$cantidadDesplegar=6;
        $restantes=$registros-$index;
        
        if($restantes !=0){
            $max=0;

            if($restantes>$cantidadDesplegar)
                $max=$cantidadDesplegar;
            else
                $max=$restantes;

                for ($i=$index; $i < ($max+$index); $i++) {
                    echo "<tr class=\"generated\">";
                    echo "<td>$array[$i]</td>";
                    echo "<td></td>";
                    echo "<td><button class=\"btn-flat generar\" data-correo=\"$array[$i]\"><i class=\"fas fa-file-pdf\"></i></button></td>";
                    echo "<td><button class=\"btn-flat borrar\" data-correo=\"$array[$i]\"><i class=\"fas fa-times\"></i></button></td>";
                    echo "</tr>";
                }
                if($max==$cantidadDesplegar){
                    echo "<input type='hidden' data-continue='true' id='continue'>";    
                }
                else{
                    echo"<input type='hidden' data-continue='false' id='continue'>";
                }

        }
    }


?>


