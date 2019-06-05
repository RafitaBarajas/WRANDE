$(document).ready(function(){
        $.ajax({
            method:"post",
            url:"php/verificarA.php",
            data: "",
            cache:false,
            success:function(resp){
                if (resp == 1) {
                    $('#formAct').find('input, textarea, button, select').attr('disabled','disabled');
                                        $('#formAct').find('.fa-plus').hide();
                                        $('#formAct').find('.fa-minus').hide();
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