<?php
   session_start();
   $mail = trim($_SESSION["emailsesion"]);

   $DatosJSON = json_decode($_POST["string"], true);

   $total = count($DatosJSON);
   $registros = $total/6;
   $msj = "";

   for ($i = 1; $i <= $registros; $i++) {
      if(array_key_exists("nvl".$i, $DatosJSON)){
        $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
        mysqli_query($conexion, "SET NAMES 'utf8'"); 

         $nivel = $DatosJSON["nvl".$i];
         $name = $DatosJSON["nombre".$i];
         $inst = $DatosJSON["inst".$i];
         $pais =$DatosJSON["pais".$i];
         $año = $DatosJSON["yr".$i];
         $ced = $DatosJSON["ced".$i];
          //echo $nivel."-".$name."-".$inst."-".$pais."-".$año."-".$ced."-".$mail."---------------";
          $sql = "call sp_FAcademica('$name','$nivel','$inst','$pais','$año','$ced','$mail')";

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