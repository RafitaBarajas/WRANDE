$(document).ready(
	function(){
		$('.counter').characterCounter();

		$('.datepicker').datepicker({
			autoClose: true,
			format: 'dd/mm/yyyy',
			yearRange: 50
		});

		$('select').formSelect();

		$("#formRE").validetta({
			showErrorMessages : true,
			display : 'bubble',
			bubblePosition: 'bottom',
  			bubbleGapLeft: 40,
  			bubbleGapTop: 5,
  			realTime : true,
  			onValid : function(){

  			}
		});
	}
);