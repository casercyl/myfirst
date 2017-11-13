$(function(){
	if($.cookie("img") && $.cookie("name") && $.cookie("price")) {
	$(".goods_list").append("<tbody><tr><td><a><img src="+$.cookie('img')+"></a></td><td><div class='goods_info'><p><a>"+$.cookie('name')+"</a></p></div></td><td>￥"+$.cookie('price')+"</td><td><div class='goodnum'><a class='remove'>-</a><input type='text' value='1' class='pronum'><a class='add'>+</a></div></td><td><div class='xj'>￥"+$.cookie('price')+"</div></td><td><a href='javascript:;' class='del'>删除</a></td></tr></tbody>")
	}
	if($(".goods_list tbody").length==0){
		$(".goods_list").append("<tbody class='item'><tr><td colspan='6'><div class='cart_pick'>您还没有挑选，赶快行动<a href='index.html'>马上去挑商品>></a></div></td></tr></tbody>")
	}else{
		$(".goods_list .item").remove();
	}
	$(".remove").click(function(){
		var i=$(".pronum").val()-1;
		if(i<0){
			i=0;
		}
		$(".pronum").val(i);
		$("#pro_count").text($(".pronum").val()+'件');
		var a=$.cookie('price');
			var b=$(".pronum").val();
			$(".xj").text("￥"+(a*b));
			$("#zgprice").text("￥"+(a*b));
			$("#pro_price").text("￥"+(a*b));
			
	});
	$(".add").click(function(){
		var i=parseInt($(".pronum").val())+1;
		$(".pronum").val(i);
		$("#pro_count").text($(".pronum").val()+'件');
		var a=$.cookie('price');
			var b=$(".pronum").val();
			$(".xj").text("￥"+(a*b));
			$("#zgprice").text("￥"+(a*b));
			$("#pro_price").text("￥"+(a*b));
	});
		$(".pronum").blur(function(){
			var i=parseInt($(".pronum").val());
			
				$(".pronum").val(i);
			
			
		});
		$(".del").click(function(){
			var r=confirm("确定删除么");
			if(r==true){
				$.cookie('img', null,{expires:-1,path: '/'});
				$.cookie('name', null,{expires:-1,path: '/'});
				$.cookie('price', null,{expires:-1,path: '/'});
				window.location.reload();
			}else{
				return false;
			}
		
	});
	$(".pronum").change(function(){
			$("#pro_count").text($(".pronum").val()+'件');
			var a=$.cookie('price');
			var b=$(".pronum").val();
			$(".xj").text("￥"+(a*b));
			$("#zgprice").text("￥"+(a*b));
			$("#pro_price").text("￥"+(a*b));
		});
		$("#pro_count").text($(".pronum").val()+'件');
		if($(".pronum").val()==undefined){
			$("#pro_count").text("0件");
		}
	});


