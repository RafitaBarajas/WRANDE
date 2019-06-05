<?php
   session_start();
   $mail = trim($_SESSION["emailsesion"]);

   $DatosJSON = json_decode($_POST["string"], true);

   $registros = count($DatosJSON);
   $msj = "";

   for ($i = 0; $i < $registros; $i++) {
      if(array_key_exists("descPart".$i, $DatosJSON)){
        $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
        mysqli_query($conexion, "SET NAMES 'utf8'"); 

         $part = $DatosJSON["descPart".$i];
          //echo $part."-".$mail."---------------";
   		  $sql = "call sp_PartPE('$part', '$mail')";
        
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