function barchart()
{
	window.addEventListener('load',function(){
	//數據用 random 的方式產生
	var data=[
 	{x:1, w:Math.floor(Math.random()*200)},
  	{x:2, w:Math.floor(Math.random()*200)},
  	{x:3, w:Math.floor(Math.random()*200)},
  	{x:4, w:Math.floor(Math.random()*200)},
  	{x:5, w:Math.floor(Math.random()*200)},
	];
	//svg畫布的長寬
	var width = 1024;
	var height = 768;
	//插入svg畫布
	var bar = d3.select("body").append("svg").attr("width", width).attr("height", height);
	//選擇所有數據，畫長方形
	bar.selectAll("rect").data(data).enter().append("rect").attr({
		//長條圖顏色
		"fill":"#09c",
		//各長條的長度，以w的數值而定
		"width":function(d){
			return d.w;
		},
		//各長條的高固定
		"height":30,
		//定位座標：X為0,y取一定間隔
		"x":0,
		"y":function(d){
			return (d.x-1)*35;
		}
		});
 	},false);
 }			