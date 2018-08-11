var rMenu = document.querySelectorAll(".rMenu li");
var lMenu = document.querySelectorAll(".lMenu dd");
var chatItem = document.querySelectorAll(".chatItem li");
var chatName = document.querySelectorAll(".name");
//添加原点
function isChoose(str,len,name) {
	for(var i = 0; i < len; i++) {
		str[i].onclick = function() {
			for(var i = 0; i < len; i++) {
				str[i].className = ""
			}
			this.className = name;
		}		
	}
}
isChoose(rMenu,rMenu.length - 1,"choose");
isChoose(lMenu,lMenu.length,"choose");
//添加蓝色条形以及改变name颜色
function iSChoose() {
	for(var i = 0; i < chatItem.length; i++) {
		chatItem[i].onclick = function() {
			for(var j = 0; j < chatItem.length; j++) {
				chatName[j].className = "name";
				chatItem[j].className = "";
			}	
			this.className = "present";
			this.querySelectorAll("span")[0].className = "name current";
		}		
	}
}
iSChoose();