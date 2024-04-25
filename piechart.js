// Assuming your data array is correctly populated as below
{
    const data = [
    {Department: "Nursing", Expenditure: 9200603.846},
    {Department: "English", Expenditure: 6439829.004},
    {Department: "Biology", Expenditure: 4879851.956},
    {Department: "Accounting & Finance", Expenditure: 3670786.525},
    {Department: "Psychology", Expenditure: 3584850.886},
    {Department: "Management Science & Information Systems", Expenditure: 3297609.035},
    {Department: "Computer Science", Expenditure: 3171775.736},
    {Department: "Management", Expenditure: 3129529.091},
    {Department: "Mathematics", Expenditure: 3120045.77},
    {Department: "", Expenditure: 3076227.817},
    {Department: "Counseling & School Psychology", Expenditure: 2899665.258},
    {Department: "Curriculum & Instruction", Expenditure: 2466841.074},
    {Department: "Sociology", Expenditure: 2126053.275},
    {Department: "School for the Environment Dean's Office", Expenditure: 2084227.099},
    {Department: "Performing Arts", Expenditure: 2024781.242},
    {Department: "Anthropology", Expenditure: 1966701.328},
    {Department: "Economics", Expenditure: 1913285.1},
    {Department: "Philosophy", Expenditure: 1809898.025},
    {Department: "Chemistry", Expenditure: 1739221.916},
    {Department: "History", Expenditure: 1586441.845},
    {Department: "Engineering", Expenditure: 1585332.064},
    {Department: "Exercise & Health Science", Expenditure: 1577790.154},
    {Department: "Physics", Expenditure: 1544847.602},
    {Department: "Political Science", Expenditure: 1342827.806},
    {Department: "Art", Expenditure: 1259503.46},
    {Department: "Latin American & Iberian Studies", Expenditure: 1247394.708},
    {Department: "Modern Languages Literature", Expenditure: 1210886.945},
    {Department: "Conflict Resolution", Expenditure: 1189135.246},
    {Department: "Marketing", Expenditure: 1152900.466},
    {Department: "Leadership in Education", Expenditure: 1105701.31},
    {Department: "Global Inclusion & Social Development Dean's Office", Expenditure: 1088151.158},
    {Department: "Communications", Expenditure: 1014893.422},
    {Department: "Gerontology", Expenditure: 962593.103},
    {Department: "Applied Linguistics", Expenditure: 877675.983},
    {Department: "Women's Gender Sexuality Studies", Expenditure: 853477.761},
    {Department: "Classics & Religious Studies", Expenditure: 795886.931},
    {Department: "American Studies", Expenditure: 773097.548},
    {Department: "Public Policy & Public Affairs", Expenditure: 755734.642},
    {Department: "Gerontology Institute", Expenditure: 648882.154},
    {Department: "Center for Academic Excellence", Expenditure: 495032.656},
    {Department: "Urban Planning & Community Development", Expenditure: 449232.49},
    {Department: "Honors College - Dean's Office", Expenditure: 423788.208},
    {Department: "Africana Studies", Expenditure: 419288.943},
    {Department: "Urban Public Health", Expenditure: 345085.264},
    {Department: "Manning CNHS - Dean's Office", Expenditure: 300374.689},
    {Department: "Asian Studies", Expenditure: 295219.744},
    {Department: "Labor Resource Center", Expenditure: 246906.227},
    {Department: "Provost & Vice Chancellor for Academic Affairs", Expenditure: 230685.88},
    {Department: "College of Management Dean's Office", Expenditure: 226805.378},
    {Department: "Center of Science & Mathematics in Context", Expenditure: 180517.118},
    {Department: "Health Services", Expenditure: 156223.864},
    {Department: "Asian American Studies Program", Expenditure: 133326.226},
    {Department: "Institute for Learning & Teaching", Expenditure: 85000},
    {Department: "Center for Personal Cancer Therapy", Expenditure: 81120},
    {Department: "Athletics", Expenditure: 73725.577},
    {Department: "Student Equity Access &Success", Expenditure: 57324.799},
    {Department: "Writing Assessment", Expenditure: 53800.08},
    {Department: "Project REACH", Expenditure: 51046.684},
    {Department: "Gaston Institute", Expenditure: 44476.842},
    {Department: "Center for Women in Politics", Expenditure: 32455.181},
    {Department: "Institute for Early Education", Expenditure: 16429.712},
    {Department: "Undergraduate Program - CNHS (I)", Expenditure: 11128.042},
    {Department: "Institute for Community Inclusion", Expenditure: 11000.08},
    {Department: "Vice Provost for Academic Support Services", Expenditure: 10700.04},
    {Department: "Diversity Equity & Inclusion", Expenditure: 5777.98}
];

const pieSvg = d3.select("#pieChart"),
    width = +pieSvg.attr("width"),
    height = +pieSvg.attr("height"),
    radius = Math.min(width, height) / 2;

const g = pieSvg.append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

const color = d3.scaleOrdinal(d3.schemeCategory10);

const pie = d3.pie().value(d => d.Expenditure);
const path = d3.arc().outerRadius(radius).innerRadius(0);

const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip");

g.selectAll(".arc")
    .data(pie(data))
    .enter().append("path")
    .attr("d", path)
    .attr("fill", d => color(d.data.Department))
    .on("mouseover", function(event, d) {
        tooltip.transition()
               .duration(200)
               .style("opacity", 1);
        tooltip.html(`Department: ${d.data.Department}<br>Expenditure: $${d.data.Expenditure.toLocaleString()}`)
               .style("left", (event.pageX) + "px")
               .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function() {
        tooltip.transition()
               .duration(500)
               .style("opacity", 0);
    });

// Adjust positioning and content as needed
}