$(document).ready(
	function() {

		var n = 0;

		$("#formFA").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(){

  			}
		});

		newFA();
		$("#rowFA").hide();

		$("#moreFA").on("click", function(){
			newFA();
		});

		function newFA(){
			var clon = $("#rowFA").clone();

			n=n+1;

			clon.removeAttr("id").attr("id","rowFA"+n);

			clon.find("[id='nvl0']").removeAttr("id").attr("id","nvl"+n);
			clon.find("[name='nvl0']").removeAttr("name").attr("name","nvl"+n);

			clon.find("[id='nombre0']").removeAttr("id").attr("id","nombre"+n);
			clon.find("[name='nombre0']").removeAttr("name").attr("name","nombre"+n);
			clon.find("[for='nombre0']").removeAttr("for").attr("for","nombre"+n);

			clon.find("[id='inst0']").removeAttr("id").attr("id","inst"+n);
			clon.find("[name='inst0']").removeAttr("name").attr("name","inst"+n);
			clon.find("[for='inst0']").removeAttr("for").attr("for","inst"+n);

			clon.find("[id='pais0']").removeAttr("id").attr("id","pais"+n);
			clon.find("[name='pais0']").removeAttr("name").attr("name","pais"+n);

			clon.find("[id='yr0']").removeAttr("id").attr("id","yr"+n);
			clon.find("[name='yr0']").removeAttr("name").attr("name","yr"+n);

			clon.find("[id='ced0']").removeAttr("id").attr("id","ced"+n);
			clon.find("[name='ced0']").removeAttr("name").attr("name","ced"+n);
			clon.find("[for='ced0']").removeAttr("for").attr("for","ced"+n);

			if(n!=1){
				clon.find("i.fa-plus").removeClass("fa-plus").addClass("fa-minus").attr("data-value", n);
			} else {
				clon.find("i.fa-plus").attr("id", "moreFA");
			}

			clon.find("select").addClass("newSelect");

			clon.appendTo("#baseFA").show();

			$(".newSelect").formSelect();

			$(".newSelect").removeClass("newSelect");
		}

		$(document).on("click", ".del", function(){
			var v = $(this).find("i.fa-minus").data("value");
			$("#rowFA"+v).remove();
		});

	}
);