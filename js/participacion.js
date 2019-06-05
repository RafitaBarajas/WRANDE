$(document).ready(
	function() {

		$("#formPart").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(){

  			}
		});

		$("#infoPart").on("click", function(){
			$.alert({
				icon: 'fas fa-info-circle',
			    title: '<div class="center-align"><h3>Participación en el Programa Educativo (PE)</h3></div>',
			    content: '<div align="justify"><p>En un máximo de 200 palabras, reseñe cuál ha sido'+
			    ' su participación en actividades relevantes del PE, tales como: diseño del PE, dis'+
			    'eño de asignatura(s) del PE, análisis de indicadores del PE, participación en cuer'+
			    'pos colegiados del PE, participación en grupos de mejora continua del PE, entre ot'+
			    'ras.</p></div>',
			    boxWidth: '50%',
			    type: 'blue',
			    theme: 'material',
    			useBootstrap: false,
				buttons: {
			        Entendido: {
			        	btnClass: 'btn-blue',
			        	action: function(){
			        	}
			    	},
			     	
				}
			});
		});

	}
);