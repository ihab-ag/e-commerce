const bestSeller = document.getElementById('best-seller-week').getContext('2d')
const totalNbOfSeller = document.getElementById('total-nb-seller').getContext('2d')

const bestSellerData = {
    labels: ['Guy1', 'Guy2', 'Guy3'],
    datasets: [{
        label: 'Amount($$)',
        data: [50000, 40000, 30000],
        backgroundColor: [
            'rgba(27, 70, 89, 0.2)',
            'rgba(50, 201, 156, 0.2)',
            'rgba(255, 215, 0, 0.2)',
        ],
        borderColor: [
            'rgba(27, 70, 89, 1)',
            'rgba(50, 201, 156, 1)',
            'rgba(255, 215, 0, 1)',
        ],
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBackgroundColor: [
            'rgba(27, 70, 89, 0.6)',
            'rgba(50, 201, 156, 0.6)',
            'rgba(255, 215, 0, 0.6)',
        ]
    }],
}

Chart.defaults.global.defaultFontSize= 36;

const bestSellerGraph = new Chart(bestSeller, {
    type: 'bar',
    data: bestSellerData,
    options: {
        scales: {
            yAxes: [{ticks: {min: 0}}]
        },
        title: {
            display: true,
            text: "Best Seller of the Week",
            fontSize: 36,
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: '#000'
            },
        },
        layout: {
            padding: {
                left: 30,
                right: 0,
                bottom: 0,
            }
        },
        tooltips: {
            //when hovered
            enabled: true
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

const ss = new Chart(document.getElementById('ss'), {
    type: 'bar',
    data: bestSellerData,
    options: {
        scales: {
            yAxes: [{ticks: {min: 0}}]
        },
        // plugins: {
        //     legend: {
        //         labels: {
        //             // This more specific font property overrides the global property
        //             font: {
        //                 size: 20
        //             }
        //         }
        //     }
        // }
    }
})