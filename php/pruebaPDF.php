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

        $mpdf=new mPDF("c","Letter","12","tahoma",15,10,30,10,5,5);
        
        

        $header = "";
        $header .= "<p align='center'><strong>Currículum Vitae resumido</strong></p>";
        $estilos = "";
        $estilos .= "<style>
            .logo{width: 150px; position:absolute; float: right;}
            table{text-align: center; font-size: 18px;}
            td{background-color: #A3E4D7;}
            th{background-color: #48C9B0}
        </style>
        ";
        $html .= $estilos;
        //$html .= "<img src='./../images/logo_icon.png' class='logo'>";
        $html .= "<h3>DATOS GENERALES</h3>";
        $sql = "select apaterno, amaterno, nombre, DATE_FORMAT(fnac,'%d/%m/%Y') as fnac, puesto from datos where email = '$emailusr';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);

        $html .= "<table > <tr> <th>Apellido paterno</th> <th>Apellido materno</th> <th>Nombre</th> <th>Fecha de nacimiento</th> <th>Puesto</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["apaterno"]."</td>";
            $html .= "<td>".$filas["amaterno"]."</td>";
            $html .= "<td>".$filas["nombre"]."</td>";
            $html .= "<td>".$filas["fnac"]."</td>";
            $html .= "<td>".$filas["puesto"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table><hr>";


        $html .= "<h3>FORMACIÓN ACADÉMICA</h3>";
        $sql = "select * from FAcademica where idprof = (select idprof from datos where email = '$emailusr');";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table > <tr> <th>Nivel</th> <th>Nombre</th> <th>Institución</th> <th>País</th><th>Año de obtención</th> <th>Cédula profesional</th></tr>";
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
        $html .= "</table><hr>";



        $html .= "<h3>CAPACITACIÓN DOCENTE</h3>";
        $sql = "select * from capact where idprof = (select idprof from datos where email = '$emailusr') and coa = 'c';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table > <tr> <th>Tipo</th> <th>Institución</th> <th>País</th><th>Año de obtención</th> <th>Horas</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["tipo"]."</td>";
            $html .= "<td>".$filas["institucion"]."</td>";
            $html .= "<td>".$filas["pais"]."</td>";
            $html .= "<td>".$filas["anio"]."</td>";
            $html .= "<td>".$filas["horas"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table><hr>";



        $html .= "<h3>ACTUALIZACIÓN DISCIPLINAR</h3>";
        $sql = "select * from capact where idprof = (select idprof from datos where email = '$emailusr') and coa = 'a';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table > <tr> <th>Tipo</th> <th>Institución</th> <th>País</th><th>Año de obtención</th> <th>Horas</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["tipo"]."</td>";
            $html .= "<td>".$filas["institucion"]."</td>";
            $html .= "<td>".$filas["pais"]."</td>";
            $html .= "<td>".$filas["anio"]."</td>";
            $html .= "<td>".$filas["horas"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table><hr>";




        $html .= "<h3>GESTIÓN ACADÉMICA</h3>";
        $sql = "select * from gestaexpp where idprof = (select idprof from datos where email = '$emailusr') and goe = 'g';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table > <tr> <th>Actividad o puesto</th> <th>Institución</th> <th>De(mes y año)</th><th>A(mes y año)</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["actividad"]."</td>";
            $html .= "<td>".$filas["institucion"]."</td>";
            $html .= "<td>".$filas["deMes"]."/".$filas["deAnio"]."</td>";
            $html .= "<td>".$filas["aMes"]."/".$filas["aAnio"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table><hr>";



        $html .= "<h3>PRODUCTOS ACADÉMICOS RELEVANTES EN LOS ÚLTIMOS CINCO (5) AÑOS, RELACIONADOS CON EL PE</h3>";
        $sql = "select * from productos where idprof = (select idprof from datos where email = '$emailusr');";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table > <tr> <th>Número</th> <th>Descripción</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["num"]."</td>";
            $html .= "<td>".$filas["des"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table><hr>";



        $html .= "<h3>EXPERIENCIA PROFESIONAL (NO ACADÉMICA)</h3>";
        $sql = "select * from gestaexpp where idprof = (select idprof from datos where email = '$emailusr') and goe = 'e';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table > <tr> <th>Actividad o puesto</th> <th>Institución</th> <th>De(mes y año)</th><th>A(mes y año)</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["actividad"]."</td>";
            $html .= "<td>".$filas["institucion"]."</td>";
            $html .= "<td>".$filas["deMes"]."/".$filas["deAnio"]."</td>";
            $html .= "<td>".$filas["aMes"]."/".$filas["aAnio"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table><hr>";



        $html .= "<h3>EXPERIENCIA EN DISEÑO INGENIERIL</h3>";
        $sql = "select * from expingmemb where idprof = (select idprof from datos where email = '$emailusr') and eom = 'e';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table > <tr> <th>Organismo</th> <th>Periodo (años)</th> <th>Nivel de experiencia</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["organismo"]."</td>";
            $html .= "<td>".$filas["periodo"]."</td>";
            $html .= "<td>".$filas["nivel"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table><hr>";


        $html .= "<h3>LOGROS PROFESIONALES (NO ACADÉMICOS) RELEVANTES EN LOS ÚLTIMOS 5 AÑOS RELACIONADOS CON EL PE</h3>";
        $sql = "select * from logrosprem where idprof = (select idprof from datos where email = '$emailusr') and lop = 'l';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table> <tr> <th>Descripción del logro</th> </tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["des"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table><hr>";



        $html .= "<h3>MEMBRESÍA O PARTICIPACIÓN EN ORGANISMOS PROFESIONALES</h3>";
        $sql = "select * from expingmemb where idprof = (select idprof from datos where email = '$emailusr') and eom = 'm';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table> <tr> <th>Organismo</th> <th>Periodo (años)</th> <th>Nivel de experiencia</th></tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["organismo"]."</td>";
            $html .= "<td>".$filas["periodo"]."</td>";
            $html .= "<td>".$filas["nivel"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table><hr>";


        $html .= "<h3>PREMIOS, DISTINCIONES O RECONOCIMIENTOS RECIBIDOS</h3>";
        $sql = "select * from logrosprem where idprof = (select idprof from datos where email = '$emailusr') and lop = 'p';";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table > <tr> <th>Descripción del premio recibido</th> </tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["des"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table><hr>";



        $html .= "<h3>PARTICIPACIÓN EN EL ANÁLISIS O ACTUALIZACIÓN DEL PE</h3>";
        $sql = "select * from partpe where idprof = (select idprof from datos where email = '$emailusr');";
        $respuesta = mysqli_query($conexion,$sql);
        $registros=mysqli_affected_rows($conexion);
        
        $html .= "<table > <tr> <th>Texto</th> </tr>";
        while ($filas = mysqli_fetch_array($respuesta)) {
            $html .= "<tr>";
            $html .= "<td>".$filas["texto"]."</td>";
            $html .= "</tr>";
        }
        $html .= "</table><hr>";



        $pie = "";
        $pie .= "<p>Escuela Superior de C&oacute;mputo";

        //$mpdf=new mPDF("c","Letter","12","arial",15,10,30,10,5,5);
        //$mpdf->SetWatermarkText($boleta." -ESCOM / TWeb 200192-",0.1);
        //$mpdf->showWatermarkText = true;
        
        $mpdf->SetHTMLHeader($header);
        $mpdf->WriteHTML($html);
        $mpdf->SetHTMLFooter($pie);


        $mpdf->Output();

?>