            google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD_IThXsdx90XBRYYWlko8yHKhKM2H9iM0'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          
          
          ['Country',   'Populations'],
          ['DR Congo', 84004989],
          ['France', 67401000],
          ['Canada', 36879800],
          ['Madagascar', 24235400],
          ['Cameroon', 23345200],
          ['Ivory coast', 22701600],
          ['Niger', 19899100],
          ['Burkina faso', 18105600],
          ['Mali',17599700],
          ['Senegal',15129300],
          ['Chad', 14037500],
          ['Guinea',12608600],
          ['Rwanda',11607700],
          ['Belgium',11358357],
          ['Burundi',11178900],
          ['Benin',10879800],
          ['Haiti',10711100],
          ['Switzerland',8510000],
          ['Togo',7304600],
          ['Central african republic',4900300],
          ['Congo', 4620300],
          ['Gabon',1725300],
          ['Equatorial guinea',1221490],
          ['Djibouti', 887861],
          ['Comoros',795601],
          ['Luxembourg',602900],
          ['Vanuatu',264652],
          ['Seychelles',92900],
          ['Monaco',38731],
          ['French polynesia',267000],
          ['New caledonia',224824],
          ['Aosta valley',128000],
          ['Jersey',91533],
          ['Saint-martin',29376],
          ['Wallis and Futuna',16448],
          ['Saint-Barthélemy',7492],
          ['Saint-Pierre and Miquelon',7044],
          ['French Guiana',288458],
          ['Martinique',385034],
          ['Guadeloupe',449246]
        
       ]);

        var options = {
          
          colorAxis: {colors: ['#00FF7F', '#008000']},
          backgroundColor: '#81d4fa',
          datalessRegionColor: '#fff',
          defaultColor: '#f5f5f5',

        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div2'));

        chart.draw(data, options);
      }
