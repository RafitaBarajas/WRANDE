<?php
   session_start();
   $mail = trim($_SESSION["emailsesion"]);

   $DatosJSON = json_decode($_POST["string"], true);

   $registros = count($DatosJSON);
   $msj = "";
   $n=1;
   for ($i = 1; $i <= $registros; $i++) {
      if(array_key_exists("descProd".$i, $DatosJSON)){
        $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
        mysqli_query($conexion, "SET NAMES 'utf8'"); 

         $pro = $DatosJSON["descProd".$i];
          //echo $pro."-".$mail."---------------";
          $sql = "call sp_Productos($n,'$pro', '$mail')";
          $n++;

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