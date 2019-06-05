$(document).ready(function(e){
        //e.preventDefault();
        $.ajax({
            method:"post",
            url:"php/verificaSesion.php",
            data: "",
            cache:false,
            success:function(resp){
                if (resp == 1) {
                    window.location="./login.html";
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