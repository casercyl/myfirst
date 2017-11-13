$(window).scroll( function() {
	var sc=$(window).scrollTop();
	if(sc>150){
		$(".gotop").css("display","block");
	}else{
		$(".gotop").css("display","none");
	}
} );