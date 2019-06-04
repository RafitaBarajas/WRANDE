$(document).ready(function(){
	$("#formRE").validetta({
		showErrorMessages : true,
		display : 'bubble',
		bubblePosition: 'bottom',
  		bubbleGapLeft: 40,
  		bubbleGapTop: 5,
  		realTime : true,
  		onValid : function(e){
  			e.preventDefault();
	        if ($("#puesto").val()!=null) {
	        	$.ajax({
		            method:"post",
		            url:"php/registro.php",
		            data: $("form#formRE").serialize(),
		            cache:false,
		            success:function(resp){
		                var Jresp=$.parseJSON(resp);
		                if(Jresp["estado"]=="1"){
		                    $.alert({
		                        title: 'Datos correctos',
		                        type: 'orange',
		                        content: '¡Has sido registrado!',
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
		                        	$(location).attr('href',"principal.html");
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
	        }
	        else{
	        	$.alert({
		            title: 'Seleccione un puesto',
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
		        });
	        }
  		},
  		onError : function(e){
    		e.preventDefault();
  		}
	});
});