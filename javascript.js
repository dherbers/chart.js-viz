var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'average GDP per capita',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#4AA63C'
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
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '# of Apples',
            data: [12, 19, 3, 5, 2, 3],
            fill: true,
            borderColor: 'rgba(255, 8, 0)',
            backgroundColor: 'rgba(255, 8, 0, 0.1)',
            tension: 0.1},
        {
            label: '# of Oranges',
            data: [22, 10, 23, 6, 22, 13],
            fill: true,
            borderColor: 'rgba(255, 165, 0)',
            backgroundColor: 'rgba(255, 165, 0, 0.1)',
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Apples and Oranges by year',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'For all but one year, oranges outnumbered apples'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});