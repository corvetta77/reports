// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Product Name');
    data.addColumn('number', 'Number of clients');
    data.addRows([
        ['Spot', 60000],
        ['Fixed price', 10000],
        ['Day ahead fixed price', 50000],
        ['Fix+spot', 20000],
    ]);

    // Set chart options
    var options = {'title':'Percentage of customers using products',
        'width':500,
        'height':400};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('google_charts'));
    chart.draw(data, options);

    var chart1 = new google.visualization.PieChart(document.getElementById('google_charts1'));
    chart1.draw(data, options);

    var chart2 = new google.visualization.PieChart(document.getElementById('google_charts2'));
    chart2.draw(data, options);
}

google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Product Name');
    data.addColumn('number', 'Number of clients');
    data.addColumn('boolean', 'Is active');
    data.addRows([
         ['Spot', 60000, false],
         ['Fixed price', 10000, true],
         ['Day ahead fixed price', 50000, false],
         ['Fix+spot', 20000, true],
    ]);

    var table = new google.visualization.Table(document.getElementById('google_table'));

    table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}
