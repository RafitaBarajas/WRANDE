<?php
   session_start();
   $mail = trim($_SESSION["emailsesion"]);

   $DatosJSON = json_decode($_POST["string"], true);

   $total = count($DatosJSON);
   $registros = $total/5;
   $msj = "";

   for ($i = 1; $i <= $registros; $i++) {
      if(array_key_exists("tipoCap".$i, $DatosJSON)){
        $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
        mysqli_query($conexion, "SET NAMES 'utf8'"); 

         $tipo = $DatosJSON["tipoCap".$i];
         $ins = $DatosJSON["instCap".$i];
         $pais = $DatosJSON["paisCap".$i];
         $año =$DatosJSON["yrCap".$i];
         $hrs = $DatosJSON["hrsCap".$i];
          //echo $tipo."-".$ins."-".$pais."-".$año."-".$hrs."-".$mail."---------------";
          $sql = "call sp_CapAct('C','$tipo','$ins','$pais','$año',$hrs,'$mail')";

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