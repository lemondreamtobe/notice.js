# notice.js
纪念第一次做的Jquery插件
用法：负载在点击事件里：
  $("#noticeButton").click(function(event) {
				$("body").appearDialog({model: true,
										style: 'suceess',
										message: 'i love js.i love css.i love HTML.i love douglas.我爱JS。我爱CSS。我爱HTML。我爱道格拉斯。'
										});
			});
