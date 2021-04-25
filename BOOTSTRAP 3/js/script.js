$(function () {
    // this jquery is same as document.addEventListener(DOMContentLoaded)
	// body...
	$("#navbarToggle").blur(function (event) {
		// body...
         var screenWidth = window.innerWidth;
         if(screenWidth < 768) {
         	$("#collapsable-nav").collapse('hide');
         }
	});
});