$(document).ready(
	function() {

		var n = 0;

		$("#formProd").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(){

  			}
		});

		newProd();
		$("#rowProd").hide();

		$("#moreProd").on("click", function(){
			newProd();
		});

		function newProd(){
			var clon = $("#rowProd").clone();

			n=n+1;

			clon.removeAttr("id").attr("id","rowProd"+n);

			clon.find("[id='descProd0']").removeAttr("id").attr("id","descProd"+n);
			clon.find("[name='descProd0']").removeAttr("name").attr("name","descProd"+n);
			clon.find("[for='descProd0']").removeAttr("for").attr("for","descProd"+n);

			if(n!=1){
				clon.find("i.fa-plus").removeClass("fa-plus").addClass("fa-minus").attr("data-value", n);
			} else {
				clon.find("i.fa-plus").attr("id", "moreProd");
			}

			clon.find(".counter").characterCounter();

			clon.appendTo("#baseProd").show();
		}

		$(document).on("click", ".delProd", function(){
			var v = $(this).find("i.fa-minus").data("value");
			$("#rowProd"+v).remove();
		});

		$("#infoProd").on("click", function(){
			$.alert({
				icon: 'fas fa-info-circle',
			    title: '<div class="center-align"><h3>Productos Académicos</h3></div>',
			    content: '<div align="justify"><p>Ingrese datos relevantes de los últimos 5 '+
			    'años relacionados con el Programa Educativo como: publica'+
			    'ciones (título, autor(es), lugar y fecha de publicación o presentación), pa'+
			    'tentes o desarrollos tecnológicos (tipo, número de registro, alcance), entr'+
			    'e otras cosas.</p></div>',
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