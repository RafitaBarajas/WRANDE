$(document).ready(function() {

	$("form#formFA").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(e){
	  			e.preventDefault();
	  			alert($("form#formFA").serialize());
		        if ($("form#formFA").find('option[disabled]:selected').length == 0) {
		        	$.ajax({
			            method:"post",
			            url:"php/formacionA.php",
			            data: $("form#formFA").serialize(),
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
			            title: 'Espere',
			            type: 'orange',
			            content: 'No olvide seleccionar una opci&oacute;n en los campos Nivel, País y Año de Obtenci&oacute;n',
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
			            onDestroy: function(){
			            	$("form#formFA").find('option[disabled]:selected').focus();
			            }
			        });
		        }
	  		},
	  		onError : function(e){
	    		e.preventDefault();
	  		}
		});

});