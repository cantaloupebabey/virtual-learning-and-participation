// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var ctx = document.getElementById("timeVGradechart");
var studentNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 44, 45, 46, 49, 50, 51, 52, 53, 54, 55, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
var colors = ['red', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'red', 'green', 'green', 'green', 'green', 'green', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'red', 'green', 'red', 'green', 'green', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'red', 'green', 'green', 'green', 'red', 'green', 'green', 'green', 'green', 'red', 'red', 'green'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: studentNumber,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{
              x: 26.666666666666668, y: 2.6599999999999997
            }, {
                x: 9.866666666666667, y: 0.18
            }, {
                x: 18.5, y: 6.0
            }, {
                x: 144.18333333333334, y: 5.0
            }, {
                x: 569.5333333333333, y: 8.6
            }, {
                x: 249.75, y: 6.44
            }, {
                x: 431.6166666666667, y: 5.1
            }, {
                x: 157.93333333333334, y: 5.82
            }, {
                x: 726.8666666666667, y: 9.6
            }, {
                x: 79.85, y: 3.16
            }, {
                x: 301.05, y: 6.24
            }, {
                x: 121.15, y: 6.92
            }, {
                x: 148.33333333333334, y: 7.220000000000001
            }, {
                x: 279.21666666666664, y: 9.540000000000001
            }, {
                x: 289.1333333333333, y: 8.24
            }, {
                x: 69.2, y: 6.34
            }, {
                x: 96.18333333333334, y: 7.74
            }, {
                x: 26.35, y: 6.0200000000000005
            }, {
                x: 6.133333333333334, y: 6.0200000000000005
            }, {
                x: 358.43333333333334, y: 8.98
            }, {
                x: 54.11666666666667, y: 6.480000000000001
            }, {
                x: 346.0833333333333, y: 9.06
            }, {
                x: 21.4, y: 0.32
            }, {
                x: 376.56666666666666, y: 9.0
            }, {
                x: 174.11666666666667, y: 8.28
            }, {
                x: 320.73333333333335, y: 9.0
            }, {
                x: 461.15, y: 6.6
            }, {
                x: 294.8833333333333, y: 9.540000000000001
            }, {
                x: 12.233333333333333, y: 0.02
            }, {
                x: 147.78333333333333, y: 8.48
            }, {
                x: 247.91666666666666, y: 5.9399999999999995
            }, {
                x: 378.35, y: 8.0
            }, {
                x: 27.583333333333332, y: 8.36
            }, {
                x: 50.31666666666667, y: 6.340000000000001
            }, {
                x: 245.46666666666667, y: 9.7
            }, {
                x: 160.01666666666668, y: 8.0
            }, {
                x: 308.5, y: 8.48
            }, {
                x: 218.06666666666666, y: 7.580000000000001
            }, {
                x: 22.516666666666666, y: 0.7999999999999999
            }, {
                x: 187.31666666666666, y: 8.0
            }, {
                x: 127.73333333333333, y: 1.8400000000000003
            }, {
                x: 255.9, y: 5.62
            }, {
                x: 534.9666666666667, y: 7.12
            }, {
                x: 43.016666666666666, y: 2.3
            }, {
                x: 209.6, y: 5.96
            }, {
                x: 49.916666666666664, y: 8.8
            }, {
                x: 34.03333333333333, y: 8.8
            }, {
                x: 56.28333333333333, y: 8.0
            }, {
                x: 217.28333333333333, y: 7.92
            }, {
                x: 253.8, y: 5.0200000000000005
            }, {
                x: 30.583333333333332, y: 2.2
            }, {
                x: 309.0833333333333, y: 6.38
            }, {
                x: 315.9166666666667, y: 6.3
            }, {
                x: 49.06666666666667, y: 8.0
            }, {
                x: 71.18333333333334, y: 0.3
            }, {
                x: 126.13333333333334, y: 6.26
            }, {
                x: 273.25, y: 7.42
            }, {
                x: 655.2333333333333, y: 9.6
            }, {
                x: 220.35, y: 7.0200000000000005
            }, {
                x: 16.466666666666665, y: 0.02
            }, {
                x: 35.0, y: 3.22
            }, {
                x: 113.76666666666667, y: 7.719999999999999
            }]
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
           display: false,
       },
       scales: {
        xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'time spent online in minutes'
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