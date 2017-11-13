$(function(){
        var num=0;
        var timer1=null;
        go1();
        $("#floor1_main_R").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
            clearInterval(timer1);//移动进去时清除定时器
        }).mouseleave(function(){
            go1();//移出后执行go函数
        });
        $(".span_list1").eq(0).css("opacity",".8");
        //页面加载后默认是第一张图，则让第一个导航圆点变为“选中色”。
        function go1(){
          timer1=setInterval(function(){//设置定时器
                num++;//用一个全局变量来控制图的运动次数
                if(num>4){//如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
                    num=0;
                    $(".ul_list1").css("margin-left","0px");
                }
                if(num==5){//由于圆点只有四个，而图片有五张，当移动到第五张图片时，给第一个圆点“选中色”。
                    $(".span_list1").css("opacity",".3");
                    $(".span_list1").eq(0).css("opacity",".8");
                }
                else{//图片运动一次，导航圆点也动态的变换，这里先让所有圆点变为“不选中色”，再让当前圆点变为“选中色”。
                    $(".span_list1").css("opacity",".3");
                    $(".span_list1").eq(num).css("opacity",".8");
                }
                $(".ul_list1").animate({"marginLeft":-952*num+"px"},580);//使用animate实行运动功能
            },2000);
        }

        $(".span_list1").each(function (index) {//遍历每一个圆点添加点击事件，点击当前圆点则让num值赋为当前圆点的索引
            $(this).click(function () {
                num=index;
                $(".span_list1").css("opacity",".3");
                $(".span_list1").eq(num).css("opacity",".8");
                $(".ul_list1").stop().animate({"marginLeft":-952*num+"px"},580);
            })
        });
    });
    

//第二层的轮播图
$(function(){
        var num=0;
        var timer2=null;
        go2();
        $("#floor2_main_R").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
            clearInterval(timer2);//移动进去时清除定时器
        }).mouseleave(function(){
            go2();//移出后执行go函数
        });
        $(".span_list2").eq(0).css("opacity",".8");
        //页面加载后默认是第一张图，则让第一个导航圆点变为“选中色”。
        function go2(){
          timer2=setInterval(function(){//设置定时器
                num++;//用一个全局变量来控制图的运动次数
                if(num>4){//如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
                    num=0;
                    $(".ul_list2").css("margin-left","0px");
                }
                if(num==5){//由于圆点只有四个，而图片有五张，当移动到第五张图片时，给第一个圆点“选中色”。
                    $(".span_list2").css("opacity",".3");
                    $(".span_list2").eq(0).css("opacity",".8");
                }
                else{//图片运动一次，导航圆点也动态的变换，这里先让所有圆点变为“不选中色”，再让当前圆点变为“选中色”。
                    $(".span_list2").css("opacity",".3");
                    $(".span_list2").eq(num).css("opacity",".8");
                }
                $(".ul_list2").animate({"marginLeft":-952*num+"px"},580);//使用animate实行运动功能
            },2000);
        }

        $(".span_list2").each(function (index) {//遍历每一个圆点添加点击事件，点击当前圆点则让num值赋为当前圆点的索引
            $(this).click(function () {
                num=index;
                $(".span_list2").css("opacity",".3");
                $(".span_list2").eq(num).css("opacity",".8");
                $(".ul_list2").stop().animate({"marginLeft":-952*num+"px"},580);
            })
        });
    });
    
