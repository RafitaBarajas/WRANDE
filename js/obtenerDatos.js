$(document).ready(function(){
    $(document).on("click", "#pba", function(e){
        e.preventDefault();
        $.ajax({
            method:"post",
            url:"php/obtenerDatosA.php",
            data:{"email":"mail"},
            success:function(resp){
                var Jresp=$.parseJSON(resp);

                $("#nombre").val(Jresp["nombre"]);
                $("#APat").val(Jresp["APat"]);
                $("#AMat").val(Jresp["AMat"]);
                $("#fecha").val(Jresp["fecha"]);
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