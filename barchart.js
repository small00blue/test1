function barchart()
{
	window.addEventListener('load',function(){
	//數據
	var data=[
 	{ x:1, y:"perfect" , w:50},
  	{ x:2, y:"good"    , w:150},
  	{ x:3, y:"soso"    , w:250},
  	{ x:4, y:"bad"     , w:150},
  	{ x:5, y:"terrible", w:50},
	];
	//svg畫布的長寬及相關數值
	var width = 600;
	var height = 250;
	var padding = 30;
	var barMargin = 2;
	
	//取得Y軸的最大值
	var Wmax = d3.max(data, function(d){return d.w}),
		Wmin = d3.min(data, function(d){return d.w});
	//產生一個屬於X軸的線性尺度
	var xScale = d3.scale.linear() 
		.domain([0, data.length]) //傳入的值是原始資料的最小及最大值
		.range([padding , width - padding]) //輸出的範圍是左邊的padd距離，到右邊的padding
    //Y軸的尺度
	var wScale = d3.scale.linear()
		.domain([Wmin, Wmax])
		.range([padding, height - padding])
	//這次顏色都要用尺度來算	
	var colorScale = d3.scale.linear()
		.domain([Wmin, Wmax])
		.range([0, 700])
	var barWidth = (width - padding*2) / data.length - barMargin;

	//插入svg畫布
	var bar = d3.select("body").append("svg").attr("width", width).attr("height", height);

	//選擇所有數據，畫長方形
	bar .selectAll("rect")
		.data(data)
		.enter()
		.append("rect")
		.attr({
		"x": function(d, i){return xScale(i)}, //利用尺度算出X的位置
		"y": function(d){return height - wScale(d.w)}, //同理算出Y
		"width": barWidth,
		"height":function(d){return wScale(d.w)}, //同理算出Y
		// 'r': function(d){return Math.sqrt(h - d[1])}, //圓的大小是高 - Y值的平方
		"fill": function(d){
			var color = 0.2 + colorScale(d.w) * 0.001;
			return  d3.hsl(200 ,color, color); //利用尺度來算出顏色
			},
		"title": function(d){
			return 'Name : ' + d.name;
			}		
		});

	bar .selectAll("text").data(data).enter() //補上資料數值
		.append("text") 
		.text(function(d){ return d.w}) //將值寫到SVG上
		.attr({
		"x": function(d, i){return xScale(i) + barWidth/2}, //和上面相同，算出X、Y的位置
		"y": function(d){return height - wScale(d.w) + 15},
		"fill": "white", 
		"text-anchor": "middle",
		"font-size": "20px" //Fill、font-size也可以用CSS寫喔～
		});
	bar .append("g").selectAll("text").data(data).enter() //這邊再多做一個人名顯示的區域
	    .append("text") 
	    .text(function(d){ return d.y}) //寫入人名
	    .attr({
		"x": function(d, i){return xScale(i) + barWidth/2}, //和上面相同，算出X、Y的位置
		"y": function(d){return height - wScale(d.w) - 10},
		"fill": "black", //文字填滿為超漂亮灰色
		"text-anchor": "middle",
		"font-size": "30px" //Fill、font-size也可以用CSS寫喔～
	});



	});
 	
 }			
