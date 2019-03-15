$(document).ready(function(){
	$("#ChineseFood").mouseover(function(){
	$("#ChineseFood").attr("src", "image/Category/ChineseFood-Hover.png");
	});
	$("#ChineseFood").mouseout(function(){
	$("#ChineseFood").attr("src", "image/Category/ChineseFood.jpg");
	});
	$("#EuropeFood").mouseover(function(){
	$("#EuropeFood").attr("src", "image/Category/EuropeFood-Hover.png");
	});
	$("#EuropeFood").mouseout(function(){
	$("#EuropeFood").attr("src", "image/Category/EuropeFood.jpg");
	});
	$("#JapaneseFood").mouseover(function(){
	$("#JapaneseFood").attr("src", "image/Category/JapaneseFood-Hover.png");
	});
	$("#JapaneseFood").mouseout(function(){
	$("#JapaneseFood").attr("src", "image/Category/JapaneseFood.jpg");
	});
	$("#OthersFood").mouseover(function(){
	$("#OthersFood").attr("src", "image/Category/OthersFood-Hover.png");
	});
	$("#OthersFood").mouseout(function(){
	$("#OthersFood").attr("src", "image/Category/OthersFood.jpg");
	});
});