// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var ctx = document.getElementById("reactionsVGradechart");
var studentNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 44, 45, 46, 49, 50, 51, 52, 53, 54, 55, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
var colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red','green','green','green','green','green','green','green','green','green','green','yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: studentNumber,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{x: 8.0, y: 2.6599999999999997}, {x: 7.0, y: 0.18}, {x: 43.0, y: 6.0}, {x: 39.0, y: 5.0}, {x: 158.0, y: 8.6}, {x: 82.0, y: 6.44}, {x: 139.0, y: 5.1}, {x: 117.0, y: 5.82}, {x: 77.0, y: 9.6}, {x: 41.0, y: 3.16}, {x: 51.0, y: 6.24}, {x: 29.0, y: 6.92}, {x: 52.0, y: 7.220000000000001}, {x: 82.0, y: 9.540000000000001}, {x: 42.0, y: 8.24}, {x: 30.0, y: 6.34}, {x: 60.0, y: 7.74}, {x: 30.0, y: 6.0200000000000005}, {x: 8.0, y: 6.0200000000000005}, {x: 238.0, y: 8.98}, {x: 24.0, y: 6.480000000000001}, {x: 130.0, y: 9.06}, {x: 13.0, y: 0.32}, {x: 186.0, y: 9.0}, {x: 100.0, y: 8.28}, {x: 123.0, y: 9.0}, {x: 100.0, y: 6.6}, {x: 167.0, y: 9.540000000000001}, {x: 0.0, y: 0.02}, {x: 46.0, y: 8.48}, {x: 29.0, y: 5.9399999999999995}, {x: 165.0, y: 8.0}, {x: 23.0, y: 8.36}, {x: 35.0, y: 6.340000000000001}, {x: 92.0, y: 9.7}, {x: 32.0, y: 8.0}, {x: 121.0, y: 8.48}, {x: 69.0, y: 7.580000000000001}, {x: 27.0, y: 0.7999999999999999}, {x: 86.0, y: 8.0}, {x: 66.0, y: 1.8400000000000003}, {x: 76.0, y: 5.62}, {x: 31.0, y: 7.12}, {x: 19.0, y: 2.3}, {x: 91.0, y: 5.96}, {x: 39.0, y: 8.8}, {x: 40.0, y: 8.8}, {x: 90.0, y: 8.0}, {x: 60.0, y: 7.92}, {x: 68.0, y: 5.0200000000000005}, {x: 25.0, y: 2.2}, {x: 50.0, y: 6.38}, {x: 159.0, y: 6.3}, {x: 25.0, y: 8.0}, {x: 10.0, y: 0.3}, {x: 69.0, y: 6.26}, {x: 101.0, y: 7.42}, {x: 586.0, y: 9.6}, {x: 92.0, y: 7.0200000000000005}, {x: 0.0, y: 0.02}, {x: 24.0, y: 3.22}, {x: 82.0, y: 7.719999999999999}]
       }]
    },
    options: {
       tooltips: {
          callbacks: {
             label: function(tooltipItem, data) {
                var label = data.labels[tooltipItem.index];
                return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
             }
          }
       },
       legend: {
           display: true,
       },
       scales: {
        xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'number of reactions recieved'
       }}],
        yAxes: [{
           scaleLabel: {
               display: true,
               labelString: "final grade (average of sk1-5)"
           }
       }]
    }
    }
 });