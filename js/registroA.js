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
	        $.ajax({
	            method:"post",
	            url:"registro.php",
	            data: $("form#formRE").serialize(),
	            cache:false,
	            success:function(resp){
	                var Jresp=$.parseJSON(resp);
	                if(Jresp["estado"]=="1"){
	                    $.alert({
	                        title: 'Error',
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
});