$(document).ready(function() {
				$(".dd1").hide();
				$(".dt1 a").click(function() {
					$(this).parent().toggleClass("bg");
					$(this).parent().prevAll(".dt1").removeClass("bg")
					$(this).parent().nextAll(".dt1").removeClass("bg")
					$(this).parent().next().slideToggle();
					$(this).parent().prevAll(".dd1").slideUp("slow");
					$(this).parent().next().nextAll(".dd1").slideUp("slow");
					return false;
				});
			});