{
	const svg = d3.select("#scatterplot")
    .append("svg")
    .attr("width", 1000)
    .attr("height", 600)
    .append("g")
    .attr("transform", "translate(50, 20)"); // Adjust for margins

// Define tooltip
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

const data = [
  {name: "Joseph Cooper", rating: 4.8, annualRate: 344063.162, department: "Counseling & School Psychology"},
  {name: "Wei Zhang", rating: 3.6, annualRate: 333336.425, department: "Chemistry"},
  {name: "James Motley", rating: 5.0, annualRate: 288006.622, department: "Management"},
  {name: "Tyson King-Meadows", rating: 3.4, annualRate: 255000.143, department: "Political Science"},
  {name: "Dan Simovici", rating: 3.8, annualRate: 240359.164, department: "Computer Science"},
  {name: "Jill Macoska", rating: 4.3, annualRate: 233688.923, department: "Biology"},
  {name: "Zong-Guo Xia", rating: 3.6, annualRate: 231949.201, department: "School for the Environment Dean's Office"},
  {name: "Rajini Srikanth", rating: 4.9, annualRate: 230685.88, department: "Provost & Vice Chancellor for Academic Affairs"},
  {name: "Atreya Chakraborty", rating: 4.2, annualRate: 226805.378, department: "College of Management Dean's Office"},
  {name: "Maureen Scully", rating: 4.8, annualRate: 226304.209, department: "Management"},
  {name: "Rita Edozie", rating: 3.0, annualRate: 219638.475, department: "Conflict Resolution"},
  {name: "David Levy", rating: 3.8, annualRate: 217368.951, department: "Management"},
  {name: "Stephen Mrozowski", rating: 4.0, annualRate: 216976.943, department: "Anthropology"},
  {name: "Jean Rhodes", rating: 4.2, annualRate: 212100.758, department: "Psychology"},
  {name: "Marc Cohen", rating: 5.0, annualRate: 209904.419, department: "Gerontology Institute"},
  {name: "Jeffrey Keisler", rating: 3.4, annualRate: 209022.064, department: "Management Science & Information Systems"},
  {name: "Eric Grinberg", rating: 2.6, annualRate: 206491.771, department: "Mathematics"},
  {name: "Andrew Grosovsky", rating: 4.3, annualRate: 205236.783, department: "Biology"},
  {name: "Pratyush Bharati", rating: 4.4, annualRate: 204583.195, department: "Management Science & Information Systems"},
  {name: "Marc Pomplun", rating: 4.0, annualRate: 203766.453, department: "Computer Science"},
  {name: "Arthur Eisenkraft", rating: 3.1, annualRate: 200608.597, department: "Curriculum & Instruction"},
  {name: "Mine Ertugrul", rating: 4.5, annualRate: 198560.689, department: "Accounting & Finance"},
  {name: "Wan-Ting Wu", rating: 4.4, annualRate: 197438.642, department: "Accounting & Finance"},
  {name: "Surjit Tinaikar", rating: 3.3, annualRate: 196812.445, department: "Accounting & Finance"},
  {name: "Kun Yu", rating: 4.3, annualRate: 196679.811, department: "Accounting & Finance"},
  {name: "Chi Wan", rating: 5.0, annualRate: 196620.793, department: "Chemistry"},
  {name: "Anne Douglass", rating: 5.0, annualRate: 195477.886, department: "Curriculum & Instruction"},
  {name: "Christopher Fuchs", rating: 2.3, annualRate: 194919.119, department: "Physics"},
  {name: "Sangwan Kim", rating: 5.0, annualRate: 194174.726, department: "Accounting & Finance"},
  {name: "Jong Kim", rating: 1.4, annualRate: 191651.631, department: "Management Science & Information Systems"},
  {name: "Patricia Simpson", rating: 5.0, annualRate: 43886.546, department: "Nursing"},
  {name: "Olga Katkova", rating: 5.0, annualRate: 55119.958, department: "Mathematics"},
  {name: "Noelle Merchant", rating: 5.0, annualRate: 76960.001, department: "English"},
  {name: "Chelsey Grasso", rating: 5.0, annualRate: 53800.0, department: "English"},
  {name: "Chi Wan", rating: 5.0, annualRate: 196620.793, department: "Chemistry"},
  {name: "Jutta Handte", rating: 5.0, annualRate: 16242.011, department: "Modern Languages Lit"},
  {name: "Nicholas Juravich", rating: 5.0, annualRate: 83047.169, department: "History"},
  {name: "Christopher Contreras", rating: 5.0, annualRate: 82742.418, department: "Psychology"},
  {name: "Christopher Craig", rating: 5.0, annualRate: 75116.558, department: "Psychology"},
  {name: "Erik Blaser", rating: 5.0, annualRate: 149371.682, department: "Psychology"},
  {name: "Christopher Martell", rating: 5.0, annualRate: 100174.447, department: "Curriculum & Instruction"},
  {name: "Christopher Schade", rating: 5.0, annualRate: 96157.081, department: "Art"},
  {name: "Karla Schallies", rating: 5.0, annualRate: 73822.575, department: "Biology"},
  {name: "Claudia Esposito", rating: 5.0, annualRate: 109766.877, department: "Modern Languages Lit"},
  {name: "Evan Auguste", rating: 5.0, annualRate: 86528.0, department: "Psychology"},
  {name: "Patrick Clarkin", rating: 5.0, annualRate: 108220.413, department: "Anthropology"},
  {name: "Sabina Lindsey", rating: 5.0, annualRate: 22000.0, department: "English"},
  {name: "Patrick Kearns", rating: 5.0, annualRate: 73548.8, department: "Biology"},
  {name: "Brian Kiniry", rating: 5.0, annualRate: 38988.04, department: "Philosophy"},
  {name: "Brian Meredith", rating: 5.0, annualRate: 75238.705, department: "English"},
  {name: "Gerald Walsh", rating: 5.0, annualRate: 36156.12, department: "Sociology"},
  {name: "Richard Viskochil", rating: 5.0, annualRate: 88258.56, department: "Exercise & Health Science"},
  {name: "Georgianna Melendez", rating: 5.0, annualRate: 5777.98, department: "Diversity Equity & Inclusion"},
  {name: "Brittany Peterson", rating: 5.0, annualRate: 75872.956, department: "English"},
  {name: "Bryan Richardson", rating: 5.0, annualRate: 56959.625, department: "Management"},
  {name: "Camille Weiss", rating: 5.0, annualRate: 48762.934, department: "History"},
  {name: "Juliet Girard", rating: 5.0, annualRate: 95981.184, department: "Biology"},
  {name: "Caroline Coscia", rating: 5.0, annualRate: 76872.402, department: "Political Science"},
  {name: "Daniel Pomerleano", rating: 5.0, annualRate: 96472.924, department: "Mathematics"},
  {name: "Jennifer Douglas", rating: 5.0, annualRate: 92602.0, department: "Nursing"}
];

const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.annualRate) + 50000]) // Padding for better visibility
    .range([0, 700]);

