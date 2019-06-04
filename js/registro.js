$(document).ready(
	function(){
		$('.counter').characterCounter();

		$('.datepicker').datepicker({
			autoClose: true,
			format: 'dd/mm/yyyy',
			yearRange: 50
		});

		$('select').formSelect();

	}
);