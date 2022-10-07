const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: [ 
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)',
    ],
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

const config = {
  type: 'doughnut',
  data: data,
  options: {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 32
          }
        }
      }
    }
  }
};


const myChart = new Chart(
  document.getElementById('myChart'),
  config
);