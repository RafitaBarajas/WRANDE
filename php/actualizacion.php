<?php
   session_start();
   $mail = trim($_SESSION["emailsesion"]);

   $DatosJSON = json_decode($_POST["string"], true);

   $total = count($DatosJSON);
   $registros = $total/5;
   $msj = "";

   for ($i = 1; $i <= $registros; $i++) {
      if(array_key_exists("tipoAct".$i, $DatosJSON)){
        $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
        mysqli_query($conexion, "SET NAMES 'utf8'"); 

         $tipo = $DatosJSON["tipoAct".$i];
         $ins = $DatosJSON["instAct".$i];
         $pais = $DatosJSON["paisAct".$i];
         $año =$DatosJSON["yrAct".$i];
         $hrs = $DatosJSON["hrsAct".$i];
          //echo $tipo."-".$ins."-".$pais."-".$año."-".$hrs."-".$mail."---------------";
          $sql = "call sp_CapAct('A','$tipo','$ins','$pais','$año',$hrs,'$mail')";

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