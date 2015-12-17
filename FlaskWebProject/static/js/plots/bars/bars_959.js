var values = [  ] 


// Formatters for counts and times (converting numbers to Dates).
var formatCount = d3.format(",.0f");

formatTime = d3.time.format("%H:%M"), formatMinutes = function(d) {
	return formatTime(new Date(2012, 0, 1, 0, d));
};

var margin = {
	top : 10,
	right : 30,
	bottom : 30,
	left : 30
// }, width = 960 - margin.left - margin.right, height = 500 - margin.top
}, width = 560 - margin.left - margin.right, height = 500 - margin.top

		- margin.bottom;

//var endminutes = 1380
//var startminutes = 1140
var endminutes = 1320
var startminutes = 1200

var x = d3.scale.linear().domain([ startminutes, endminutes ]).range(
		[ 0, width ]);

// Generate a histogram using twenty uniformly-spaced bins.
var data = d3.layout.histogram().bins(x.ticks((endminutes - startminutes)))(
		values);

var y = d3.scale.linear().domain([ 0, 500 ]).range([ height, 0 ]);

// var y = d3.scale.linear().domain([ 0, d3.max(data, function(d) {
// return d.y;
// }) ]).range([ height, 0 ]);

var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(formatMinutes);

var yAxis = d3.svg.axis().scale(y).orient("left");

var svg = d3.select("#verlauf").append("svg").attr("width",
		width + margin.left + margin.right).attr("height",
		height + margin.top + margin.bottom).append("g").attr("transform",
		"translate(" + margin.left + "," + margin.top + ")");

var bar = svg.selectAll(".bar").data(data).enter().append("g").attr("class",
		"bar").attr("transform", function(d) {
	return "translate(" + x(d.x) + "," + y(d.y) + ")";
});

// var numbins = data.length;
var numbins = endminutes - startminutes;
var barWidth = width / numbins;

bar.append("rect").attr("x", 1).attr("width", barWidth - 1)
// .attr("width", x(data[0].dx) - 1)
// .attr("width", (x(data[0].dx) - x(0)) - 1)
.attr("height", function(d) {
	return height - y(d.y);
});

// bar.append("text")
// .attr("dy", ".75em")
// .attr("y", 6)
// // .attr("x", x(data[0].dx) / 2)
// .attr("text-anchor", "middle")
// .text(function(d) { return formatCount(d.y); });

svg.append("g").attr("class", "x axis").attr("transform",
		"translate(0," + height + ")").call(xAxis);

svg.append("g").attr("class", "y axis").call(yAxis).append("text").attr(
		"transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style(
		"text-anchor", "end").text("Anzahl Tweets");
