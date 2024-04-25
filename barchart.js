{
const data = [
            {"Department": "Accounting & Finance", "TotalAnnualRate": 845194.97, "AverageAnnualRate": 33807.80},
            {"Department": "Africana Studies", "TotalAnnualRate": 117021.68, "AverageAnnualRate": 23404.34},
            {"Department": "American Studies", "TotalAnnualRate": 181622.54, "AverageAnnualRate": 15135.21},
            {"Department": "Anthropology", "TotalAnnualRate": 496405.38, "AverageAnnualRate": 22563.88},
    {"Department": "Applied Linguistics", "TotalAnnualRate": 204940.46, "AverageAnnualRate": 13662.70},
    {"Department": "Art", "TotalAnnualRate": 294099.65, "AverageAnnualRate": 19606.64},
    {"Department": "Asian American Studies Program", "TotalAnnualRate": 30373.16, "AverageAnnualRate": 30373.16},
    {"Department": "Asian Studies", "TotalAnnualRate": 69201.67, "AverageAnnualRate": 17300.42},
    {"Department": "Athletics", "TotalAnnualRate": 0.0, "AverageAnnualRate": 0.0},
    {"Department": "Biology", "TotalAnnualRate": 1078982.65, "AverageAnnualRate": 18603.15},
    {"Department": "Center for Academic Excellence", "TotalAnnualRate": 105513.91, "AverageAnnualRate": 15073.42},
    {"Department": "Center for Prsnl Cancer Therapy", "TotalAnnualRate": 18480.0, "AverageAnnualRate": 18480.0},
    {"Department": "Center for Women in Politics", "TotalAnnualRate": 6644.67, "AverageAnnualRate": 3322.34},
    {"Department": "Center of Science & Mathematics in Context", "TotalAnnualRate": 45829.93, "AverageAnnualRate": 22914.97},
    {"Department": "Chemistry", "TotalAnnualRate": 407267.35, "AverageAnnualRate": 27151.16},
    {"Department": "Classics & Religious Studies", "TotalAnnualRate": 185630.54, "AverageAnnualRate": 18563.05},
    {"Department": "College of Management Dean's Office", "TotalAnnualRate": 51668.68, "AverageAnnualRate": 51668.68},
    {"Department": "Communications", "TotalAnnualRate": 281735.28, "AverageAnnualRate": 20123.95},
    {"Department": "Computer Science", "TotalAnnualRate": 3171775.736, "AverageAnnualRate": 109371.5771},
    {"Department": "Confl Res", "TotalAnnualRate": 1189135.246, "AverageAnnualRate": 79275.68307},
    {"Department": "Counseling & School Psychology", "TotalAnnualRate": 2899665.258, "AverageAnnualRate": 70723.54288},
    {"Department": "Curriculum & Instruction", "TotalAnnualRate": 2466841.074, "AverageAnnualRate": 44851.65589},
    {"Department": "Diversity Equity & Inclusion", "TotalAnnualRate": 5777.98, "AverageAnnualRate": 5777.98},
    {"Department": "Economics", "TotalAnnualRate": 1913285.1, "AverageAnnualRate": 106293.6167},
    {"Department": "Engineering", "TotalAnnualRate": 1585332.064, "AverageAnnualRate": 105688.8043},
    {"Department": "English", "TotalAnnualRate": 6439829.004, "AverageAnnualRate": 78534.50005},
    {"Department": "Exercise & Health Science", "TotalAnnualRate": 1577790.154, "AverageAnnualRate": 78889.5077},
    {"Department": "Gaston Institute", "TotalAnnualRate": 44476.842, "AverageAnnualRate": 44476.842},
    {"Department": "Gerontology", "TotalAnnualRate": 962593.103, "AverageAnnualRate": 74045.62331},
    {"Department": "Gerontology Institute", "TotalAnnualRate": 648882.154, "AverageAnnualRate": 72098.01711},
    {"Department": "Global Inclusion & Social Development Dean's Office", "TotalAnnualRate": 1088151.158, "AverageAnnualRate": 41851.96762},
    {"Department": "Health Services", "TotalAnnualRate": 156223.864, "AverageAnnualRate": 52074.62133},
    {"Department": "History", "TotalAnnualRate": 1586441.845, "AverageAnnualRate": 58757.10537},
    {"Department": "Honors College - Dean's Office", "TotalAnnualRate": 423788.208, "AverageAnnualRate": 70631.368},
    {"Department": "Institute Community Inclusion", "TotalAnnualRate": 11000.08, "AverageAnnualRate": 11000.08},
    {"Department": "Institute for Early Education", "TotalAnnualRate": 16429.712, "AverageAnnualRate": 16429.712},
    {"Department": "Institute Learning & Teaching", "TotalAnnualRate": 85000, "AverageAnnualRate": 85000},
    {"Department": "Labor Resource Center", "TotalAnnualRate": 246906.227, "AverageAnnualRate": 61726.55675},
    {"Department": "Latin American & Iberian Studies", "TotalAnnualRate": 1247394.708, "AverageAnnualRate": 73376.15929},
    {"Department": "Leadership in Education", "TotalAnnualRate": 1105701.31, "AverageAnnualRate": 85053.94692},
    {"Department": "Management", "TotalAnnualRate": 3129529.091, "AverageAnnualRate": 104317.6364},
    {"Department": "Management Science & Information Systems", "TotalAnnualRate": 3297609.035, "AverageAnnualRate": 113710.6564},
    {"Department": "Manning CNHS - Dean's Office", "TotalAnnualRate": 300374.689, "AverageAnnualRate": 30037.4689},
    {"Department": "Marketing", "TotalAnnualRate": 1152900.466, "AverageAnnualRate": 128100.0518},
    {"Department": "Mathematics", "TotalAnnualRate": 3120045.77, "AverageAnnualRate": 74286.80405},
    {"Department": "Modern Languages Lit", "TotalAnnualRate": 1210886.945, "AverageAnnualRate": 60544.34725},
    {"Department": "Nursing", "TotalAnnualRate": 9200603.846, "AverageAnnualRate": 43812.39927},
    {"Department": "Performing Arts", "TotalAnnualRate": 2024781.242, "AverageAnnualRate": 44995.13871},
    {"Department": "Philosophy", "TotalAnnualRate": 1809898.025, "AverageAnnualRate": 95257.79079},
    {"Department": "Physics", "TotalAnnualRate": 1544847.602, "AverageAnnualRate": 110346.2573},
    {"Department": "Political Science", "TotalAnnualRate": 1342827.806, "AverageAnnualRate": 103294.4466},
    {"Department": "Project REACH", "TotalAnnualRate": 51046.684, "AverageAnnualRate": 51046.684},
    {"Department": "Provost & Vice Chancellor for Academic Affairs", "TotalAnnualRate": 230685.88, "AverageAnnualRate": 230685.88},
    {"Department": "Psychology", "TotalAnnualRate": 3584850.886, "AverageAnnualRate": 87435.38746},
    {"Department": "Public Policy & Public Affairs", "TotalAnnualRate": 755734.642, "AverageAnnualRate": 94466.83025},
    {"Department": "School for the Environment Dean's Office", "TotalAnnualRate": 2084227.099, "AverageAnnualRate": 83369.08396},
    {"Department": "Sociology", "TotalAnnualRate": 2126053.275, "AverageAnnualRate": 64425.85682},
    {"Department": "Student Equity Access &Success", "TotalAnnualRate": 57324.799, "AverageAnnualRate": 57324.799},
    {"Department": "Undergraduate Pgm - CNHS (I)", "TotalAnnualRate": 11128.042, "AverageAnnualRate": 11128.042},
    {"Department": "Urban Planning & Community Development", "TotalAnnualRate": 449232.49, "AverageAnnualRate": 89846.498},
    {"Department": "Urban Public Health", "TotalAnnualRate": 345085.264, "AverageAnnualRate": 115028.4213},
    {"Department": "Vice Provost for Academic Support Services", "TotalAnnualRate": 10700.04, "AverageAnnualRate": 10700.04},
    {"Department": "Women's Gender Sexuality Studi", "TotalAnnualRate": 853477.761, "AverageAnnualRate": 85347.7761},
    {"Department": "Writing Assessment", "TotalAnnualRate": 53800.08, "AverageAnnualRate": 17933.36}

        ];

const svg = d3.select("#barChart"),
      margin = {top: 20, right: 20, bottom: 200, left: 60},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;

const x = d3.scaleBand().range([0, width]).padding(0.1),
      y = d3.scaleLinear().range([height, 0]);

const g = svg.append("g")
             .attr("transform", `translate(${margin.left},${margin.top})`);

x.domain(data.map(d => d.Department));
y.domain([0, d3.max(data, d => d.TotalAnnualRate)]);

const xAxis = g.append("g")
     .attr("class", "axis axis--x")
     .attr("transform", `translate(0,${height})`)
     .call(d3.axisBottom(x))
     .selectAll("text")
        .attr("y", 0)
        .attr("x", -9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");

const yAxis = g.append("g")
     .attr("class", "axis axis-label")
     .call(d3.axisLeft(y));

yAxis.append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("y", -50)
    .attr("x", -height / 2)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Total Annual Rate (USD)");

const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip");

let bars = g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d.Department))
            .attr("y", d => y(d.TotalAnnualRate))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d.TotalAnnualRate))
            .on("mouseover", function(event, d) {
                tooltip.transition()
                       .duration(200)
                       .style("opacity", .9);
                tooltip.html(parseInt(d.TotalAnnualRate) + "<br/>" + d.Department)
                       .style("left", (event.pageX + 5) + "px")
                       .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
                tooltip.transition()
                       .duration(500)
                       .style("opacity", 0);
            });

const rateTypeSelect = d3.select("#rateType");
rateTypeSelect.on("change", function() {
    const selectedRateType = rateTypeSelect.node().value;
    updateChart(selectedRateType);
});

function updateChart(rateType) {
    y.domain([0, d3.max(data, d => d[rateType])]);
    yAxis.transition().duration(750).call(d3.axisLeft(y));
    bars.transition()
        .duration(750)
        .attr("y", d => y(d[rateType]))
        .attr("height", d => height - y(d[rateType]));
}
}