// Bar Chart (hitting)


d3.csv('static/output_data/random_forest_hitters.csv').then(function (data, err) {
  if (err) throw err;

  console.log(data);


  let btx = document.getElementById('myChart2').getContext('2d');
  let labels2 = [data[0].stat, data[1].stat, data[2].stat, data[3].stat, data[4].stat, data[5].stat, data[6].stat, data[7].stat,
  data[8].stat, data[9].stat, data[10].stat, data[11].stat, data[12].stat, data[13].stat, data[14].stat, data[15].stat, data[16].stat
  ];
  let colorHex2 = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A'];

  let myChart2 = new Chart(btx, {
    type: 'bar',
    data: {
      datasets: [{
        data: [data[0].result, data[1].result, data[2].result, data[3].result, data[4].result, data[5].result, data[6].result, data[7].result,
        data[8].result, data[9].result, data[10].result, data[11].result, data[12].result, data[13].result, data[14].result, data[15].result, data[16].result
        ],
        backgroundColor: colorHex2
      }],
      labels: labels2
    },
    options: {
      responsive: true,
      legend: {
        position: 'bottom'
      },
      plugins: {
        datalabels: {
          color: '#fff',
          anchor: 'end',
          align: 'start',
          offset: -10,
          borderWidth: 2,
          borderColor: '#fff',
          borderRadius: 25,
          backgroundColor: (context) => {
            return context.dataset.backgroundColor;
          },
          font: {
            weight: 'bold',
            size: '10'
          },
          formatter: (value) => {
            return value + ' %'

          }
        }
      }
    }
  })


});
