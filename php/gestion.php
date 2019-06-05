<?php
   session_start();
   $mail = trim($_SESSION["emailsesion"]);

   $DatosJSON = json_decode($_POST["string"], true);

   $total = count($DatosJSON);
   $registros = $total/5;
   $msj = "";

   for ($i = 1; $i <= $registros; $i++) {
      if(array_key_exists("puestoGest".$i, $DatosJSON)){
        $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
        mysqli_query($conexion, "SET NAMES 'utf8'"); 

         $puesto = $DatosJSON["puestoGest".$i];
         $ins = $DatosJSON["instGest".$i];
         $mesD = $DatosJSON["mesDeGest".$i];
         $añoD =$DatosJSON["yrDeGest".$i];
         $mesA = $DatosJSON["mesAGest".$i];
         $añoA =$DatosJSON["yrAGest".$i];
          //echo $puesto."-".$ins."-".$mesD."-".$añoD."-".$mesA."-".$añoA."-".$mail."---------------";
          $sql = "call sp_GestAExpP('G','$puesto','$ins','$mesD','$añoD','$mesA','$añoA','$mail')";

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