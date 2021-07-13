// Bar Chart (pitching)


d3.json('/data').then(function (data, err) {
  if (err) throw err;

  console.log(data);


  let btx = document.getElementById('myChart1').getContext('2d');
  let labels2 = data.map(record=> record.stat);
  
  let colorHex2 = ["#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177", "#0d5ac1",
    "#f205e6", "#1c0365", "#14a9ad", "#4ca2f9", "#a4e43f", "#d298e2", "#6119d0",
    "#d2737d", "#c0a43c", "#f2510e", "#651be6", "#79806e", "#61da5e", "#cd2f00",
    "#9348af", "#01ac53", "#c5a4fb"];

  let myChart2 = new Chart(btx, {
    type: 'bar',
    data: {
      datasets: [{
        data: data.map(record=> record.result),
        
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