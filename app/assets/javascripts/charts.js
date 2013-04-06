// http://jquery-arulmurugant.blogspot.in/2010/12/india-populatin-map-google-geomap.html

google.load('visualization', '1', {'packages': ['geomap']});
google.setOnLoadCallback(drawIndiaMap);

var geomap2;

function drawIndiaMap() {
    var data2 = new google.visualization.DataTable();

    data2.addRows(35);

    data2.addColumn('string', 'State');
    data2.addColumn('number', 'Population');

    data2.setValue(0, 0, 'Andhra Pradesh');
    data2.setValue(0, 1, 76210007);

    data2.setValue(1, 0, 'Arunachal Pradesh');
    data2.setValue(1, 1, 1097968);

    data2.setValue(2, 0, 'Assam');
    data2.setValue(2, 1, 26655528);

    data2.setValue(3, 0, 'Bihar');
    data2.setValue(3, 1, 82998509);

    data2.setValue(4, 0, 'Chhattisgarh');
    data2.setValue(4, 1, 20833803);

    data2.setValue(5, 0, 'Goa');
    data2.setValue(5, 1, 1347668);

    data2.setValue(6, 0, 'Gujarat');
    data2.setValue(6, 1, 50671017);

    data2.setValue(7, 0, 'Haryana');
    data2.setValue(7, 1, 21144564);

    data2.setValue(8, 0, 'Himachal Pradesh');
    data2.setValue(8, 1, 6077900);

    data2.setValue(9, 0, 'Jammu and Kashmir');
    data2.setValue(9, 1, 10143700);

    data2.setValue(10, 0, 'Jharkhand');
    data2.setValue(10, 1, 26945829);

    data2.setValue(11, 0, 'Karnataka');
    data2.setValue(11, 1, 52850562);

    data2.setValue(12, 0, 'Kerala');
    data2.setValue(12, 1, 31841374);

    data2.setValue(13, 0, 'Madhya Pradesh');
    data2.setValue(13, 1, 60348023);

    data2.setValue(14, 0, 'Maharashtra');
    data2.setValue(14, 1, 96878627);

    data2.setValue(15, 0, 'Manipur');
    data2.setValue(15, 1, 2293896);

    data2.setValue(16, 0, 'Meghalaya');
    data2.setValue(16, 1, 2318822);

    data2.setValue(17, 0, 'Mizoram');
    data2.setValue(17, 1, 888573);

    data2.setValue(18, 0, 'Nagaland');
    data2.setValue(18, 1, 1990036);

    data2.setValue(19, 0, 'Orissa');
    data2.setValue(19, 1, 36804660);

    data2.setValue(20, 0, 'Punjab');
    data2.setValue(20, 1, 24358999);

    data2.setValue(21, 0, 'Rajasthan');
    data2.setValue(21, 1, 56507188);

    data2.setValue(22, 0, 'Sikkim');
    data2.setValue(22, 1, 540851);

    data2.setValue(23, 0, 'Tamil Nadu');
    data2.setValue(23, 1, 62405679);

    data2.setValue(24, 0, 'Tripura');
    data2.setValue(24, 1, 3199203);

    data2.setValue(25, 0, 'Uttar Pradesh');
    data2.setValue(25, 1, 166197921);

    //note Uttarakhand will not work

    data2.setValue(26, 0, 'Uttaranchal');
    data2.setValue(26, 1, 8489349);

    data2.setValue(27, 0, 'West Bengal');
    data2.setValue(27, 1, 80176197);


    data2.setValue(28, 0, 'Delhi');
    data2.setValue(28, 1, 13850507);

    data2.setValue(29, 0, 'Andaman and Nicobar Islands');
    data2.setValue(29, 1, 356152);

    data2.setValue(30, 0, 'Chandigarh');
    data2.setValue(30, 1, 900635);

    data2.setValue(31, 0, 'Dadra and Nagar Haveli');
    data2.setValue(31, 1, 220490);

    data2.setValue(32, 0, 'Daman and Diu');
    data2.setValue(32, 1, 158204);

    data2.setValue(33, 0, 'Lakshadweep');
    data2.setValue(33, 1, 60650);

    data2.setValue(34, 0, 'Puducherry');
    data2.setValue(34, 1, 974345);

    data2.setValue(34, 0, 'Chennai');
    data2.setValue(34, 1, 100000000);

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
