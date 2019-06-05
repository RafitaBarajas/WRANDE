$(document).ready(function(){
        
    $(document).on("click",".ver",function(){
        
    });

    $(document).on("click",".editar",function(){
        $.ajax({
            method:"post",
            url:"php/capacitacion.php",
            data: jsonString,
            cache:false,
            success:function(resp){
            var Jresp=$.parseJSON(resp);
            if(Jresp["estado"]=="1"){
                $.alert({
                    title: 'Secci&oacute;n completada',
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
                        //$(location).attr('href',"principal.html");
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
    });

    $(document).on("click",".generar",function(){
            
    });

    $(document).on("click",".borrar",function(){
            
    });

    $(document).on("click",".out",function(){
            
    });
                
});