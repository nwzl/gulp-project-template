(function(){
	var box = $id("banner"),
		ul = $tag("ul",box)[0],
		aLi = $tag('li',ul),
		ol = $tag("ol",box)[0],
		aBtn = [];
	
	var index = 0;//存当前处于第几张图
	var btnIndex = 0;//按钮的下标
	var flag = false;//没有播放
	var len = aLi.length;//图片的张数
	var liWidth = aLi[0].offsetWidth;//每一张的宽度
	
	//1、在ul后面追加第0张图
	ul.appendChild(ul.children[0].cloneNode(true));
	
	//2、给ul计算宽度
	ul.style.width = (len+1) * liWidth + "px";
	
	//3、动态添加按钮以及绑定点击事件
	for(var i = 0; i < len; i++){
		var li = document.createElement("li");
		li.innerHTML = i+1;
		if(i === 0){
			li.className = "ac";
		}
		aBtn.push(li);
		li.index = i;
		ol.appendChild(li);
		//4、按钮点击切换
		li.onclick = function(){
			if(!flag){
				flag = true;
				//切换按钮自己的样式
				aBtn[btnIndex].className = "";
				this.className = "ac";
				index = btnIndex = this.index;
				//ul运动到this对应的那张图
				move(ul,{"left":-index*liWidth},function(){
					flag = false;
				});
			}	
		}
	}

	setInterval(function(){
		if(!flag){
			flag = true;
			//1、把按钮样式改变
			aBtn[btnIndex].className = "";
			//2、index加1
			index++;
			btnIndex++;
			if(index == len){
				//到追加那张图,对于用户来讲是第0张
				btnIndex = 0;
			}
			if(index > len){
				//瞬间拉回到第0张图
				ul.style.left = "0px";
				//往第1张图切换
				index = btnIndex = 1;
			}
			//对应的按钮样式加上
			aBtn[btnIndex].className = "ac";
			move(ul,{"left":-index*liWidth},function(){
				flag = false;
			});
		}
		
	},4000);
	var a = $id("xiala"),
			b = $id("caidan");	
		a.onmouseenter=function(){
			b.className = "nav";
		}
		a.onmouseleave=function(){
			b.className = "navc";
		}

})();

