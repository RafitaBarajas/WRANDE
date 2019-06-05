$(document).ready(
	function() {

		$("#formDatos").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(){

  			}
		});

		//$('.counter').characterCounter();

		$('.datepicker').datepicker({
			autoClose: true,
			format: 'dd/mm/yyyy',
			yearRange: 50
		});

		$(".datosSelect").formSelect();
	}
);