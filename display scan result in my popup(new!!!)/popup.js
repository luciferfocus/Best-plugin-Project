/*function continueExecution()
{
   ;//finish doing things after the pause
}

function doStuff()
{
  //do some things
  setTimeout(continueExecution, 1000) //wait one second before continuing
}*/



//while(1){
		function reload()
{
	
document.location.reload(true);
}

function timedRefresh(timeoutPeriod) {
	setTimeout("document.location.reload(true);",timeoutPeriod);
}

//window.onload = timedRefresh(5000);
	
	
chrome.runtime.sendMessage({method:'getTitle'}, function(response){
	      //doStuff();
		  //if(response.title==43)
	      //alert(response);
		  //$('.output').text();
         //var data=JSON.parse(response);
		   var data=JSON.parse(response);
		   //$('.output').text(data);
		 //data=response;
		 //alert(data);
        // Use data.count
            console.log("7")
            var length=data.items.length;
			//alert(length);
		//$('#result').append('<p>vulns num:'+length+'</p>');
		
		//count the numbers of the severity
			 
		 var count1=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.severity=="High")
		 {
		    count1++;	
		 }
		 
		 }
		 //$('#result').append('<p>High:'+count1+'</p>');
		 
		 
		 var count2=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.severity=="Medium")
		 {
		    count2++;	
		 }
		 
		 }
		 //$('#result').append('<p>Medium:'+count2+'</p>');
		 
		 
		  var count3=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.severity=="Low")
		 {
		    count3++;	
		 }
		 
		 }
		 //$('#result').append('<p>Low:'+count3+'</p>');
		 
		 var count4=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.severity=="Information")
		 {
		    count4++;	
		 }
		 
		 }
		 //$('#result').append('<p>Information:'+count4+'</p>');
		 
		 
		 var count11=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.name=="Cross site scripting vulnerability")
		 {
		    count11++;	
		 }
		 
		 }
		 //$('#result').append('<p>Cross site scripting vulnerability:'+count11+'</p>');
		 
		 var count12=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.name=="Browser plugin content")
		 {
		    count12++;	
		 }
		 
		 }
		// $('#result').append('<p>Browser plugin content:'+count12+'</p>');
		 
		  var count13=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.name=="SQL injection")
		 {
		    count13++;	
		 }
		 
		 }
		 //$('#result').append('<p>SQL injection:'+count13+'</p>');
		 
		 var count14=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.name=="Path disclosure vulnerability")
		 {
		    count14++;	
		 }
		 
		 }
		 //$('#result').append('<p>Path disclosure vulnerability:'+count14+'</p>');
		 
		 var count15=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.name=="Auto-completable form")
		 {
		    count15++;	
		 }
		 
		 }
		 //$('#result').append('<p>Auto-completable form:'+count15+'</p>');
		 
		 var count16=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.name=="Blank http response body")
		 {
		    count16++;	
		 }
		 
		 }
		 //$('#result').append('<p>Blank http response body:'+count16+'</p>');
		 
		 var count17=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.name=="Uncommon query string parameter")
		 {
		    count17++;	
		 }
		 
		 }
		 //$('#result').append('<p>Uncommon query string parament:'+count17+'</p>');
		 
		 var count18=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.name=="Directory indexing")
		 {
		    count18++;	
		 }
		 
		 }
		 //$('#result').append('<p>Directory indexing:'+count18+'</p>');
		 
		 var count19=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.name=="Strange HTTP Reason message")
		 {
		    count19++;	
		 }
		 
		 }
		 //$('#result').append('<p>Strange HTTP Reason message:'+count19+'</p>');
		 
		 var count20=0;
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    if(obj.name=="Click-Jacking vulnerability")
		 {
		    count20++;	
		 }
		 
		 }
		 //$('#result').append('<p>Click-Jacking vulnerability:'+count20+'</p>');
		 
		 
		 
		 var movies = [
        { vulns: "Cross site scripting vulnerability", nums: count11},
        { vulns: "Browser plugin content", nums: count12},
		{ vulns: "SOL injection", nums: count13},
		{ vulns: "Path disclosure vulnerability", nums: count14},
		{ vulns: "Auto-completable form", nums: count15},
		{ vulns: "Blank http response body", nums: count16},
		{ vulns: "Uncommon query string parameter", nums: count17},
		{ vulns: "Directory indexing", nums: count18},
		{ vulns: "Strange HTTP Reason message", nums: count19},
		{ vulns: "Click-Jacking vulnerability", nums: count20}
    ];

    // column definitions
    var columns = [
        { head: 'vulns', cl: 'title', html: function(r) { return r.vulns; } },
        { head: 'nums', cl: 'center', html: function(r) { return r.nums; } }
    ];

    // create table
    var table = d3.select('#div1')
        .append('table');

    // create table header
    table.append('thead').append('tr')
        .selectAll('th')
        .data(columns).enter()
        .append('th')
        .attr('class', function(r) { return r.c1; })
        .text(function(r) { return r.head; });

    // create table body
    table.append('tbody')
        .selectAll('tr')
        .data(movies).enter()
        .append('tr')
        .selectAll('td')
        .data(function(row, i) {
            return columns.map(function(c) {
                // compute cell values for this specific row
                var cell = {};
                d3.keys(c).forEach(function(k) {
                    cell[k] = typeof c[k] == 'function' ? c[k](row,i) : c[k];
                });
                return cell;
            });
        }).enter()
        .append('td')
        .html(function(r) { return r.html; })
        .attr('class', function(r) { return r.c1; });

    function length() {
        var fmt = d3.format('02d');
        return function(l) { return Math.floor(l / 60) + ':' + fmt(l % 60) + ''; };
    }
		 
		 

    

	
		 
	//produce the table	 
		 var width =350;
        var height =200;
        var svg =d3.select("#div2")
                   .select("svg")
                   .attr("width",width)
                   .attr("height",height);				   
        
        var padding ={left:30, right:30, top:20, bottom:20};
        	
        var dataset = [count1,count2,count3,count4];
		var xScale = d3.scale.ordinal()
		    .domain(d3.range(dataset.length))
			.rangeRoundBands([0, width-padding.left-padding.right]);
			
		var yScale = d3.scale.linear()
		    .domain([0,d3.max(dataset)])
			.range([height-padding.top-padding.bottom,0]);
		
        var index = [1,2,3,4];	
        var color = ["#ef7d79","#f2b968","#73c9e3","#74c374"];	//
		var severity =["High", "Medium", "Low", "Information"];	
		
        var xScale2 = d3.scale.ordinal()
		    .domain(severity)
			.rangeRoundBands([0, width-padding.left-padding.right]);

