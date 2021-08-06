// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("postsVGradechart");
var studentNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 44, 45, 46, 49, 50, 51, 52, 53, 54, 55, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
var colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red','green','green','green','green','green','green','green','green','green','green','yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: studentNumber,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{
              x: 1.0, y: 2.6599999999999997
            }, {
                x: 1.0, y: 0.18
            }, {
                x: 2.0, y: 6.0
            }, {
                x: 5.0, y: 5.0
            }, {
                x: 14.0, y: 8.6
            }, {
                x: 9.0, y: 6.44
            }, {
                x: 15.0, y: 5.1
            }, {
                x: 8.0, y: 5.82
            }, {
                x: 6.0, y: 9.6
            }, {
                x: 4.0, y: 3.16
            }, {
                x: 5.0, y: 6.24
            }, {
                x: 4.0, y: 6.92
            }, {
                x: 4.0, y: 7.220000000000001
            }, {
                x: 7.0, y: 9.540000000000001
            }, {
                x: 5.0, y: 8.24
            }, {
                x: 2.0, y: 6.34
            }, {
                x: 2.0, y: 7.74
            }, {
                x: 2.0, y: 6.0200000000000005
            }, {
                x: 1.0, y: 6.0200000000000005
            }, {
                x: 18.0, y: 8.98
            }, {
                x: 2.0, y: 6.480000000000001
            }, {
                x: 13.0, y: 9.06
            }, {
                x: 3.0, y: 0.32
            }, {
                x: 15.0, y: 9.0
            }, {
                x: 8.0, y: 8.28
            }, {
                x: 13.0, y: 9.0
            }, {
                x: 6.0, y: 6.6
            }, {
                x: 11.0, y: 9.540000000000001
            }, {
                x: 0.0, y: 0.02
            }, {
                x: 3.0, y: 8.48
            }, {
                x: 4.0, y: 5.9399999999999995
            }, {
                x: 12.0, y: 8.0
            }, {
                x: 2.0, y: 8.36
            }, {
                x: 3.0, y: 6.340000000000001
            }, {
                x: 10.0, y: 9.7
            }, {
                x: 4.0, y: 8.0
            }, {
                x: 7.0, y: 8.48
            }, {
                x: 6.0, y: 7.580000000000001
            }, {
                x: 2.0, y: 0.7999999999999999
            }, {
                x: 8.0, y: 8.0
            }, {
                x: 6.0, y: 1.8400000000000003
            }, {
                x: 8.0, y: 5.62
            }, {
                x: 2.0, y: 7.12
            }, {
                x: 2.0, y: 2.3
            }, {
                x: 6.0, y: 5.96
            }, {
                x: 4.0, y: 8.8
            }, {
                x: 4.0, y: 8.8
            }, {
                x: 8.0, y: 8.0
            }, {
                x: 3.0, y: 7.92
            }, {
                x: 5.0, y: 5.0200000000000005
            }, {
                x: 2.0, y: 2.2
            }, {
                x: 5.0, y: 6.38
            }, {
                x: 11.0, y: 6.3
            }, {
                x: 3.0, y: 8.0
            }, {
                x: 1.0, y: 0.3
            }, {
                x: 8.0, y: 6.26
            }, {
                x: 7.0, y: 7.42
            }, {
                x: 46.0, y: 9.6
            }, {
                x: 6.0, y: 7.0200000000000005
            }, {
                x: 0.0, y: 0.02
            }, {
                x: 2.0, y: 3.22
            }, {
                x: 5.0, y: 7.719999999999999
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
               labelString: "final grade (average of sk1-5)"
           }
       }]
    }
    }
 });