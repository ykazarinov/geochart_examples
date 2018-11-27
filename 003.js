      google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD_IThXsdx90XBRYYWlko8yHKhKM2H9iM0'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['Espagne', 100],
    ['France', 120],
    ['Germany', 90],
    ['Austria', 90],
    ['Netherlands', 100],
    ['UK', 100],
    ['Ireland', 80],
    ['Italy', 110],
    ['Portugal', 100],
    ['Poland', 80],
    ['Belgium', 90],
    ['Switzerland', 110],
    ['Greece', 80],
    ['Ukraine', 120],
  ]);

  var options = { 
    displayMode: 'text',
    region: '150', // Europe
    colorAxis: {colors: ['#00FF7F', '#FF4500']},
          backgroundColor: '#81d4fa',
       
   };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div3'));

        chart.draw(data, options);
      }