// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("postsVTimechart");
var studentNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 44, 45, 46, 49, 50, 51, 52, 53, 54, 55, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
var colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red','green','green','green','green','green','green','green','green','green','green','yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: studentNumber,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{
                x: 1.0, y: 26.666666666666668
            }, {
                x: 1.0, y: 9.866666666666667
            }, {
                x: 2.0, y: 18.5
            }, {
                x: 5.0, y: 144.18333333333334
            }, {
                x: 14.0, y: 569.5333333333333
            }, {
                x: 9.0, y: 249.75
            }, {
                x: 15.0, y: 431.6166666666667
            }, {
                x: 8.0, y: 157.93333333333334
            }, {
                x: 6.0, y: 726.8666666666667
            }, {
                x: 4.0, y: 79.85
            }, {
                x: 5.0, y: 301.05
            }, {
                x: 4.0, y: 121.15
            }, {
                x: 4.0, y: 148.33333333333334
            }, {
                x: 7.0, y: 279.21666666666664
            }, {
                x: 5.0, y: 289.1333333333333
            }, {
                x: 2.0, y: 69.2
            }, {
                x: 2.0, y: 96.18333333333334
            }, {
                x: 2.0, y: 26.35
            }, {
                x: 1.0, y: 6.133333333333334
            }, {
                x: 18.0, y: 358.43333333333334
            }, {
                x: 2.0, y: 54.11666666666667
            }, {
                x: 13.0, y: 346.0833333333333
            }, {
                x: 3.0, y: 21.4
            }, {
                x: 15.0, y: 376.56666666666666
            }, {
                x: 8.0, y: 174.11666666666667
            }, {
                x: 13.0, y: 320.73333333333335
            }, {
                x: 6.0, y: 461.15
            }, {
                x: 11.0, y: 294.8833333333333
            }, {
                x: 0.0, y: 12.233333333333333
            }, {
                x: 3.0, y: 147.78333333333333
            }, {
                x: 4.0, y: 247.91666666666666
            }, {
                x: 12.0, y: 378.35
            }, {
                x: 2.0, y: 27.583333333333332
            }, {
                x: 3.0, y: 50.31666666666667
            }, {
                x: 10.0, y: 245.46666666666667
            }, {
                x: 4.0, y: 160.01666666666668
            }, {
                x: 7.0, y: 308.5
            }, {
                x: 6.0, y: 218.06666666666666
            }, {
                x: 2.0, y: 22.516666666666666
            }, {
                x: 8.0, y: 187.31666666666666
            }, {
                x: 6.0, y: 127.73333333333333
            }, {
                x: 8.0, y: 255.9
            }, {
                x: 2.0, y: 534.9666666666667
            }, {
                x: 2.0, y: 43.016666666666666
            }, {
                x: 6.0, y: 209.6
            }, {
                x: 4.0, y: 49.916666666666664
            }, {
                x: 4.0, y: 34.03333333333333
            }, {
                x: 8.0, y: 56.28333333333333
            }, {
                x: 3.0, y: 217.28333333333333
            }, {
                x: 5.0, y: 253.8
            }, {
                x: 2.0, y: 30.583333333333332
            }, {
                x: 5.0, y: 309.0833333333333
            }, {
                x: 11.0, y: 315.9166666666667
            }, {
                x: 3.0, y: 49.06666666666667
            }, {
                x: 1.0, y: 71.18333333333334
            }, {
                x: 8.0, y: 126.13333333333334
            }, {
                x: 7.0, y: 273.25
            }, {
                x: 46.0, y: 655.2333333333333
            }, {
                x: 6.0, y: 220.35
            }, {
                x: 0.0, y: 16.466666666666665
            }, {
                x: 2.0, y: 35.0
            }, {
                x: 5.0, y: 113.76666666666667
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
           display: true,
       },
       scales: {
        xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'number of posts'
       }}],
        yAxes: [{
           scaleLabel: {
               display: true,
               labelString: "time spent online in minutes"
           }
       }]
    }
    }
 });