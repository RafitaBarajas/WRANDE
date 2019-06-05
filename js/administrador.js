$(document).ready(function(){
        
    $(document).on("click",".ver",function(){
        
    });

    $(document).on("click",".editar",function(){
        
    });

    $(document).on("click",".generar",function(){
            
    });

    $(document).on("click",".borrar",function(){
        var butto= $(this).attr("data-correo");
        var elemento=$(this).closest("tr");
        $.alert({
            title: "¿Desea eliminar al profesor?",
            type: 'orange',
            content: 'Una vez eliminado el registro no podrá recuperarse',
            icon: 'fas fa-exclamation-triangle',
            theme: 'material',
            useBootstrap: false,
            boxWidth: '400px',
            buttons: {
                Ok:{
                    text: 'Ok',
                    btnClass: 'btn-red',
                    action: function(){

                        $.ajax({
                            method:"post",
                            url:"php/eliminar.php",
                            data: "email="+butto,
                            cache:false,
                            success:function(resp){

                            var Jresp=$.parseJSON(resp);
                            if(Jresp["estado"]=="1"){
                                $.alert({
                                title: 'Registro Eliminado',
                                type: 'orange',
                                content: '',
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
                                onDestroy: function () {
                                    elemento.hide();
                                }
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
                    
                },
                Cancelar:{
                            text: 'Cancelar',
                            
                    }
            }
        });
    });

    $(document).on("click",".out",function(){
            
    });
                
});