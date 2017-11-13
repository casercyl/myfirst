$(function(){
	var flag1=false;
	var flag2=false;
	var flag3=false;
	var flag4=false;
	$("#register_name").blur(function(){
		if(/^((156|130|159)\d{8})$/.test($("#register_name").val())){
		$("#register_name").next().text("ok！");
		flag1=true;
	}else{
		$("#register_name").next().text("手机号不可用！");
		flag1=false;
	}
	});
	$("#register_password").blur(function(){
		if(/^\w{6,12}$/.test($("#register_password").val())){
		$("#register_password").next().text("ok！");
		flag2=true;
	}else{
		$("#register_password").next().text("密码不可用！");
		flag2=false;
	}
	});
	$("#register_password2").blur(function(){
		if($("#register_password2").val()==$("#register_password").val()){
		$("#register_password2").next().text("ok！");
		flag3=true;
	}else{
		$("#register_password2").next().text("密码不可用！");
		flag3=false;
	}
	});
	$(".green_link").click(function(){
		$(".green_link").next().val("666")
	});
	if($('.gou').attr('checked')) {
    	flag4=true;
	}else{
		flag4=false;
	}
//存入cookie

		$("#red_btn").click(function(){
			if(flag1&&flag2&&flag3){
			$user_name=$("#register_name").text();
			$.cookie("name",$user_name,{expires:7,path:"/"});
			$password=$("#register_password").text();
			$.cookie("password",$password,{expires:7,path:"/"});
			window.location="login.html";}else{
	
				alert("输入错误");}

		});


});