window.onload=function(){

var box = $id("banner"),
		ul = $tag("ul",box)[0],
		aLi = $tag('li',ul),
		ol = $tag("ol",box)[0],
		aBtn = [];
	
	var num = 0;//存当前处于第几张图
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
		li.num = i;
		ol.appendChild(li);
		//4、按钮点击切换
		li.onclick = function(){
			if(!flag){
				flag = true;
				//切换按钮自己的样式
				aBtn[btnIndex].className = "";
				this.className = "ac";
				num = btnIndex = this.num;
				//ul运动到this对应的那张图
				move(ul,{"left":-num*liWidth},function(){
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
			num++;
			btnIndex++;
			if(num == len){
				//到追加那张图,对于用户来讲是第0张
				btnIndex = 0;
			}
			if(num > len){
				//瞬间拉回到第0张图
				ul.style.left = "0px";
				//往第1张图切换
				num = btnIndex = 1;
			}
			//对应的按钮样式加上
			aBtn[btnIndex].className = "ac";
			move(ul,{"left":-num*liWidth},function(){
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



var pageCount=4;
var index=1;
var pageNum;
var allNum;
ajax({
	url:"http://localhost/gulp-project-template/dist/servers/index.php",
	method:"GET",
	options:{pageCount: pageCount,index:index},
	succ:function(data1){
			data1 = JSON.parse(data1);
			
			
			//return;
			var data = data1.data;
			allNum = data1.allNum;
			//总页数
			pageNum = Math.ceil(allNum / pageCount);
			//拼接tr的字符串
			var str = "";
			for(var i = 0; i < data.length; i++){
				str+= `<li><a href="/html/shop.html" class="photo">
				<img src="images/${data[i].id}.jpg"></a>
				<strong style="text-align:center">${data[i].name}</strong>
				<em> ${data[i].cost}</em></li>`;

			}
			$id("abc").innerHTML = str;
	

		}


				});	
$id("RecommendTab").onclick=function(e){
	e=e||window.event;
	var target = e.target || e.srcElement;
	var str = target.innerHTML;
	var _this = this;
	console.log(this.children);
	 for (var i = 0; i < this.children.length; i++) {
	 	this.children[i].className="";
	 }
	// this.children[0].className
	if(str=="元祖新品"){
		index=1;
		this.children[0].className="change";
	}else if(str=="热销推荐"){
		index=2;
		this.children[1].className="change";
	}else if(str=="节庆民俗"){
		index=3;
		this.children[2].className="change";
	}else if(str=="元祖卡券"){
		index=4;
		this.children[3].className="change";
	};
	

	ajax({
	url:"http://localhost/gulp-project-template/dist/servers/index.php",
	method:"GET",
	options:{pageCount: pageCount,index:index},
	succ:function(data1){
			data1 = JSON.parse(data1);
			
			//return;
			var data = data1.data;
			allNum = data1.allNum;
			//总页数
			pageNum = Math.ceil(allNum / pageCount);
			//拼接tr的字符串
			var str = "";
			for(var i = 0; i < data.length; i++){
				str+= `<li><a href="/html/shop.html" class="photo">
				<img src="images/${data[i].id}.jpg"></a>
				<strong style="text-align:center">${data[i].name}</strong>
				<em> ${data[i].cost}</em></li>`;

			}
			$id("abc").innerHTML = str;
	

		}


				});	
}
}