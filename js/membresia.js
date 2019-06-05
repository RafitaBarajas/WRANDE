$(document).ready(
	function() {

		var m = 0;

		$("#formMemb").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(){

  			}
		});

		newMemb();
		$("#rowMemb").hide();

		$("#moreMemb").on("click", function(){
			newMemb();
		});

		function newMemb(){
			var clon = $("#rowMemb").clone();

			m=m+1;

			clon.removeAttr("id").attr("id","rowMemb"+m);

			clon.find("[id='orgMemb0']").removeAttr("id").attr("id","orgMemb"+m);
			clon.find("[name='orgMemb0']").removeAttr("name").attr("name","orgMemb"+m);
			clon.find("[for='orgMemb0']").removeAttr("for").attr("for","orgMemb"+m);

			clon.find("[id='perMemb0']").removeAttr("id").attr("id","perMemb"+m);
			clon.find("[name='perMemb0']").removeAttr("name").attr("name","perMemb"+m);
			clon.find("[for='perMemb0']").removeAttr("for").attr("for","perMemb"+m);

			clon.find("[id='nvlMemb0']").removeAttr("id").attr("id","nvlMemb"+m);
			clon.find("[name='nvlMemb0']").removeAttr("name").attr("name","nvlMemb"+m);
			clon.find("[for='nvlMemb0']").removeAttr("for").attr("for","nvlMemb"+m);

			if(m!=1){
				clon.find("i.fa-plus").removeClass("fa-plus").addClass("fa-minus").attr("data-value", m);
			} else {
				clon.find("i.fa-plus").attr("id", "moreMemb");
			}

			clon.find(".counter").characterCounter();

			clon.appendTo("#baseMemb").show();
		}

		$(document).on("click", ".delMemb", function(){
			var v = $(this).find("i.fa-minus").data("value");
			$("#rowMemb"+v).remove();
		});

		$("#infoMemb").on("click", function(){
			$.alert({
				icon: 'fas fa-info-circle',
			    title: '<div class="center-align"><h3>Membresías o Participaciones</h3></div>',
			    content: '<div align="justify"><p>Ingrese membresías o participaciones que '+
			    'haya realizado en colegios, cámaras, asociaciones científicas o algún otro'+
			    ' tipo de organismo profesional.</p></div>',
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