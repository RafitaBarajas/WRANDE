$(document).ready(function(){
        $.ajax({
            method:"post",
            url:"php/verificarC.php",
            data: "",
            cache:false,
            success:function(resp){
                if (resp == 1) {
                    $('#formCapacit').find('input, textarea, button, select').attr('disabled','disabled');
                     $('#formCapacit').find('.fa-plus').hide();
                     $('#formCapacit').find('.fa-minus').hide();
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