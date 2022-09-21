const bestSeller = document.getElementById('best-seller-week')
const totalNbOfSeller = document.getElementById('total-nb-seller')

const bestSellerData = {
    labels: ['Guy1', 'Guy2', 'Guy3'],
    datasets: [{
        label: 'Best seller of the week',
        data: [50000, 40000, 30000],
        backgroundColor: [
            'red',
            'blue',
            'green',
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
        ],
        borderWidth: 1,
    }],
}
const bestSellerGraph = new Chart(bestSeller, {
    type: 'bar',
    data: bestSellerData,
    options: {
        scales: {
            yAxes: [{ticks: {min: 0}}]
        }
    }
})

const totalNbOfSellerGraph = new Chart(totalNbOfSeller, {
    type: 'bar',
    data: bestSellerData,
    options: {
        scales: {
            yAxes: [{ticks: {min: 0}}]
        }
    }
})