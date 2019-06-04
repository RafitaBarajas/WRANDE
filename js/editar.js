$(document).ready(
	function(){
		$('.counter').characterCounter();

		$('.datepicker').datepicker({
			autoClose: true,
			format: 'dd/mm/yyyy',
			yearRange: 50
		});

		$('select').formSelect();

		$("#formRE").validetta({
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
		            url:"editar.php",
		            data: $("form#formEdit").serialize(),
		            success:function(resp){
		                var Jresp=$.parseJSON(resp);
		                if(Jresp["estado"]=="1"){
		                    $.alert({
		                        title: 'Error',
		                        type: 'orange',
		                        content: 'Este correo ya está registrado por otro usuario',
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
		                else if(Jresp["estado"]=="2"){
		                	$.alert({
		                        title: 'Error',
		                        type: 'orange',
		                        content: 'La contraseña anterior es incorrecta',
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
		});

		$('.psw').hide();
		$(document).on("click", ".show", function () {
            $('.show').hide();
            $('.cc').val('');
            $('.psw').show();
        })
	}
);