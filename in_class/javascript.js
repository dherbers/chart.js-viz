var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'average GDP per capita',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#3E7C59'
            ]
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'GDP per Capita by Region',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'America has the highest average GDP, followed by East Asia and the Pacific.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['1800', '1825', '1850', '1875', '1900', '1925', '1950', '1975', '2000', '2021'],
        datasets: [{
            label: 'Brazil',
            data: [32, 32, 31.99, 32.06, 32.4, 32.75, 51.78, 63.65, 71.44, 76.33],
            fill: true,
            borderColor: '#D95970',
            backgroundColor: 'rgba(217, 89, 112, 0.1)',
            tension: 0.1},
        {
            label: 'China',
            data: [32, 32, 32, 31.96, 31.75, 31.55, 40.73, 63.26, 70.03, 77.4],
            fill: true,
            borderColor: '#1A4027',
            backgroundColor: 'rgba(26, 64, 39, 0.1)',
            tension: 0.1},
        {
            label: 'India',
            data: [25.44, 25.44, 25.44, 25.11, 18.37, 26.69, 34.92, 51.51, 62.34, 69.77],
            fill: true,
            borderColor: '#838C3E',
            backgroundColor: 'rgba(131, 140, 62, 0.1)',
            tension: 0.1},
        {
            label: 'Indonesia',
            data: [30, 30, 30, 30.04, 30.24, 30.43, 37.16, 56.49, 67.27, 72.51],
            fill: true,
            borderColor: '#F2A950',
            backgroundColor: 'rgba(242, 169, 80, 0.1)',
            tension: 0.1},
        {
            label: 'United States',
            data: [39.41, 39.41, 39.41, 39.41, 48.92, 58.47, 68.07, 72.44, 76.9, 79.59],
            fill: true,
            borderColor: '#D95436',
            backgroundColor: 'rgba(217, 84, 54, 0.1)',
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Life expectancy in largest countries in the world over time',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The United States has consistently had the highest life expectancy among large countries.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});

var ctx = document.getElementById('myChart3').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#A62B1F",
                backgroundColor:"rgb(166, 43, 31,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#7A577A",
                backgroundColor:"rgb(122, 87, 122,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#3E7C59",
                backgroundColor:"rgb(33, 64, 1,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#D96941",
                backgroundColor:"rgb(217, 105, 65,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#F2668B",
                backgroundColor:"rgb(242, 102, 139,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#B9E041",
                backgroundColor:"rgb(185, 244, 65,0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Life expectancy and GDP in the 10 largest countries',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'The two countries with the highest GDP also had the highest life expectancy.'
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Life Expectancy'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'GDP per Capita'
                  }
              }
            }
          }
        });
