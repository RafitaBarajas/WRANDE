$(document).ready(function(){
        $.ajax({
            method:"post",
            url:"php/verificarG.php",
            data: "",
            cache:false,
            success:function(resp){
                if (resp == 1) {
                    $('#formGest').find('input, textarea, button, select').attr('disabled','disabled');
                                        $('#formGest').find('.fa-plus').hide();
                                        $('#formGest').find('.fa-minus').hide();
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