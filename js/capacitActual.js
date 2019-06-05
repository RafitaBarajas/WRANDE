$(document).ready(
	function() {

		var n = 0;
		var m = 0;

		$("#formCapacit").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(){

  			}
		});

		$("#formAct").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(){

  			}
		});

		newCap();
		newAct();

		$("#rowCapacit").hide();
		$("#rowAct").hide();

		$("#moreCap").on("click", function(){
			newCap();
		});

		$("#moreAct").on("click", function(){
			newAct();
		});

		function newCap(){
			var clon = $("#rowCapacit").clone();

			n=n+1;

			clon.removeAttr("id").attr("id","rowCapacit"+n);

			clon.find("[id='tipoCap0']").removeAttr("id").attr("id","tipoCap"+n);
			clon.find("[name='tipoCap0']").removeAttr("name").attr("name","tipoCap"+n);
			clon.find("[for='tipoCap0']").removeAttr("for").attr("for","tipoCap"+n);

			clon.find("[id='instCap0']").removeAttr("id").attr("id","instCap"+n);
			clon.find("[name='instCap0']").removeAttr("name").attr("name","instCap"+n);
			clon.find("[for='instCap0']").removeAttr("for").attr("for","instCap"+n);

			clon.find("[id='paisCap0']").removeAttr("id").attr("id","paisCap"+n);
			clon.find("[name='paisCap0']").removeAttr("name").attr("name","paisCap"+n);

			clon.find("[id='yrCap0']").removeAttr("id").attr("id","yrCap"+n);
			clon.find("[name='yrCap0']").removeAttr("name").attr("name","yrCap"+n);

			clon.find("[id='hrsCap0']").removeAttr("id").attr("id","hrsCap"+n);
			clon.find("[name='hrsCap0']").removeAttr("name").attr("name","hrsCap"+n);
			clon.find("[for='hrsCap0']").removeAttr("for").attr("for","hrsCap"+n);

			if(n!=1){
				clon.find("i.fa-plus").removeClass("fa-plus").addClass("fa-minus").attr("data-value", n);
			} else {
				clon.find("i.fa-plus").attr("id", "moreCap");
			}

			clon.find("select").addClass("newSelect");
			clon.find(".counter").characterCounter();

			clon.appendTo("#baseCapacit").show();

			$(".newSelect").formSelect();

			$(".newSelect").removeClass("newSelect");
		}

		function newAct(){
			var clon = $("#rowAct").clone();

			m=m+1;

			clon.removeAttr("id").attr("id","rowAct"+m);

			clon.find("[id='tipoAct0']").removeAttr("id").attr("id","tipoAct"+m);
			clon.find("[name='tipoAct0']").removeAttr("name").attr("name","tipoAct"+m);
			clon.find("[for='tipoAct0']").removeAttr("for").attr("for","tipoAct"+m);

			clon.find("[id='instAct0']").removeAttr("id").attr("id","instAct"+m);
			clon.find("[name='instAct0']").removeAttr("name").attr("name","instAct"+m);
			clon.find("[for='instAct0']").removeAttr("for").attr("for","instAct"+m);

			clon.find("[id='paisAct0']").removeAttr("id").attr("id","paisAct"+m);
			clon.find("[name='paisAct0']").removeAttr("name").attr("name","paisAct"+m);

			clon.find("[id='yrAct0']").removeAttr("id").attr("id","yrAct"+m);
			clon.find("[name='yrAct0']").removeAttr("name").attr("name","yrAct"+m);

			clon.find("[id='hrsAct0']").removeAttr("id").attr("id","hrsAct"+m);
			clon.find("[name='hrsAct0']").removeAttr("name").attr("name","hrsAct"+m);
			clon.find("[for='hrsAct0']").removeAttr("for").attr("for","hrsAct"+m);

			if(m!=1){
				clon.find("i.fa-plus").removeClass("fa-plus").addClass("fa-minus").attr("data-value", m);
			} else {
				clon.find("i.fa-plus").attr("id", "moreAct");
			}

			clon.find("select").addClass("newSelect");
			clon.find(".counter").characterCounter();

			clon.appendTo("#baseAct").show();

			$(".newSelect").formSelect();

			$(".newSelect").removeClass("newSelect");
		}

		$(document).on("click", ".delCap", function(){
			var v = $(this).find("i.fa-minus").data("value");
			$("#rowCapacit"+v).remove();
		});

		$(document).on("click", ".delAct", function(){
			var v = $(this).find("i.fa-minus").data("value");
			$("#rowAct"+v).remove();
		});

	}
);