// http://jquery-arulmurugant.blogspot.in/2010/12/india-populatin-map-google-geomap.html

google.load('visualization', '1', {'packages': ['geomap']});
google.setOnLoadCallback(drawIndiaMap);

var geomap2;

function drawIndiaMap() {
    var result = [];

    $("table.current tr").each(function(index, row){
        var record = []
        $(row).find("td").each(function(index, column){
            record.push($(column).html());
        });
        result.push(record);
    });

    var data2 = new google.visualization.arrayToDataTable(result);
    var options = {};
    options['region'] = 'IN';
    options['width'] = '800px';
    options['height'] = '800px';
    options['dataMode'] = 'regions';
    options['colors'] = [0xFF0000, 0x00FF00]

    var container2 = document.getElementById('map_canvas');
    geomap2 = new google.visualization.GeoMap(container2);
    geomap2.draw(data2, options);
//    google.visualization.events.addListener(geomap2, 'select', function(){
//        alert("hi");
//    });

}
