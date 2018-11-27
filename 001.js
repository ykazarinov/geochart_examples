      google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD_IThXsdx90XBRYYWlko8yHKhKM2H9iM0'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['City', 'Populations'],
          ['Paris', 2206488],
          ['Marseille', 850726],
          ['Lyon',  484344],
          ['Toulouse',  441802],
          ['Nice',  343304],
          ['Nantes',  28497],
          ['Strasbourg',  271782],
          ['Montpellier', 257351],
          ['Bordeaux',  239157],
          ['Lille', 22756],
          ['Rennes',  207178],
          ['Reims', 179992],
          ['Le Havre',  175497],
          ['Saint-Étienne', 17126],
          ['Toulon',  164532],
          ['Tulle', 14325],
          ['Laguenne', 1351]
       ]);

        var options = {
          region: 'FR', // Europe
          displayMode: 'markers',
          
          colorAxis: {colors: ['#87CEEB', '#191970']},
          sizeAxis: { minValue: 0, maxValue: 2500000 }
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
