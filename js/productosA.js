$(document).ready(function() {

	$("form#formProd").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(e){
	  			e.preventDefault();
	  			var obj=$("form#formProd").serializeToJSON({
	  				associativeArrays: true,
				});
				var jsonString = JSON.stringify(obj);
		        	$.ajax({
			            method:"post",
			            url:"php/productos.php",
			            data: {string:jsonString},
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
			                        	var index =$("div.bhoechie-tab-menu>div.list-group>a.active").index();
			                        	$("a.list-group-item.text-left.active").removeClass("active");
			                        	$("a.list-group-item.text-left").eq(index+1).addClass("active");
			                        	$("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
		    							$("div.bhoechie-tab>div.bhoechie-tab-content").eq(index+1).addClass("active");
		    							$('#formProd').find('input, textarea, button, select').attr('disabled','disabled');
		    							$('#formProd').find('.fa-plus').hide();
		    							$('#formProd').find('.fa-minus').hide();
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