$(document).ready(function(){
    
    $("form#login").validetta({
        bubblePosition:"bottom",
        bubbleGapTop: 10,
        bubbleGapLeft: -5,
        onValid:function(e){
            e.preventDefault();
            $.ajax({
                method:"post",
                url:"php/login.php",
                data: $("form#login").serialize(),
                cache:false,
                success:function(resp){
                    var Jresp=$.parseJSON(resp);
                    if(Jresp["estado"]=="1"){
                        $.alert({
                            title: 'Datos correctos',
                            type: 'orange',
                            content: '¡Bienvenido administrador!',
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
                            onDestroy:function(){
                                $(location).attr('href',"administrador.html");
                            }
                        });
                    }
                    else if(Jresp["estado"]=="2"){
                        $.alert({
                            title: 'Datos correctos',
                            type: 'orange',
                            content: '¡Bienvenido profesor!',
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
                            onDestroy:function(){
                                $(location).attr('href',"principal.html");
                            }
                        });
                    }
                    else if(Jresp["estado"]=="0"){
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
        },
        onError : function(e){
            e.preventDefault();
        }
    });   
});

