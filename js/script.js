$(document).ready(function () {
	// duyarlı menu | https://youtu.be/xMTs8tAapnQ
	$("#res-menu").on("change", function () {
		if ( $(this).is(':checked') ) {
			$(".nav ul").addClass("mobile-menu-active");
		} else {
			$(".nav ul").removeClass("mobile-menu-active");
		}
	});

	// yapiskan sol menu | https://abouolia.github.io/sticky-sidebar/
	$('.sidebar').stickySidebar({
		topSpacing: 60,
		bottomSpacing: 60
	});
});
