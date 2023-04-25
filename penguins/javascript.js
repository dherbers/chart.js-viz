var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Adelie-Biscoe', 'Adelie-Dream', 'Adelie-Torgersen', 'Chinstrap-Dream', 'Gentoo-Biscoe'],
        datasets: [{
            label: 'average male bill length in mm',
            data: [40.59, 40.07, 40.59, 51.09, 49.47],
            backgroundColor: [
                '#75B2BF'
            ]
        }, {
            label: 'average female flipper length in mm',
            data: [37.36, 36.91, 37.55, 46.57, 45.56],
            backgroundColor: [
                '#037F8C'
            ]
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Average Bill Length of Penguins by Sex, Species and Island',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Adelie penguins have the shortest bills on average across the three observed islands. Chinstrap penguins on Dream Island had the longest bills on average.'
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
    type: 'polarArea',

    data: {
        labels: [
          'Female Adelie-Biscoe',
          'Male Adelie-Biscoe',
          'Female Adelie-Dream',
          'Male Adelie-Dream',
          'Female Adelie-Torgersen',
          'Male Adelie-Torgersen',
          'Female Chinstrap-Dream',
          'Male Chinstrap-Dream',
          'Female Gentoo-Biscoe',
          'Male Gentoo-Biscoe'
        ],
        datasets: [{
          label: 'average body mass in grams',
          data: [3369, 4050, 3344, 4045, 3395, 4034, 3527, 3938, 4679, 5484],
          backgroundColor: [
            '#2A2C59',
            '#024059',
            '#025159',
            '#038C73',
            '#A63614',
            '#591A06',
            '#A60324',
            '#8C4688',
            '#500659',
            '#5065BF'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Body Mass of Palmer Penguins by Sex, Species, and Island',
            font: {
                size: 20
            }
          },
          subtitle: {
            display: true,
            text: 'Male Gentoo penguins on Biscoe island are larger in grams of body mass than all other sexes and species. Female penguins are consistently smaller across species and islands.'
        }
        }
      }
    });

var ctx = document.getElementById('myChart3').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 192, y: 3500},
                ],
            label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor: "rgb(217,82,4,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 188, y: 3525},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor: "rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 198, y: 3950},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 178, y: 3250},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 195, y: 4150},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 193, y: 3800},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 185, y: 3700},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 190, y: 3575},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 181, y: 3700},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 190, y: 3450},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 181, y: 3600},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 187, y: 2900},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 195, y: 3300},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 200, y: 3400},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 191, y: 3700},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 187, y: 3200},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 187, y: 3350},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 199, y: 3900},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 195, y: 3850},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 192, y: 2700},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 187, y: 3650},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 196, y: 3500},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 196, y: 3675},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 190, y: 3400},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 198, y: 3675},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 199, y: 3325},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 193, y: 3600},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 187, y: 3350},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 191, y: 3250},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 194, y: 3525},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 189, y: 3650},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 195, y: 3650},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 202, y: 3400},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 198, y: 3775},
                ],
                label: "Chinstrap Dream",
                borderColor: "#D95204",
                backgroundColor:"rgb(217,82,4,0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                 },
                title: {
                    display: true,
                    text: 'Flipper length and body mass in female Chinstrap penguins on Dream Island',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'Generally, flipper length and body mass are loosely correlated in female Chinstrap penguins on Dream Island. '
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Body Mass (g)'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Flipper Length (mm)'
                  }
              }
            }
          }
        });
