$(document).ready(
	function() {

		var n = 0;
		var m = 0;

		$("#formExpP").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(){

  			}
		});

		$("#formExpD").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(){

  			}
		});

		newExpP();
		newExpD();
		$("#rowExpP").hide();
		$("#rowExpD").hide();

		$("#moreExpP").on("click", function(){
			newExpP();
		});

		$("#moreExpD").on("click", function(){
			newExpD();
		});

		function newExpP(){
			var clon = $("#rowExpP").clone();

			n=n+1;

			clon.removeAttr("id").attr("id","rowExpP"+n);

			clon.find("[id='puestoExpP0']").removeAttr("id").attr("id","puestoExpP"+n);
			clon.find("[name='puestoExpP0']").removeAttr("name").attr("name","puestoExpP"+n);
			clon.find("[for='puestoExpP0']").removeAttr("for").attr("for","puestoExpP"+n);

			clon.find("[id='orgExpP0']").removeAttr("id").attr("id","orgExpP"+n);
			clon.find("[name='orgExpP0']").removeAttr("name").attr("name","orgExpP"+n);
			clon.find("[for='orgExpP0']").removeAttr("for").attr("for","orgExpP"+n);

			clon.find("[id='mesDeExpP0']").removeAttr("id").attr("id","mesDeExpP"+n);

			clon.find("[id='yrDeExpP0']").removeAttr("id").attr("id","yrDeExpP"+n);

			clon.find("[id='mesAExpP0']").removeAttr("id").attr("id","mesAExpP"+n);

			clon.find("[id='yrAExpP0']").removeAttr("id").attr("id","yrAExpP"+n);


			if(n!=1){
				clon.find("i.fa-plus").removeClass("fa-plus").addClass("fa-minus").attr("data-value", n);
			} else {
				clon.find("i.fa-plus").attr("id", "moreExpP");
			}

			clon.find("select").addClass("newSelect");

			clon.appendTo("#baseExpP").show();

			$(".newSelect").formSelect();

			$(".newSelect").removeClass("newSelect");
		}

		function newExpD(){
			var clon = $("#rowExpD").clone();

			m=m+1;

			clon.removeAttr("id").attr("id","rowExpD"+m);

			clon.find("[id='orgExpD0']").removeAttr("id").attr("id","orgExpD"+m);
			clon.find("[name='orgExpD0']").removeAttr("name").attr("name","orgExpD"+m);
			clon.find("[for='orgExpD0']").removeAttr("for").attr("for","orgExpD"+m);

			clon.find("[id='perExpD0']").removeAttr("id").attr("id","perExpD"+m);
			clon.find("[name='perExpD0']").removeAttr("name").attr("name","perExpD"+m);
			clon.find("[for='perExpD0']").removeAttr("for").attr("for","perExpD"+m);

			clon.find("[id='nvlExpD0']").removeAttr("id").attr("id","nvlExpD"+m);
			clon.find("[name='nvlExpD0']").removeAttr("name").attr("name","nvlExpD"+m);
			clon.find("[for='nvlExpD0']").removeAttr("for").attr("for","nvlExpD"+m);

			if(m!=1){
				clon.find("i.fa-plus").removeClass("fa-plus").addClass("fa-minus").attr("data-value", m);
			} else {
				clon.find("i.fa-plus").attr("id", "moreExpD");
			}

			clon.appendTo("#baseExpD").show();
		}

		$(document).on("click", ".delExpP", function(){
			var v = $(this).find("i.fa-minus").data("value");
			$("#rowExpP"+v).remove();
		});

		$(document).on("click", ".delExpD", function(){
			var v = $(this).find("i.fa-minus").data("value");
			$("#rowExpD"+v).remove();
		});

		$("#infoExpP").on("click", function(){
			$.alert({
				icon: 'fas fa-info-circle',
			    title: '<div class="center-align"><h3>Experiencia Profesional</h3></div>',
			    content: '<div align="justify"><p>Ingrese las actividades o puestos desem'+
			    'peñados de carácter no académico, especificando la organización, mes y a'+
			    'ño de inicio al igual que de final.</p></div>',
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

		$("#infoExpD").on("click", function(){
			$.alert({
				icon: 'fas fa-info-circle',
			    title: '<div class="center-align"><h3>Experiencia en Diseño Ingenieril</h3></div>',
			    content: '<div align="justify"><p>Ingrese el tipo de experiencia en diseño, lugar'+
			    ' donde se realizó, número de años y alguna información relevante como el nivel d'+
			    'e experiencia.</p></div>',
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