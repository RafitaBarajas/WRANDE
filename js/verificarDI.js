$(document).ready(function(){
        $.ajax({
            method:"post",
            url:"php/verificarDI.php",
            data: "",
            cache:false,
            success:function(resp){
                if (resp == 1) {
                    $('#formDatos').find('input, textarea, button, select').attr('disabled','disabled');
                                        $('#formDatos').find('.fa-plus').hide();
                                        $('#formDatos').find('.fa-minus').hide();
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