<?php
        include("./../libs/mpdf60/mpdf.php");

        $conexion = mysqli_connect("localhost","root","n0m3l0","cero");
        mysqli_query($conexion, "SET NAMES 'utf8'"); 


        $emailusr = "";
        session_start();
        $_SESSION["emailsesion"] = "asd@asd.asd";
       // if(isset($_SESSION["emailsesion"]){
            $emailusr = trim($_SESSION["emailsesion"]);
        //}
       // else{
        //    $emailusr = trim($POST["emailprofesor"]);
        //}


        
        

        $header = "";
        $header .= "<p align='center'><strong>Currículum Vitae resumido</strong></p>";
        $estilos = "";
        $estilos .= "<style>
            p{color:#00D;}
            .logo{width: 150px; position:absolute; float: right;}
        </style>
        ";
        $html .= $estilos;
        //$html .= "<img src='./../images/logo_icon.png' class='logo'>";
        $html .= "<h2>DATOS GENERALES</h2>";
        $sql = "select apaterno, amaterno, nombre, DATE_FORMAT(fnac,'%d/%m/%Y') as fnac, puesto from datos where email = '$emailusr';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);

        $html .= "<table border='1'> <tr> <th>Apellido paterno</th> <th>Apellido materno</th> <th>Nombre</th> <th>Fecha de nacimiento</th> <th>Puesto</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["apaterno"]."</td>";
            $html .= "<td>".$filas["amaterno"]."</td>";
            $html .= "<td>".$filas["nombre"]."</td>";
            $html .= "<td>".$filas["fnac"]."</td>";
            $html .= "<td>".$filas["puesto"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table>";


        $html .= "<h2>FORMACIÓN ACADÉMICA</h2>";
        $sql = "select * from FAcademica where idprof = (select idprof from datos where email = '$emailusr');";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table border='1'> <tr> <th>Nivel</th> <th>Nombre</th> <th>Institución</th> <th>País</th><th>Año de obtención</th> <th>Cédula profesional</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["nivel"]."</td>";
            $html .= "<td>".$filas["nombre"]."</td>";
            $html .= "<td>".$filas["institucion"]."</td>";
            $html .= "<td>".$filas["pais"]."</td>";
            $html .= "<td>".$filas["anio"]."</td>";
            $html .= "<td>".$filas["cedula"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table>";



        $html .= "<h2>CAPACITACIÓN DOCENTE</h2>";
        $sql = "select * from capact where idprof = (select idprof from datos where email = '$emailusr') and coa = 'c';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table border='1'> <tr> <th>Tipo</th> <th>Institución</th> <th>País</th><th>Año de obtención</th> <th>Horas</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["tipo"]."</td>";
            $html .= "<td>".$filas["institucion"]."</td>";
            $html .= "<td>".$filas["pais"]."</td>";
            $html .= "<td>".$filas["anio"]."</td>";
            $html .= "<td>".$filas["horas"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table>";



        $html .= "<h2>ACTUALIZACIÓN DISCIPLINAR</h2>";
        $sql = "select * from capact where idprof = (select idprof from datos where email = '$emailusr') and coa = 'a';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table border='1'> <tr> <th>Tipo</th> <th>Institución</th> <th>País</th><th>Año de obtención</th> <th>Horas</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["tipo"]."</td>";
            $html .= "<td>".$filas["institucion"]."</td>";
            $html .= "<td>".$filas["pais"]."</td>";
            $html .= "<td>".$filas["anio"]."</td>";
            $html .= "<td>".$filas["horas"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table>";




        $html .= "<h2>GESTIÓN ACADÉMICA</h2>";
        $sql = "select * from gestaexpp where idprof = (select idprof from datos where email = '$emailusr') and goe = 'g';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table border='1'> <tr> <th>Actividad o puesto</th> <th>Institución</th> <th>De(mes y año)</th><th>A(mes y año)</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["actividad"]."</td>";
            $html .= "<td>".$filas["institucion"]."</td>";
            $html .= "<td>".$filas["deMes"]."/".$filas["deAnio"]."</td>";
            $html .= "<td>".$filas["aMes"]."/".$filas["aAnio"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table>";




        $html .= "<h2>Productos académicos relevantes en los últimos cinco (5) años, relacionados con el PE</h2>";
        $sql = "select * from gestaexpp where idprof = (select idprof from datos where email = '$emailusr') and goe = 'g';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table border='1'> <tr> <th>Actividad o puesto</th> <th>Institución</th> <th>De(mes y año)</th><th>A(mes y año)</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["actividad"]."</td>";
            $html .= "<td>".$filas["institucion"]."</td>";
            $html .= "<td>".$filas["deMes"]."/".$filas["deAnio"]."</td>";
            $html .= "<td>".$filas["aMes"]."/".$filas["aAnio"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table>";




        $pie = "";
        $pie .= "<p>Escuela Superior de C&oacute;mputo";

        $mpdf=new mPDF("c","Letter","12","arial",15,10,30,10,5,5);
        //$mpdf->SetWatermarkText($boleta." -ESCOM / TWeb 200192-",0.1);
        //$mpdf->showWatermarkText = true;
        
        $mpdf->SetHTMLHeader($header);
        $mpdf->WriteHTML($html);
        $mpdf->SetHTMLFooter($pie);
        $mpdf->Output();

?>