//??x?
var xAxis = d3.svg.axis()
    .scale(xScale2)
    .orient("bottom");
        
//??y?
var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

		
var rectPadding = 25;
 
//??????
var rects = svg.selectAll(".MyText")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class","MyRect")
        .attr("transform","translate(" + padding.left + "," + padding.top + ")")
        .attr("x", function(d,i){
            return xScale(i)+ rectPadding/2 ;//
        } )
        .attr("y",function(d){
            return yScale(d);
        })
        .attr("width", xScale.rangeBand() - rectPadding )
        .attr("height", function(d){
            return height - padding.top - padding.bottom - yScale(d);
        })
		.attr("fill", function(d,i){
            return color[i];
        });
		//.attr("fill","skyblue");
 
//??????
var texts = svg.selectAll(".MyText")
        .data(dataset)
        .enter()
        .append("text")
        .attr("class","MyText")
        .attr("transform","translate(" + padding.left + "," + padding.top + ")")
        .attr("x", function(d,i){
            return xScale(i) + rectPadding/2;
        } )
        .attr("y",function(d){
            return yScale(d);
        })
        .attr("dx",function(){
            return (xScale.rangeBand() - 1.6*rectPadding)/2;
        })
        .attr("dy",function(d){
            return 15;
        })
        .text(function(d){
            return d;
        })
		.attr("fill","steelblue");
		
svg.append("g")
  .attr("class","axis")
  .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
  .call(xAxis) 
  .attr("fill","#cccccc");
  
        
//??y?
svg.append("g")
  .attr("class","axis")
  .attr("transform","translate(" + padding.left + "," + padding.top + ")")
  .call(yAxis)
  .attr("fill","#cccccc");
 
  
//var r1= svg.select("#r1")
//   .attr("fill","red");
   
 
 
 
 
 
 
 

 
 		var dataset2 = [ ["High",count1] , ["Medium",count2] , ["Low",count3] , ["Information",count4] ];
		
	    var svg = d3.select("#div3")
					.append("svg")
					.attr("width", 300)
					.attr("height", 200);
		
		var pie = d3.layout.pie()
		            .value(function(d){ return d[1]; });

		var piedata = pie(dataset2);
	    
		var outerRadius = 100;	//???
		var innerRadius = 0;	//???,?0???????

		var arc = d3.svg.arc()	//????
					.innerRadius(innerRadius)	//?????
					.outerRadius(outerRadius);	//?????
		
		//var color = d3.scale.category10();
		
		var arcs = svg.selectAll("g")
					  .data(piedata)
					  .enter()
					  .append("g")
					  .attr("transform","translate("+ 140 +","+ (height/2) +")");
					  
		arcs.append("path")
			.attr("fill",function(d,i){
				return color[i];
			})
			.attr("d",function(d){
				return arc(d);
			});
		
		arcs.append("text")
			.attr("transform",function(d){
				return "translate(" + arc.centroid(d) + ")";
			})
			.attr("text-anchor","middle")
			.text(function(d){
				return Math.round(100*d.data[1]/(count1+count2+count3+count4))+"%";
			});
		console.log(9);
		console.log(dataset2);
		console.log(piedata);
		
		var tooltip = d3.select("#div3")
							.append("div")
							.attr("class","tooltip")
							.style("opacity",0.0);
		
		arcs.on("mouseover",function(d){
				
				tooltip.html("There are totally "+d.data[1]+"<br />"+d.data[0]+" vulnerabilities")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY + 20) + "px")
					.style("opacity",1.0);
			})
			.on("mousemove",function(d){
				
				
				tooltip.style("left", (d3.event.pageX) + "px")
						.style("top", (d3.event.pageY + 20) + "px");
			})
			.on("mouseout",function(d){
				
				
				tooltip.style("opacity",0.0);
			});
			
			
	   
		for(i=0;i<length;i++)
		 {
		    obj=data.items[i];
		    d3.select("#div4")
			            
			            .append("p").text("sequence number: "+obj.id)
						.append("p").text("vulnerability url: "+obj.url+",    "+"vulnerability type: "+obj.name+",    severity: "+obj.severity)
						.append("p").text("vulnerability description: "+obj.desc)
						.append("p").text("fix effort: "+obj.fix_effort)
						.append("p").text("fix guidance: "+obj.fix_guidance)
						.append("hr");
						
		 
		 }
		
        //reload();
        //$('#Button1').click(function() {
             //   reload();
            //});		
			});
			window.onload = timedRefresh(5000);
			
	 
		
//}