//第三层的轮播图
$(function(){
        var num=0;
        var timer3=null;
        go3();
        $("#floor3_main_R").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
            clearInterval(timer3);//移动进去时清除定时器
        }).mouseleave(function(){
            go3();//移出后执行go函数
        });
        $(".span_list3").eq(0).css("opacity",".8");
        //页面加载后默认是第一张图，则让第一个导航圆点变为“选中色”。
        function go3(){
          timer3=setInterval(function(){//设置定时器
                num++;//用一个全局变量来控制图的运动次数
                if(num>4){//如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
                    num=0;
                    $(".ul_list3").css("margin-left","0px");
                }
                if(num==5){//由于圆点只有四个，而图片有五张，当移动到第五张图片时，给第一个圆点“选中色”。
                    $(".span_list3").css("opacity",".3");
                    $(".span_list3").eq(0).css("opacity",".8");
                }
                else{//图片运动一次，导航圆点也动态的变换，这里先让所有圆点变为“不选中色”，再让当前圆点变为“选中色”。
                    $(".span_list3").css("opacity",".3");
                    $(".span_list3").eq(num).css("opacity",".8");
                }
                $(".ul_list3").animate({"marginLeft":-952*num+"px"},580);//使用animate实行运动功能
            },2000);
        }

        $(".span_list3").each(function (index) {//遍历每一个圆点添加点击事件，点击当前圆点则让num值赋为当前圆点的索引
            $(this).click(function () {
                num=index;
                $(".span_list3").css("opacity",".3");
                $(".span_list3").eq(num).css("opacity",".8");
                $(".ul_list3").stop().animate({"marginLeft":-952*num+"px"},580);
            })
        });
    });
    
//第四层轮播图
$(function(){
        var num=0;
        var timer4=null;
        go4();
        $("#floor4_main_R").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
            clearInterval(timer4);//移动进去时清除定时器
        }).mouseleave(function(){
            go4();//移出后执行go函数
        });
        $(".span_list4").eq(0).css("opacity",".8");
        //页面加载后默认是第一张图，则让第一个导航圆点变为“选中色”。
        function go4(){
          timer4=setInterval(function(){//设置定时器
                num++;//用一个全局变量来控制图的运动次数
                if(num>4){//如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
                    num=0;
                    $(".ul_list4").css("margin-left","0px");
                }
                if(num==5){//由于圆点只有四个，而图片有五张，当移动到第五张图片时，给第一个圆点“选中色”。
                    $(".span_list4").css("opacity",".3");
                    $(".span_list4").eq(0).css("opacity",".8");
                }
                else{//图片运动一次，导航圆点也动态的变换，这里先让所有圆点变为“不选中色”，再让当前圆点变为“选中色”。
                    $(".span_list4").css("opacity",".3");
                    $(".span_list4").eq(num).css("opacity",".8");
                }
                $(".ul_list4").animate({"marginLeft":-952*num+"px"},580);//使用animate实行运动功能
            },2000);
        }

        $(".span_list4").each(function (index) {//遍历每一个圆点添加点击事件，点击当前圆点则让num值赋为当前圆点的索引
            $(this).click(function () {
                num=index;
                $(".span_list4").css("opacity",".3");
                $(".span_list4").eq(num).css("opacity",".8");
                $(".ul_list4").stop().animate({"marginLeft":-952*num+"px"},580);
            })
        });
    });
    
//第五层轮播图
$(function(){
        var num=0;
        var timer5=null;
        go5();
        $("#floor5_main_R").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
            clearInterval(timer5);//移动进去时清除定时器
        }).mouseleave(function(){
            go5();//移出后执行go函数
        });
        $(".span_list5").eq(0).css("opacity",".8");
        //页面加载后默认是第一张图，则让第一个导航圆点变为“选中色”。
        function go5(){
          timer5=setInterval(function(){//设置定时器
                num++;//用一个全局变量来控制图的运动次数
                if(num>4){//如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
                    num=0;
                    $(".ul_list5").css("margin-left","0px");
                }
                if(num==5){//由于圆点只有四个，而图片有五张，当移动到第五张图片时，给第一个圆点“选中色”。
                    $(".span_list5").css("opacity",".3");
                    $(".span_list5").eq(0).css("opacity",".8");
                }
                else{//图片运动一次，导航圆点也动态的变换，这里先让所有圆点变为“不选中色”，再让当前圆点变为“选中色”。
                    $(".span_list5").css("opacity",".3");
                    $(".span_list5").eq(num).css("opacity",".8");
                }
                $(".ul_list5").animate({"marginLeft":-952*num+"px"},580);//使用animate实行运动功能
            },2000);
        }

        $(".span_list5").each(function (index) {//遍历每一个圆点添加点击事件，点击当前圆点则让num值赋为当前圆点的索引
            $(this).click(function () {
                num=index;
                $(".span_list5").css("opacity",".3");
                $(".span_list5").eq(num).css("opacity",".8");
                $(".ul_list5").stop().animate({"marginLeft":-952*num+"px"},580);
            })
        });
    });