$(document).ready(
	function(){
		$('.counter').characterCounter();

		$('.datepicker').datepicker({
			autoClose: true,
			format: 'dd/mm/yyyy',
			yearRange: 50
		});

		$('select').formSelect();

		$('.psw').hide();
		$(document).on("click", ".show", function () {
            $('.show').hide();
            $('.cc').val('');
            $('.psw').show();
        })
	}
);