$(document).ready(
	function() {

		var n = 0;

		$("#formGest").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(){

  			}
		});

		newGest();
		$("#rowGest").hide();

		$("#moreGest").on("click", function(){
			newGest();
		});

		function newGest(){
			var clon = $("#rowGest").clone();

			n=n+1;

			clon.removeAttr("id").attr("id","rowGest"+n);

			clon.find("[id='puestoGest0']").removeAttr("id").attr("id","puestoGest"+n);
			clon.find("[name='puestoGest0']").removeAttr("name").attr("name","puestoGest"+n);
			clon.find("[for='puestoGest0']").removeAttr("for").attr("for","puestoGest"+n);

			clon.find("[id='instGest0']").removeAttr("id").attr("id","instGest"+n);
			clon.find("[name='instGest0']").removeAttr("name").attr("name","instGest"+n);
			clon.find("[for='instGest0']").removeAttr("for").attr("for","instGest"+n);

			clon.find("[id='mesDeGest0']").removeAttr("id").attr("id","mesDeGest"+n);
			clon.find("[name='mesDeGest0']").removeAttr("name").attr("name","mesDeGest"+n);

			clon.find("[id='yrDeGest0']").removeAttr("id").attr("id","yrDeGest"+n);
			clon.find("[name='yrDeGest0']").removeAttr("name").attr("name","yrDeGest"+n);

			clon.find("[id='mesAGest0']").removeAttr("id").attr("id","mesAGest"+n);
			clon.find("[name='mesAGest0']").removeAttr("name").attr("name","mesAGest"+n);

			clon.find("[id='yrAGest0']").removeAttr("id").attr("id","yrAGest"+n);
			clon.find("[name='yrAGest0']").removeAttr("name").attr("name","yrAGest"+n);


			if(n!=1){
				clon.find("i.fa-plus").removeClass("fa-plus").addClass("fa-minus").attr("data-value", n);
			} else {
				clon.find("i.fa-plus").attr("id", "moreGest");
			}

			clon.find("select").addClass("newSelect");
			clon.find(".counter").characterCounter();

			clon.appendTo("#baseGest").show();

			$(".newSelect").formSelect();

			$(".newSelect").removeClass("newSelect");
		}

		$(document).on("click", ".delGest", function(){
			var v = $(this).find("i.fa-minus").data("value");
			$("#rowGest"+v).remove();
		});

		$("#infoGest").on("click", function(){
			$.alert({
				icon: 'fas fa-info-circle',
			    title: '<div class="center-align"><h3>Gestión Académica</h3></div>',
			    content: '<div align="justify"><p>Ingrese las actividades o puestos académicos '+
			    'que ha desempeñado, incluta el nombre de dicha actividado o puesto, la institución '+
			    'en donde se desempeño, el mes y año de inicio al igual que de final.</p></div>',
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