// Load the data
d3.csv("data.csv").then(function(data) {

  // Helper function to map offense codes to crime types
  const offenseMapping = {
      3115: 'Investigate Person',
      1831: 'Drugs',
      3831: 'Property Damage',
      3114: 'Investigate Property',
      3410: 'Towed Motor Vehicle',
      810: 'Auto Theft',
      1402: 'Vandalism',
      3201: 'Property Lost',
      613: 'Snatch',
      3802: 'Accident',
  };

  // Parse and format the data
  data.forEach(d => {
      d.YEAR = +d.YEAR;
      d.MONTH = +d.MONTH;
      d.HOUR = +d.HOUR;
      d.CrimeType = offenseMapping[d.OFFENSE_CODE];
  });

  // Yearly Crime Incidents (Line Chart)
  let yearlyData = d3.rollups(data, v => v.length, d => d.YEAR)
      .map(([key, value]) => ({ year: key, count: value }))
      .sort((a, b) => d3.ascending(a.year, b.year));
  let yearlyTrace = {
      x: yearlyData.map(d => d.year),
      y: yearlyData.map(d => d.count),
      type: 'scatter',
      mode: 'lines+markers',
      name: 'Yearly Crime Incidents'
  };
  Plotly.newPlot('yearlyCrimeChart', [yearlyTrace], {
      title: 'Yearly Crime Incidents',
      xaxis: { title: 'Year' },
      yaxis: { title: 'Number of Incidents' }
  },{ displayModeBar: false });

  // Crime Types (Bar Charts)
  let crimeTypes = ['Investigate Person', 'Drugs', 'Property Damage'];
  crimeTypes.forEach(type => {
      let typeData = data.filter(d => d.CrimeType === type);
      let typeYearlyData = d3.rollups(typeData, v => v.length, d => d.YEAR)
          .map(([key, value]) => ({ year: key, count: value }))
          .sort((a, b) => d3.ascending(a.year, b.year));
      let trace = {
          x: typeYearlyData.map(d => d.year),
          y: typeYearlyData.map(d => d.count),
          type: 'bar',
          name: `${type} Incidents`
      };
      Plotly.newPlot(`${type.toLowerCase().replace(/ /g, '')}CrimeChart`, [trace], {
          title: `${type} Incidents`,
          xaxis: { title: 'Year' },
          yaxis: { title: 'Number of Incidents' }
      },{ displayModeBar: false });
  });

  // Monthly Crime Incidents for All Years (Grouped Bar Chart)
  let monthlyData = d3.rollups(data, v => v.length, d => d.YEAR, d => d.MONTH)
      .map(([year, values]) => {
          return values.map(([month, count]) => ({
              year: year,
              month: month,
              count: count
          }));
      }).flat();
  let monthlyTraces = d3.groups(monthlyData, d => d.year).map(([year, values]) => ({
      x: values.map(d => d.month),
      y: values.map(d => d.count),
      type: 'scatter',
      mode: 'lines+markers',
      name: `Year ${year}`
  }));
  Plotly.newPlot('monthlyCrimeChart', monthlyTraces, {
      title: 'Monthly Crime Incidents by Year',
      xaxis: { title: 'Month' },
      yaxis: { title: 'Number of Incidents' }
  
  },{ displayModeBar: false });

  let weeklyData = d3.rollups(data, v => v.length, d => d.DAY_OF_WEEK)
      .map(([key, value]) => ({ day: key, count: value }));
  weeklyData = weeklyData.sort((a, b) => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(a.day) - ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(b.day));
  
  // Adjusting the weekly data calculation
  weeklyData.forEach(d => d.count = (d.count / (52*9)) );

  let weeklyTrace = {
      type: 'scatterpolar',
      r: weeklyData.map(d => d.count),
      theta: weeklyData.map(d => d.day),
      fill: 'toself'
  };
  Plotly.newPlot('weeklyCrimeChart', [weeklyTrace], {
      title: 'Weekly Average Crime Incidents',
      polar: { radialaxis: { visible: true, range: [0, d3.max(weeklyData, d => d.count)] } }
  },{ displayModeBar: false });

  // Seasonal Crime (Donut Chart with Year Filter)
  function getSeason(month) {
      if ([12, 1, 2].includes(month)) return 'Winter';
      if ([3, 4, 5].includes(month)) return 'Spring';
      if ([6, 7, 8].includes(month)) return 'Summer';
      return 'Fall';
  }
  data.forEach(d => d.Season = getSeason(d.MONTH));

  // Initialize the dropdown for year selection
  let years = Array.from(new Set(data.map(d => d.YEAR))).sort();
  let dropdown = d3.select('#yearDropdown');
  dropdown.selectAll('option')
      .data(years)
      .enter()
      .append('option')
      .attr('value', d => d)
      .text(d => d);

  // Function to update the seasonal crime chart based on the selected year
  function updateSeasonalCrimeChart(year) {
      let filteredData = data.filter(d => d.YEAR == year);
      let seasonalData = d3.rollups(filteredData, v => v.length, d => d.Season)
          .map(([key, value]) => ({ season: key, count: value }));
      let seasonalTrace = {
          labels: seasonalData.map(d => d.season),
          values: seasonalData.map(d => d.count),
          type: 'pie',
          hole: .4
      };
      Plotly.newPlot('seasonalCrimeChart', [seasonalTrace], {
          title: `Seasonal Crime Incidents for Year ${year}`
      },{ displayModeBar: false });
  }

  // Update the chart when a new year is selected
  dropdown.on('change', function() {
      let selectedYear = d3.select(this).property('value');
      updateSeasonalCrimeChart(selectedYear);
  });

  // Initial plot for the first year
  updateSeasonalCrimeChart(years[0]);

 // Hourly Crime with Filter
  function updateHourlyCrimeChart(year) {
      let hourlyData = data.filter(d => d.YEAR == year);
      let hourlyCounts = d3.rollups(hourlyData, v => v.length, d => Math.floor(d.HOUR / 2) * 2)
          .map(([hour, count]) => ({ hour: hour, count: count }));

      let hourlyTrace = {
          x: hourlyCounts.map(d => `${d.hour}:00 - ${d.hour + 1}:59`),
          y: hourlyCounts.map(d => d.count),
          type: 'scatter',
          mode: 'lines+markers',
          name: `Hourly Crime Incidents for ${year}`
      };

      Plotly.newPlot('hourlyCrimeChart', [hourlyTrace], {
          title: `Hourly Crime Incidents for ${year}`,
          xaxis: { title: 'Hour Range' },
          yaxis: { title: 'Number of Incidents' }
      },{ displayModeBar: false });
  }

  let yearDropdown5 = d3.select('#yearFilter5');
  yearDropdown5.selectAll('option')
      .data(years)
      .enter()
      .append('option')
      .attr('value', d => d)
      .text(d => d);

  yearDropdown5.on('change', function() {
      let selectedYear = d3.select(this).property('value');
      updateHourlyCrimeChart(selectedYear);
  });

  // Initial plot for the first year
  updateHourlyCrimeChart(years[0]);
});
