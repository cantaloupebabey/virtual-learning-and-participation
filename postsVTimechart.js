// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var ctx = document.getElementById("postsVTimechart");
var studentNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 44, 45, 46, 49, 50, 51, 52, 53, 54, 55, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
var colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red','green','green','green','green','green','green','green','green','green','green','yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: studentNumber,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{x: 26.666666666666668, y: 1.0}, {x: 9.866666666666667, y: 1.0}, {x: 18.5, y: 2.0}, {x: 144.18333333333334, y: 5.0}, {x: 569.5333333333333, y: 14.0}, {x: 249.75, y: 9.0}, {x: 431.6166666666667, y: 15.0}, {x: 157.93333333333334, y: 8.0}, {x: 726.8666666666667, y: 6.0}, {x: 79.85, y: 4.0}, {x: 301.05, y: 5.0}, {x: 121.15, y: 4.0}, {x: 148.33333333333334, y: 4.0}, {x: 279.21666666666664, y: 7.0}, {x: 289.1333333333333, y: 5.0}, {x: 69.2, y: 2.0}, {x: 96.18333333333334, y: 2.0}, {x: 26.35, y: 2.0}, {x: 6.133333333333334, y: 1.0}, {x: 358.43333333333334, y: 18.0}, {x: 54.11666666666667, y: 2.0}, {x: 346.0833333333333, y: 13.0}, {x: 21.4, y: 3.0}, {x: 376.56666666666666, y: 15.0}, {x: 174.11666666666667, y: 8.0}, {x: 320.73333333333335, y: 13.0}, {x: 461.15, y: 6.0}, {x: 294.8833333333333, y: 11.0}, {x: 12.233333333333333, y: 0.0}, {x: 147.78333333333333, y: 3.0}, {x: 247.91666666666666, y: 4.0}, {x: 378.35, y: 12.0}, {x: 27.583333333333332, y: 2.0}, {x: 50.31666666666667, y: 3.0}, {x: 245.46666666666667, y: 10.0}, {x: 160.01666666666668, y: 4.0}, {x: 308.5, y: 7.0}, {x: 218.06666666666666, y: 6.0}, {x: 22.516666666666666, y: 2.0}, {x: 187.31666666666666, y: 8.0}, {x: 127.73333333333333, y: 6.0}, {x: 255.9, y: 8.0}, {x: 534.9666666666667, y: 2.0}, {x: 43.016666666666666, y: 2.0}, {x: 209.6, y: 6.0}, {x: 49.916666666666664, y: 4.0}, {x: 34.03333333333333, y: 4.0}, {x: 56.28333333333333, y: 8.0}, {x: 217.28333333333333, y: 3.0}, {x: 253.8, y: 5.0}, {x: 30.583333333333332, y: 2.0}, {x: 309.0833333333333, y: 5.0}, {x: 315.9166666666667, y: 11.0}, {x: 49.06666666666667, y: 3.0}, {x: 71.18333333333334, y: 1.0}, {x: 126.13333333333334, y: 8.0}, {x: 273.25, y: 7.0}, {x: 655.2333333333333, y: 46.0}, {x: 220.35, y: 6.0}, {x: 16.466666666666665, y: 0.0}, {x: 35.0, y: 2.0}, {x: 113.76666666666667, y: 5.0}]
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
              labelString: 'time spent online in minutes'
       }}],
        yAxes: [{
           scaleLabel: {
               display: true,
               labelString: 'number of posts'
           }
       }]
    }
    }
 });