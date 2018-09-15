<?php
	$pageCount = $_GET['pageCount'];
	$index = $_GET["index"];
	header("Access-Control-Allow-Origin:*");
	mysql_connect("127.0.0.1","root","");
	mysql_select_db('xiangmu');
	//查询当前页码的3条
	/*index 1  limit 0,3
	index 2  limit 3,3
	index 3  limit 6,3*/
	$sql = "SELECT * FROM xiangmu LIMIT ".($index-1)*$pageCount.",".$pageCount;
	mysql_query("set names 'utf8'");
	$result = mysql_query($sql);
	//查询总数量，根据总数量计算总页数
	$sql1 = "SELECT COUNT(*)  as AllNum FROM xiangmu";
	$index = mysql_query($sql1);
	$index = mysql_fetch_assoc($index);
	//echo json_encode($index);


	//存放所有查询到数据的数组
	$topArr = array();
	while ($arr = mysql_fetch_array($result)) {
		array_push($topArr, $arr);
	}

	
	$json = array("allNum" => $index['AllNum'] , "data" => $topArr);
	echo json_encode($json);


?>
