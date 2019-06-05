<?php
   session_start();
   $mail = trim($_SESSION["emailsesion"]);

   $DatosJSON = json_decode($_POST["string"], true);

   $total = count($DatosJSON);
   $registros = $total/6;
   $msj = "";

   for ($i = 1; $i <= $registros; $i++) {
      if(array_key_exists("puestoExpP".$i, $DatosJSON)){
        $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
        mysqli_query($conexion, "SET NAMES 'utf8'"); 

         $puesto = $DatosJSON["puestoExpP".$i];
         $ins = $DatosJSON["orgExpP".$i];
         $mesD = $DatosJSON["mesDeExpP".$i];
         $añoD =$DatosJSON["yrDeExpP".$i];
         $mesA = $DatosJSON["mesAExpP".$i];
         $añoA =$DatosJSON["yrAExpP".$i];
          //echo $puesto."-".$ins."-".$mesD."-".$añoD."-".$mesA."-".$añoA."-".$mail."---------------";
          $sql = "call sp_GestAExpP('E','$puesto','$ins','$mesD','$añoD','$mesA','$añoA','$mail')";

          $respuesta = mysqli_query($conexion,$sql);
          if($filas = mysqli_fetch_array($respuesta)){
              $msj = $filas["MSJ"];
          }

          mysqli_close($conexion);
      }else{
         $registros++;
      }
   }
   if(strcasecmp($msj,'Registrado')==0){
      echo "{\"estado\": \"1\"}";
   }
?>