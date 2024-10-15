google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPieChart);

function drawPieChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Product Name');
    data.addColumn('number', 'Number of clients');
    data.addRows([
        ['Spot', Math.floor(Math.random() * 1000)],
        ['Fixed price', Math.floor(Math.random() * 3000)],
        ['Day ahead fixed price', Math.floor(Math.random() * 1000)],
        ['Fix+spot', Math.floor(Math.random() * 2000)],
    ]);

    // Set chart options
    var options = {'title':'Percentage of customers using products',
        'width':500,
        'height':400};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('pie_charts'));
    chart.draw(data, options);

    var chart1 = new google.visualization.PieChart(document.getElementById('pie_charts1'));
    chart1.draw(data, options);

    var chart2 = new google.visualization.PieChart(document.getElementById('pie_charts2'));
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
         ['Spot', Math.floor(Math.random() * 1000), false],
         ['Fixed price', Math.floor(Math.random() * 3000), true],
         ['Day ahead fixed price', Math.floor(Math.random() * 1000), false],
         ['Fix+spot', Math.floor(Math.random() * 2000), true],
         ['Very complex seasonal product', Math.floor(Math.random() * 2000), true],
         ['Other complex seasonal product', Math.floor(Math.random() * 2000), true],
    ]);

    var table = new google.visualization.Table(document.getElementById('google_table'));
    table.draw(data, {showRowNumber: true, width: '100%', height: 300});
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPerformanceChart);

function drawPerformanceChart() {
    var bills = 1000000;
    var customers = 950000;
    var data = google.visualization.arrayToDataTable([
        ['Year-Month', 'Bills', 'Number of customers'],
        ['2024-May',  (bills+Math.floor(Math.random() * 10)), (customers+Math.floor(Math.random() * 10))],
        ['2024-Jun',  (bills-Math.floor(Math.random() * 10)), (customers-Math.floor(Math.random() * 10))],
        ['2024-Jul',  (bills+Math.floor(Math.random() * 20)), (customers+Math.floor(Math.random() * 20))],
        ['2024-Aug',  (bills-Math.floor(Math.random() * 10)), (customers-Math.floor(Math.random() * 10))],
        ['2024-Sep',  (bills+Math.floor(Math.random() * 20)), (customers+Math.floor(Math.random() * 20))],
        ['2024-Oct',  (bills-Math.floor(Math.random() * 10)), (customers-Math.floor(Math.random() * 10))]
    ]);

    var options = {
        title: 'Number of bills per month',
        curveType: 'function',
        legend: { position: 'bottom' },
        height: 400
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
}
