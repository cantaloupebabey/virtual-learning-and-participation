// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var ctx = document.getElementById("postsVReactionschart");
var studentNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 44, 45, 46, 49, 50, 51, 52, 53, 54, 55, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
var colors = ['red', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'red', 'green', 'green', 'green', 'green', 'green', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'red', 'green', 'red', 'green', 'green', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'red', 'green', 'green', 'green', 'red', 'green', 'green', 'green', 'green', 'red', 'red', 'green'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: studentNumber,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{x: 1.0, y: 8.0}, {x: 1.0, y: 7.0}, {x: 2.0, y: 43.0}, {x: 5.0, y: 39.0}, {x: 14.0, y: 158.0}, {x: 9.0, y: 82.0}, {x: 15.0, y: 139.0}, {x: 8.0, y: 117.0}, {x: 6.0, y: 77.0}, {x: 4.0, y: 41.0}, {x: 5.0, y: 51.0}, {x: 4.0, y: 29.0}, {x: 4.0, y: 52.0}, {x: 7.0, y: 82.0}, {x: 5.0, y: 42.0}, {x: 2.0, y: 30.0}, {x: 2.0, y: 60.0}, {x: 2.0, y: 30.0}, {x: 1.0, y: 8.0}, {x: 18.0, y: 238.0}, {x: 2.0, y: 24.0}, {x: 13.0, y: 130.0}, {x: 3.0, y: 13.0}, {x: 15.0, y: 186.0}, {x: 8.0, y: 100.0}, {x: 13.0, y: 123.0}, {x: 6.0, y: 100.0}, {x: 11.0, y: 167.0}, {x: 0.0, y: 0.0}, {x: 3.0, y: 46.0}, {x: 4.0, y: 29.0}, {x: 12.0, y: 165.0}, {x: 2.0, y: 23.0}, {x: 3.0, y: 35.0}, {x: 10.0, y: 92.0}, {x: 4.0, y: 32.0}, {x: 7.0, y: 121.0}, {x: 6.0, y: 69.0}, {x: 2.0, y: 27.0}, {x: 8.0, y: 86.0}, {x: 6.0, y: 66.0}, {x: 8.0, y: 76.0}, {x: 2.0, y: 31.0}, {x: 2.0, y: 19.0}, {x: 6.0, y: 91.0}, {x: 4.0, y: 39.0}, {x: 4.0, y: 40.0}, {x: 8.0, y: 90.0}, {x: 3.0, y: 60.0}, {x: 5.0, y: 68.0}, {x: 2.0, y: 25.0}, {x: 5.0, y: 50.0}, {x: 11.0, y: 159.0}, {x: 3.0, y: 25.0}, {x: 1.0, y: 10.0}, {x: 8.0, y: 69.0}, {x: 7.0, y: 101.0}, {x: 46.0, y: 586.0}, {x: 6.0, y: 92.0}, {x: 0.0, y: 0.0}, {x: 2.0, y: 24.0}, {x: 5.0, y: 82.0}]
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
              labelString: 'number of posts'
       }}],
        yAxes: [{
           scaleLabel: {
               display: true,
               labelString: 'total number of reactions recieved on posts'
           }
       }]
    }
    }
 });