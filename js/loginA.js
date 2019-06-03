$(document).ready(function(){
    $(document).on("click", "#Login", function(e){
        e.preventDefault();
        $.ajax({
            method:"post",
            url:"login.php",
            data: $("form#login").serialize(),
            success:function(resp){
                var Jresp=$.parseJSON(resp);
                if(Jresp["estado"]=="0"){
                    $.alert({
                        title: 'Error',
                        type: 'orange',
                        content: 'Usuario o contraseña incorrectos',
                        icon: 'fas fa-globe',
                        theme: 'material',
                        useBootstrap: false,
                        boxWidth: '400px',
                        buttons: {
                            Ok:{
                                text: 'Ok',
                                btnClass: 'btn-red',
                            },
                        },
                    });
                }
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

