$(function(){
//存入cookie
		$(".btn_buy").click(function(){
			$img=$(".now_pic").attr("src");
			$.cookie("img",$img,{expires:7,path:"/"});
			$name=$(".goods_name").text();
			$.cookie("name",$name,{expires:7,path:"/"});
			$price=$(".price_num").text();
			$.cookie("price",$price,{expires:7,path:"/"});
			window.location.href="cart.html";
		});
});