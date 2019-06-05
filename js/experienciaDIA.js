$(document).ready(function() {

	$("form#formExpD").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(e){
	  			e.preventDefault();
	  			var obj=$("form#formExpD").serializeToJSON({
	  				associativeArrays: true,
				});
				var jsonString = JSON.stringify(obj);
				alert(jsonString);
		        	$.ajax({
			            method:"post",
			            url:"php/experienciaDI.php",
			            data: {string: jsonString},
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
			                        	//$(location).attr('href',"principal.html");
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