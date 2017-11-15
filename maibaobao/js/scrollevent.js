$(window).scroll( function() {
	var sc=$(window).scrollTop();
	if(sc>150){
		$(".gotop").css("display","block");
	}else{
		$(".gotop").css("display","none");
	}
} );
$(".gotop").mouseover(function(){
		$(".icon1").css("background-position-y","-35px")
		$(".gotop a").css({"background-color":"white","border-color":"#ccc"})
		$(".gotop span").css("color","#d41c50")
})
$(".gotop").mouseout(function(){
		$(".icon1").css("background-position-y","0px")
		$(".gotop a").css({"background-color":"#d41c50","border-color":"#d41c50"})
		$(".gotop span").css("color","white")
})

$(".chat").mouseover(function(){
		$(".icon2").css("background-position-y","-35px")
		$(".chat a").css({"background-color":"white","border-color":"#ccc"})
		$(".chat span").css("color","#d41c50")
})
$(".chat").mouseout(function(){
		$(".icon2").css("background-position-y","0px")
		$(".chat a").css({"background-color":"#d41c50","border-color":"#d41c50"})
		$(".chat span").css("color","white")
})

$(".cart").mouseover(function(){
		$(".icon3").css("background-position-y","-35px")
		$(".cart a").css({"background-color":"white","border-color":"#ccc"})
		$(".cart span").css("color","#d41c50")
})
$(".cart").mouseout(function(){
		$(".icon3").css("background-position-y","0px")
		$(".cart a").css({"background-color":"#d41c50","border-color":"#d41c50"})
		$(".cart span").css("color","white")
})

$(".qrcode").mouseover(function(){
		$(".icon4").css("background-position-y","-35px")
		$(".qrcode a").css({"background-color":"white","border-color":"#ccc"})
		$(".qrcode span").css("color","#d41c50")
})
$(".qrcode").mouseout(function(){
		$(".icon4").css("background-position-y","0px")
		$(".qrcode a").css({"background-color":"#d41c50","border-color":"#d41c50"})
		$(".qrcode span").css("color","white")
})