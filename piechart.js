 function applepie()
	{	
 	var title = "怪獸與他們的產地"
	var width = 800, height = 800; 
	var svg = d3.select("body").append("svg")
            	.attr("width", width)
            	.attr("height", height)
            	.append("g")
	    		.attr("transform", "translate(150,150)");
	var color = d3.scale.category20();
	d3.csv("https://small00blue.github.io/test1/mtest.csv",piechart);

	function piechart(data)
		{
		var arc = d3.svg.arc()
	        	.outerRadius(120)
            	.innerRadius(50);
    	var pie = d3.layout.pie()
	    	    .sort(null) 
	        	.value(function(d) {return d[title]});		
		var g1 = svg.selectAll("g")
	    	   .data(pie(data))
	    	   .enter()
	    	   .append("g");
	    	g1 .append("path")
        	   .attr("d", arc)
        	   .style("fill", function(d,i) { 
	        	    return color(i) });
		}
	}