(function($, window, document,undefined){	
			var dialogInfo = {
				message: 'this ia a message', // 消息内容
				style: 'info', // 弹窗类型
				time: 1000, // 显示时间
				model:false // 是否模态
			};
			$.gmNoticeWnd = function(opt) {
				var settings = $.extend({}, dialogInfo, opt),
					dialogHtml = "";
					
					dialogHtml	+= '<div class = "notice alert" style = "width:200px; height:200px;padding:0px">'
							    + "<div class = 'notice-head' style = 'height: 10px'>"
								+  "<button type = 'button' class = 'close' style = 'display: none'>&times;</button>"
								+ "</div>"
								+"<br>"
								+'<div style="text-align:center;margin-top:15px">'
								+'<img id = "alertType" src = "/notice.js/img/check.png" style="text-align:center">'
								+'</div>'
								+ "<div class = 'notice-body'>"
								+ "<p class='diap'>" + settings.message + "</p>"
								+ "</div>"
								+ '</div>';
				
				var modalDialog = "<div class = 'noticecover' id = 'coverId' style = 'position: absolute; top: 0; left: 0; width:100%; height:100%; z-index: 99;'>" +
								  dialogHtml +
								  "</div>";
								  
				return (function setNotice() {
					var noticeStyle = settings.style;
					
					if (settings.model == false) {
						$("body").append(dialogHtml);
						$(".noticecover").css("background","#000000");
					} else {
						$("body").append(modalDialog);
						$("button").css("display","block");	
					};
					var $notice = $(".notice"),
						noticeTop = (document.documentElement.clientHeight / 2) - $notice.height(),
					  	noticeLeft = (document.documentElement.clientWidth / 2) - $notice.width() / 2;
					
					$notice.css({"position": "absolute",
								 "top": noticeTop,
								 "left": noticeLeft,						
								});
								
					switch (noticeStyle) {
						case 'error':
							$notice.addClass("alert-danger");
							$('#alertType').attr('src','/notice.js/img/cross.png');
							break;
						
						case 'normal':
							$notice.addClass("alert-success");
							$('#alertType').attr('src','/notice.js/img/check.png');
							break;
						
						case 'warning':
							$notice.addClass("alert-warning");
							break;
							
						default:
							$notice.addClass("alert-info");
					};
					
					setTimeout(function() {
								
						if (settings.model == false) {
							$notice.remove();
						} else {
							$(".close").click(function() {
								$(".noticecover").remove();
							});
						};	
					}, settings.time);
					
					function setPosition() {
						var fatherCover = document.getElementById("coverId"),
							changedLeft = $(fatherCover).width() / 2 - $notice.width() / 2,
							changedTop = $(fatherCover).height() / 2 - $notice.height() / 2;
			
						$notice.css({"position": "absolute",
									"top": changedTop,
									"left": changedLeft,						
								});
					}
					
					if (window.addEventListener) {
						
						window.addEventListener("resize", function() {
							setPosition();
						})
					} else if (window.attachEvent) {
						
						window.attachEvent("onresize", function() {
							setPosition();
						})
					}
				} ());		
			};
			$.fn.appearDialog = function(opt) {
				$.gmNoticeWnd(opt);
			};
		})(jQuery, window, document);
				