$(document).ready(function(e){
        //e.preventDefault();
        $.ajax({
            method:"post",
            url:"php/perfil.php",
            success:function(resp){
                //alert(resp);
                var Jresp=$.parseJSON(resp);

                var nom = "";
                var ncomp = nom.concat(Jresp["nombre"],Jresp["apaterno"],Jresp["amaterno"]);

                $("h4.nombre").text(ncomp);
                $("h4.edad").text(Jresp["edad"]);
                $("h4.puesto").text(Jresp["puesto"]);
                $("h4.email").text(Jresp["email"]);



            },
            error:function(){
                $.alert({
                    title: 'Error en el servidor, int&eacute;ntelo m&aacute;s tarde',
                    content: '',
                    boxWidth: '400px',
                    type: 'orange',
                    theme: 'material',
                    useBootstrap: false,
                    buttons: {
                        Entendido:{
                            text: 'Entendido',
                            btnClass: 'btn-red',
                        },
                    }
                });
            }
        }); 
});