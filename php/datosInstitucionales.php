<?php
   session_start();
   $mail = trim($_SESSION["emailsesion"]);

   $DatosJSON = json_decode($_POST["string"], true);

   $total = count($DatosJSON);
   
   $uno = $DatosJSON["datosCContra"];
   $dos = $DatosJSON["datosTContra"];
   $tres = $DatosJSON["fecha"];
   $cuatro = $DatosJSON["datosInstancias"];
   $cucin = $DatosJSON["datosFInst"];
   $cinco = $DatosJSON["datosidLIC15"];
   $seis = $DatosJSON["datoshrsLIC15"];
   $siete = $DatosJSON["datosidPOS15"];
   $ocho = $DatosJSON["datoshrsPOS15"];
   $nueve = $DatosJSON["datosTipo15"];
   $diez = $DatosJSON["datosidLIC16"];
   $once = $DatosJSON["datoshrsLIC16"];
   $doce = $DatosJSON["datosidPOS16"];
   $cace = $DatosJSON["datoshrsPOS16"];
   $quince = $DatosJSON["datosTipo16"];

    $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
    mysqli_query($conexion, "SET NAMES 'utf8'"); 

    //echo $u."-".$d."-".$t."-".$cu."-".$cuc."-".$se."-".$si."-".$oc."-".$nu."-".$di."-".$on."-".$do."-".$ca."-".$qu."-".$mail."-";
     $sql = "call sp_DatosInst('$uno','$dos','$tres','$cuatro','$cucin','$cinco',$seis,'$siete',$ocho,'$nueve','$diez',$once,'$doce',$cace,'$quince', '$mail')";

     $respuesta = mysqli_query($conexion,$sql);
     if($filas = mysqli_fetch_array($respuesta)){
        $msj = $filas["MSJ"];
     }

      mysqli_close($conexion);

	if(strcasecmp($msj,'Registrado')==0){
      echo "{\"estado\": \"1\"}";
   }
?>
