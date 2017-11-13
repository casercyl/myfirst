$(function() {
				$.fn.magnifying = function() {
					var that = $(this),
						$imgCon = that.find('.con-fangDaIMg'), //正常图片容器  
						$Img = $imgCon.find('img'), //正常图片，还有放大图片集合  
						$Drag = that.find('.magnifyingBegin'), //拖动滑动容器  
						$show = that.find('.magnifyingShow'), //放大镜显示区域  
						$showIMg = $show.find('img'), //放大镜图片  
						$ImgList = that.find('.con-FangDa-ImgList > li >img'),
						multiple = $show.width() / $Drag.width(); //倍数  

					$imgCon.mousemove(function(e) {
						$Drag.css('display', 'block');
						$show.css('display', 'block');
						var iX = e.pageX - $(this).offset().left - $Drag.width() / 2,
							iY = e.pageY - $(this).offset().top - $Drag.height() / 2,
							MaxX = $imgCon.width() - $Drag.width(),
							MaxY = $imgCon.height() - $Drag.height();
						

						iX = iX > 0 ? iX : 0;
						iX = iX < MaxX ? iX : MaxX;
						iY = iY > 0 ? iY : 0;
						iY = iY < MaxY ? iY : MaxY;
						$Drag.css({ left: iX + 'px', top: iY + 'px' });
						$showIMg.css({ marginLeft: -multiple * iX + 'px', marginTop: -multiple * iY + 'px' });
						//return false;  
					});
					$imgCon.mouseout(function() {
						$Drag.css('display', 'none');
						$show.css('display', 'none');
						//return false;  
					});

					$ImgList.click(function() {
						var NowSrc = $(this).attr('src');
						$Img.attr('src', NowSrc);
						$(this).parent().addClass('active').siblings().removeClass('active');
					});
				}
				$("#fangdajing").magnifying();
			});