const yScale = d3.scaleLinear()
    .domain([1, 5]) // Adjust based on actual ratings range (assuming rating goes from 1 to 5)
    .range([550, 0]);

var colorScale = d3.scaleSequential(d3.interpolateCool) // Creates a cool color gradient
    .domain([1, 5]); // Adjust based on actual ratings range (assuming rating goes from 1 to 5)

    // Calculate an appropriate radius based on both rating and annualRate
const radiusScale = d3.scaleSqrt()
    .domain([d3.min(data, d => d.rating * d.annualRate), d3.max(data, d => d.rating * d.annualRate)])
    .range([5, 20]); // Min and max radius of circles
// Extend the x-axis grid
const xAxisGrid = d3.axisBottom(xScale)
    .tickSize(-550) // Height of the plot area
    .tickFormat('') // No tick labels
    .ticks(10); // Number of ticks can be adjusted based on your data scale

// Extend the y-axis grid
const yAxisGrid = d3.axisLeft(yScale)
    .tickSize(-700) // Width of the plot area
    .tickFormat('') // No tick labels
    .ticks(10); // Number of ticks can be adjusted based on your data scale
// Add the x-axis grid to the plot
svg.append('g')
    .attr('class', 'x axis-grid')
    .attr('transform', 'translate(0,550)')
    .call(xAxisGrid)
    .style("stroke", "lightblue") // Cool color for the grid lines
    .style("stroke-opacity", 0.7) // Make grid lines less prominent
    .style("shape-rendering", "crispEdges"); // Enhances the visual quality of line rendering

// Add the y-axis grid to the plot
svg.append('g')
    .attr('class', 'y axis-grid')
    .call(yAxisGrid)
    .style("stroke", "lightblue") // Cool color for the grid lines
    .style("stroke-opacity", 0.7) // Make grid lines less prominent
    .style("shape-rendering", "crispEdges");
// Draw dots
svg.selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .classed("dot", true)
    .attr("cx", d => xScale(d.annualRate))
    .attr("cy", d => yScale(d.rating))
    .attr("r", d => radiusScale(d.rating * d.annualRate)) // Increased radius size
    .style("stroke", "black") // Stroke color
    .style("stroke-width", "2px") // Stroke width
    .style("fill", d => colorScale(d.rating)) // Corrected function syntax
    .on("mouseover", function(event, d) {
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(d.name + ', ' + d.department) // Added space after comma for better readability
            .style("left", (event.pageX) + "px")
            .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function() {
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
    });

// Add the x-axis
svg.append("g")
    .attr("transform", "translate(0,550)")
    .call(d3.axisBottom(xScale));

// Add the y-axis
svg.append("g")
    .call(d3.axisLeft(yScale));

var legendX = 820; // X position of the legend inside the SVG
var legendY = 50; // Y position of the legend inside the SVG
var legendWidth = 20; // Width of the color bar
var legendHeight = 200; // Height of the color bar

// Color legend container
var legendSvg = svg.append("g")
    .attr("transform", `translate(${legendX}, ${legendY})`);

// Color gradient definition
var gradient = legendSvg.append("defs")
    .append("linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "0%")
    .attr("y2", "100%"); // Gradient direction top to bottom

gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", d3.interpolateCool(1)); // Corresponds to high rating

gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", d3.interpolateCool(0)); // Corresponds to low rating

// Draw the legend rectangle
legendSvg.append("rect")
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", "url(#gradient)");

// Add legend labels
legendSvg.append("text")
    .attr("class", "legendText")
    .attr("x", legendWidth + 5)
    .attr("y", 0)
    .attr("dy", ".35em") // Vertical alignment
    .text("High Rating");

legendSvg.append("text")
    .attr("class", "legendText")
    .attr("x", legendWidth + 5)
    .attr("y", legendHeight)
    .attr("dy", ".35em")
    .text("Low Rating");
}