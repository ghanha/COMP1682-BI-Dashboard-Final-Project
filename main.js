//Get The Elements
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");

//Toggle the navbar menu on click Open/Close 
menuBtn.addEventListener("click", function () {
  menu.classList.toggle('nav-toggle');
});

/*===== Charts =====*/
var config = { responsive: true };

//Bar Chart
var barChartTrace1 = {
  x: ['Jul', 'Aug', 'Sep'],
  y: [20, 14, 23],
  name: 'North Store',
  type: 'bar',
  marker: {
    color: '#f0a500'
  }
};

var barChartTrace2 = {
  x: ['Jul', 'Aug', 'Sep'],
  y: [20, 14, 23],
  name: 'South Store',
  type: 'bar',
  marker: {
    color: '#f0a500',
    opacity: 0.6
  }
};

var barChartData = [barChartTrace1, barChartTrace2];
var layout = {
  barmode: 'stack',
  paper_bgcolor: '#172042',
  plot_bgcolor: '#172042',
  showlegend: false,
  margin: {
    l: 30,
    r: 30,
    b: 30,
    t: 30,
    padding: 1
  },
  font: {
    color: '#6b6f8a'
  }
};

Plotly.newPlot('barChart', barChartData, layout, config);

//Scientific Chart
d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  var trace1 = {
    type: "scatter",
    mode: "lines",
    name: 'High',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'AAPL.High'),
    line: { color: '#f0a500' }
  };

  var trace2 = {
    type: "scatter",
    mode: "lines",
    name: 'Low',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'AAPL.Low'),
    line: { color: '#03dcee' }
  };

  var data = [trace1, trace2];
  var layout = {
    paper_bgcolor: '#172042',
    plot_bgcolor: '#172042',
    showlegend: false,
    margin: {
      l: 30,
      r: 30,
      b: 30,
      t: 30,
      padding: 1
    },
    font: {
      color: '#6b6f8a'
    },
    xaxis: {
      range: ['2016-07-01', '2017-02-01'],
      type: 'date'
    },
    yaxis: {
      autorange: true,
      type: 'linear'
    }
  };

  Plotly.newPlot('scientificChart', data, layout, config);
});

// Pie Chart
var pieChartData = [{
  values: [19, 26, 55],
  labels: ['March', 'April', 'June'],
  type: 'pie'
}];

var pieChartLayout = {
  paper_bgcolor: '#172042',
  plot_bgcolor: '#172042',
  piecolorway: ['#f0a500', '#03dcee', '#178add'],
  showlegend: false,
  margin: {
    l: 10,
    r: 10,
    b: 10,
    t: 10,
    padding: 1
  },
  height: 300,
  width: 300
};

Plotly.newPlot('pieChart', pieChartData, pieChartLayout);

// Donut Chart
var donutChartData = [{
  values: [10, 40, 50],
  labels: ['Sep', 'Oct', 'Nov'],
  hole: .4,
  type: 'pie'
}];

Plotly.newPlot('donutChart', donutChartData, pieChartLayout);

// Carpet chart
var carpetChartData = {
  type: 'carpet',
  a: [4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6],
  b: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
  y: [2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10],
  aaxis: {
    tickprefix: 'a = ',
    ticksuffix: 'm',
    smoothing: 1,
    minorgridcount: 9,
    minorgridcolor: '#f0a500',
    gridcolor: '#f0a500',
    color: '#03dcee'
  },
  baxis: {
    tickprefix: 'b = ',
    ticksuffix: 'Pa',
    smoothing: 1,
    minorgridcount: 9,
    minorgridcolor: '#f0a500',
    gridcolor: '#f0a500',
    color: '#03dcee'
  }
};

var carpetChartLayout = {
  paper_bgcolor: '#172042',
  plot_bgcolor: '#172042',
  showlegend: false,
  margin: {
    l: 10,
    r: 10,
    b: 10,
    t: 10,
    padding: 1
  },
  font: {
    color: '#6b6f8a'
  },
  height: 300,
  width: 300
};

Plotly.newPlot('carpetChart', [carpetChartData], carpetChartLayout);