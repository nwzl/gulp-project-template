window.onload=function(){
	var pageCount=4;
var index=1;
var pageNum;
var allNum;
function selectData(){
ajax({
	url:"http://localhost/gulp-project-template/dist/servers/list.php",
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
				str+= `<div class="Products">
	<a href="/Ganso/zh/p/600000438" class="photo"><img src="/images/${data[i].id}.jpg"></a>
	<div class="ms">
		<h5><a href="/Ganso/zh/p/600000438">${data[i].name}</a></h5>

		<p></p>
		</div>
	<strong class="price">${data[i].cost}</strong>
	<a href="/Ganso/zh/p/600000438" class="btn_minxi">立即购买</a>
	</div>`;

			}
			$id("ProductList").innerHTML = str;
		$id("pagination").innerHTML = `<li>
		      <a href="#" aria-label="Previous" class="prev">
		        <span aria-hidden="true" class="prev">&laquo;</span>
		      </a>
		    </li>
		    <li id="lastLi">
		      <a href="#" aria-label="Next" class="next">
		        <span aria-hidden="true" class="next">&raquo;</span>
		      </a>
		    </li>`;
			//拼接分页
			for(var i = 1; i <= pageNum; i++){
				var li = document.createElement("li");
				if(i === index){
					li.className = "active";
				}
				li.innerHTML = '<a href="#">'+ i +'</a>';
				$id("pagination").insertBefore(li,$id("lastLi"));
			}

		}
		

});	}
selectData();

$id("pagination").onclick = function(e){
	e = e || window.event;
	var target = e.target || e.srcElement;
	var str = target.innerHTML;

	if(!isNaN(Number(str))){
		//代表点击的是对应页码
		index = Number(str);
	}else if(target.className === "prev"){
		index--;
		if(index < 1) index = 1;
	}else if(target.className === "next"){
		index++;
		if(index > pageNum) index = pageNum;
	}
selectData();
	

}

}