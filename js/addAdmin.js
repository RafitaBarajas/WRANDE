$(document).ready(function(){
	$("form#admin").validetta({
		showErrorMessages : true,
		display : 'bubble',
		bubblePosition: 'bottom',
  		bubbleGapLeft: 40,
  		bubbleGapTop: 5,
  		realTime : true,
  		onValid : function(e){
  			e.preventDefault();
	        	$.ajax({
		            method:"post",
		            url:"php/registroAdmin.php",
		            data: $("form#admin").serialize(),
		            cache:false,
		            success:function(resp){
		                var Jresp=$.parseJSON(resp);
		                alert(Jresp);
		                if(Jresp["estado"]=="1"){
		                    $.alert({
		                        title: 'Datos correctos',
		                        type: 'orange',
		                        content: '¡Administrador agregado!',
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
		                        	$(location).attr('href',"administrador.html");
    							}
		                    });
		                }
		                else if(Jresp["estado"]=="2"){
		                	$.alert({
		                        title: 'Error',
		                        type: 'orange',
		                        content: 'El correo ya está registrado',
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
		                        	$("#email").focus();
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
  		onError : function(e){
    		e.preventDefault();
  		}
	});
});