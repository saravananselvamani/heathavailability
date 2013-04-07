// http://jquery-arulmurugant.blogspot.in/2010/12/india-populatin-map-google-geomap.html

google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawIndiaMap);

function drawIndiaMap() {
    drawDoctorsMap();
    drawNursesMap();
    drawVaccinationsMap();
}

function drawDoctorsMap() {
    var data, options, container, chart;
    data = new google.visualization.DataTable();

    data.addColumn('string', 'State');
    data.addColumn('number', 'Number of doctors per lakh population');
    data.addColumn({type: 'string', role: 'tooltip'});
    data.addRows(doctorsData);

    options = {
        displayMode: 'regions',
        resolution: 'provinces',
        region: 'IN',
        width: 900,
        colorAxis: {minValue: 0, maxValue: 85, colors: ['red', 'green']},
        tooltip: {textStyle: {color: '#444444'}}
    };

    container = document.getElementById('doctor_map_canvas');
    chart = new google.visualization.GeoChart(container);
    chart.draw(data, options);
}

function drawNursesMap() {
    var data, options, container, chart;
    data = new google.visualization.DataTable();

    data.addColumn('string', 'State');
    data.addColumn('number', 'Number of doctors per lakh population');
    data.addColumn({type: 'string', role: 'tooltip'});
    data.addRows(nursesData);

    options = {
        displayMode: 'regions',
        resolution: 'provinces',
        region: 'IN',
        width: 900,
        colorAxis: {minValue: 0, maxValue: 255, colors: ['red', 'green']},
        tooltip: {textStyle: {color: '#444444'}}
    };

    container = document.getElementById('nurses_map_canvas');
    chart = new google.visualization.GeoChart(container);
    chart.draw(data, options);
}

function drawVaccinationsMap() {
    var data, options, container, chart;
    data = new google.visualization.DataTable();

    data.addColumn('string', 'State');
    data.addColumn('number', 'Scarcity');
    data.addColumn({type: 'string', role: 'tooltip'});
    data.addRows(vaccinationsData);

    options = {
        displayMode: 'regions',
        resolution: 'provinces',
        region: 'IN',
        width: 900,
        colorAxis: {minValue: 0, maxValue: 100, colors: ['green', 'red']},
        tooltip: {textStyle: {color: '#444444'}}
    };

    container = document.getElementById('vaccination_map_canvas');
    chart = new google.visualization.GeoChart(container);
    chart.draw(data, options);
}
