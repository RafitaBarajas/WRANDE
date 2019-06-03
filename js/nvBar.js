$(document).ready(
	function(){

		$('#sidenav-user').sidenav({
			preventScrolling: false,
			edge: 'right'
		});

		$('#sidenav-bars').sidenav({
			preventScrolling: false,
			edge: 'left'
		});

		$("#btn-user-nav").show();

	}
);