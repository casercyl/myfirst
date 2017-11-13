$.getJSON("json/products.json", function(data) {
			$.each(data, function(index, value) {
			$(".pro_show").append("<li><a><img src="+value.img+"/></a><div><a>"+value.title+"</a><div><strong>"+value.price+"</strong><s>"+value.last_price+"</s></div></div></li>")});
			});
