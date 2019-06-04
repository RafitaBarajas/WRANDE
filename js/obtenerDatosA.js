$(document).ready(function(){
    $(document).on("click", "#pba", function(e){
        e.preventDefault();
        $.ajax({
            method:"post",
            url:"php/obtenerDatos.php",
            data:{"email":"asd@asd.asd"},
            success:function(resp){
                var Jresp=$.parseJSON(resp);

                $("#nombre").val(Jresp["nombre"]);
                $("#APat").val(Jresp["apaterno"]);
                $("#AMat").val(Jresp["amaterno"]);
                $("#fecha").val(Jresp["fnac"]);
                $("#puesto").val(Jresp["puesto"]);
                $("#email").val(Jresp["email"]);

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
});