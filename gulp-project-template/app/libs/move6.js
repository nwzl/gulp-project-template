//多属性缓冲运动，兼容透明度，回调函数
function move(obj,endJson,fn){
	clearInterval(obj.timer);
	var startJson = {},
		speedJson = {};
	
	for(var key in endJson){
		if(key === "opacity"){
			startJson.opacity = parseInt(getStyle(obj,"opacity")*100);
		}else{
			startJson[key] = parseInt(getStyle(obj,key));
		}
		
	}
	
	obj.timer = setInterval(function(){
		//记录当前运动状态
		var flag = true;
		//计算剩下距离
		for(var key in endJson){
			var distance = endJson[key] - startJson[key];
			//计算当前速度
			speedJson[key] = distance>0?  Math.ceil(distance/10) : Math.floor(distance/10);
			//属性赋值
			startJson[key] += speedJson[key];
			if(key === "opacity"){
				obj.style.opacity = (startJson.opacity)/100; 
			}else{
				obj.style[key] = startJson[key] + "px";
			}
			if(startJson[key] != endJson[key]){
				//运动继续，false
				flag = false;
			}
		}
		
		
		if(flag){
			//运动结束了
			clearInterval(obj.timer);
			fn && fn();
		}
		
		
		
	},30);
}





