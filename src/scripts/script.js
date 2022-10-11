////////////////////////////////////////////

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

///////////////////////////////////////////////////////


function handleActiveButton() {

    let url = window.location.href;
    let mainURL = window.location.origin;
    console.log(url)
    console.log(mainURL)

    let str = url.split("localhost:8080/src/pages/")[1]

    if (!str) {

      const li = document.getElementById("li1");
      li.classList.add("active");

    } else if(str == "teste.html") {

      const li = document.getElementById("li2");
      li.classList.add("active");

    }

}

handleActiveButton();