jQuery(document).ready(function(){
 jQuery(".faq li:nth-child(3) .other-post").slideDown();
 jQuery(".faq li:nth-child(3) .other-hold").addClass("active");
	jQuery(".other-hold").click(function(){
		if (jQuery(this).hasClass("active")){
			jQuery(".other-hold").removeClass("active");
			jQuery(".other-post").slideUp("slow");
		}else {
			jQuery(".other-hold").removeClass("active");
			jQuery(this).addClass("active");
			jQuery(".other-post").slideUp("slow");
			jQuery(this).next().slideDown("slow");
		}
	});
});