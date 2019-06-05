<?php
   session_start();
   $mail = trim($_SESSION["emailsesion"]);

   $DatosJSON = json_decode($_POST["string"], true);

   $total = count($DatosJSON);
   $registros = $total/3;
   $msj = "";

   for ($i = 1; $i <= $registros; $i++) {
      if(array_key_exists("orgMemb".$i, $DatosJSON)){
        $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
        mysqli_query($conexion, "SET NAMES 'utf8'"); 

         $org =	$DatosJSON["orgMemb".$i];
         $periodo = $DatosJSON["perMemb".$i];
         $nvl = $DatosJSON["nvlMemb".$i];
          //echo $org."-".$periodo."-".$nvl."-".$mail."---------------";
          $sql = "call sp_ExpIngMemb('M','$org', $periodo ,'$nvl','$mail')";

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