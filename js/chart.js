// Traffic Chart

const trafficChart = document.getElementById('traffic-chart');
let newTrafficChart = new Chart(trafficChart, {
  type: 'line',
  data: {
    labels: [ '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'], 
    datasets: [{
      label: '# of Hits',
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: 'rgba(142, 120, 194, 0.2)',
      borderWidth: 1,
      borderColor:'rgb(142, 120, 194)',
      pointRadius: 5,
      pointBackgroundColor: '#fff',
      pointBorderColor: 'rgb(142, 120, 194)',
      pointBorderWidth: 2,
      lineTension: 0,
    }]
  },
  options: {
    aspectRatio: 2.5,
    animation: {
      duration: 0
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    },
    legend : {
      display: false
    }
  }
});

// Daily Chart
const dailyChart = document.getElementById('daily-chart');
let newDailyChart = new Chart(dailyChart, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T','W', 'T', 'F', 'S'],
    datasets: [{
      label: '# of Hits',
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: 'rgb(142, 120, 194)',
      borderWidth: 1
    }]
  },
  options: {
    aspectRatio: 1.3,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    },
    legend : {
      display: false
    }
  }
})

// Mobile Chart
const mobileChart = document.getElementById('mobile-chart');
let newMobileChart = new Chart(mobileChart, {
  type: 'doughnut',
  data: {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
      label: '# of Users',
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: [
        '#8e78c2',
        '#78CF82',
        '#51B6C8'
      ]
    }]
  },
  options: {
    aspectRatio: 1.3,
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
      }
    }
  }
})
