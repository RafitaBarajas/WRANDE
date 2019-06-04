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

			clon.find("[id='yrDeGest0']").removeAttr("id").attr("id","yrDeGest"+n);

			clon.find("[id='mesAGest0']").removeAttr("id").attr("id","mesAGest"+n);

			clon.find("[id='yrAGest0']").removeAttr("id").attr("id","yrAGest"+n);


			if(n!=1){
				clon.find("i.fa-plus").removeClass("fa-plus").addClass("fa-minus").attr("data-value", n);
			} else {
				clon.find("i.fa-plus").attr("id", "moreGest");
			}

			clon.find("select").addClass("newSelect");

			clon.appendTo("#baseGest").show();

			$(".newSelect").formSelect();

			$(".newSelect").removeClass("newSelect");
		}

		$(document).on("click", ".delGest", function(){
			var v = $(this).find("i.fa-minus").data("value");
			$("#rowGest"+v).remove();
		});

	}
);