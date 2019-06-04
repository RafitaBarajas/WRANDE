$(document).ready(
	function() {

		var n = 0;
		var m = 0;

		$("#formLogro").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(){

  			}
		});

		$("#formPremio").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(){

  			}
		});

		newLogro();
		newPremio();
		$("#rowLogro").hide();
		$("#rowPremio").hide();

		$("#moreLogro").on("click", function(){
			newLogro();
		});

		$("#morePremio").on("click", function(){
			newPremio();
		});

		function newLogro(){
			var clon = $("#rowLogro").clone();

			n=n+1;

			clon.removeAttr("id").attr("id","rowLogro"+n);

			clon.find("[id='descLogro0']").removeAttr("id").attr("id","descLogro"+n);
			clon.find("[name='descLogro0']").removeAttr("name").attr("name","descLogro"+n);
			clon.find("[for='descLogro0']").removeAttr("for").attr("for","descLogro"+n);

			if(n!=1){
				clon.find("i.fa-plus").removeClass("fa-plus").addClass("fa-minus").attr("data-value", n);
			} else {
				clon.find("i.fa-plus").attr("id", "moreLogro");
			}

			clon.appendTo("#baseLogro").show();
		}

		function newPremio(){
			var clon = $("#rowPremio").clone();

			m=m+1;

			clon.removeAttr("id").attr("id","rowPremio"+m);

			clon.find("[id='descPremio0']").removeAttr("id").attr("id","descPremio"+m);
			clon.find("[name='descPremio0']").removeAttr("name").attr("name","descPremio"+m);
			clon.find("[for='descPremio0']").removeAttr("for").attr("for","descPremio"+m);

			if(m!=1){
				clon.find("i.fa-plus").removeClass("fa-plus").addClass("fa-minus").attr("data-value", m);
			} else {
				clon.find("i.fa-plus").attr("id", "morePremio");
			}

			clon.appendTo("#basePremio").show();
		}

		$(document).on("click", ".delLogro", function(){
			var v = $(this).find("i.fa-minus").data("value");
			$("#rowLogro"+v).remove();
		});

		$(document).on("click", ".delPremio", function(){
			var v = $(this).find("i.fa-minus").data("value");
			$("#rowPremio"+v).remove();
		});

		$("#infoLogro").on("click", function(){
			$.alert({
				icon: 'fas fa-info-circle',
			    title: '<div class="center-align"><h3>Logros Profesionales</h3></div>',
			    content: '<div align="justify"><p>Ingrese los logros profesionales de'+
			    ' carácter no académico relevantes en los últimos 5 años relacionados'+
			    ' con el Programa Educativo, incluya datos relevantes como: título, a'+
			    'utor(es), nombre del logro, relevancia, dónde se realizó, entre otro'+
			    's aspectos.</p></div>',
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

		$("#infoPremio").on("click", function(){
			$.alert({
				icon: 'fas fa-info-circle',
			    title: '<div class="center-align"><h3>Premios Distinciones y Reconocimientos</h3></div>',
			    content: '<div align="justify"><p>Ingrese los premios, distinciones o '+
			    'reconocimientos recibidos, incluya datos relevantes como: nombre del '+
			    'premio, organismo que lo otorga, motivos por los que se otorgó, entre'+
			    ' otros aspectos.</p></div>',
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