const Chart = require('chart.js')

const bestSellerData = {
    labels: ['Guy1', 'Guy2', 'Guy3'],
    datasets: [{
        label: 'Amount (in $)',
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
Chart.defaults.global.defaultFontSize = 36;
Chart.defaults.global.defaultFontStyle = 'Bold'
window.addEventListener('resize', () => {
    //console.log(window.outerWidth)
    // media queries
    if(window.outerWidth <= 480) {
        // console.log("<480")
        Chart.defaults.global.defaultFontSize = 14;
        // console.log(Chart.defaults.global.defaultFontSize)
    } else if (window.outerWidth <= 780) {
        // console.log("<780")
        Chart.defaults.global.defaultFontSize = 22;
        // console.log(Chart.defaults.global.defaultFontSize)

    }else if (window.outerWidth <= 1000) {
        // console.log("<1000")
        Chart.defaults.global.defaultFontSize = 28;
        // console.log(Chart.defaults.global.defaultFontSize)

    }else {
        // console.log(">1000")
        Chart.defaults.global.defaultFontSize = 36;
        // console.log(Chart.defaults.global.defaultFontSize)

    }
    
})

const bestSellerWeekGraph = new Chart('best-seller-week', {
    type: 'bar',
    data: bestSellerData,
    options: {
        scales: {
            yAxes: [{ticks: {min: 0, stepSize: 10000}}]
        },
        title: {
            display: true,
            text: "Best Seller of the Week",
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: '#000'
            },
        },
        // layout: {
        //     padding: {
        //         left: 10,
        //         right: 0,
        //         bottom: 0,
        //     }
        // },
        tooltips: {
            //when hovered
            enabled: true
        }
    }
})

const bestSellerMonthGraph = new Chart('best-seller-month', {
    type: 'bar',
    data: bestSellerData,
    options: {
        scales: {
            yAxes: [{ticks: {min: 0, stepSize: 10000}}]
        },
        title: {
            display: true,
            text: "Best Seller of the Month",
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: '#000'
            },
        },
        // layout: {
        //     padding: {
        //         left: 10,
        //         right: 0,
        //         bottom: 0,
        //     }
        // },
        tooltips: {
            //when hovered
            enabled: true
        }
    }
})

const bestSellerYearGraph =  new Chart('best-seller-year', {
    type: 'bar',
    data: bestSellerData,
    options: {
        scales: {
            yAxes: [{ticks: {min: 0, stepSize: 10000}}]
        },
        title: {
            display: true,
            text: "Best Seller of the Year",
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: '#000'
            },
        },
        // layout: {
        //     padding: {
        //         left: 10,
        //         right: 0,
        //         bottom: 0,
        //     }
        // },
        tooltips: {
            //when hovered
            enabled: true
        }
    }
})

const bestClientWeekGraph =  new Chart('best-client-week', {
    type: 'bar',
    data: bestSellerData,
    options: {
        scales: {
            yAxes: [{ticks: {min: 0, stepSize: 10000}}]
        },
        title: {
            display: true,
            text: "Best Client of the Week",
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: '#000'
            },
        },
        // layout: {
        //     padding: {
        //         left: 10,
        //         right: 0,
        //         bottom: 0,
        //     }
        // },
        tooltips: {
            //when hovered
            enabled: true
        }
    }
})

const bestClientMonthGraph =  new Chart('best-client-month', {
    type: 'bar',
    data: bestSellerData,
    options: {
        scales: {
            yAxes: [{ticks: {min: 0, stepSize: 10000}}]
        },
        title: {
            display: true,
            text: "Best Client of the Month",
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: '#000'
            },
        },
        // layout: {
        //     padding: {
        //         left: 10,
        //         right: 0,
        //         bottom: 0,
        //     }
        // },
        tooltips: {
            //when hovered
            enabled: true
        }
    }
})

const bestClientYearGraph =  new Chart('best-client-year', {
    type: 'bar',
    data: bestSellerData,
    options: {
        scales: {
            yAxes: [{ticks: {min: 0, stepSize: 10000}}]
        },
        title: {
            display: true,
            text: "Best Client of the Year",
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: '#000'
            },
        },
        // layout: {
        //     padding: {
        //         left: 10,
        //         right: 0,
        //         bottom: 0,
        //     }
        // },
        tooltips: {
            //when hovered
            enabled: true
        }
    }
})

const totalNumberData = {
    labels: ['Jan', 'Feb', 'March'],
    datasets: [{
        label: 'Person',
        data: [
            100, 200, 300],
        backgroundColor: 'rgba(50, 201, 156, 0.2)',
        borderColor: 'rgba(50, 201, 156, 1)',
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBackgroundColor: 'rgba(50, 201, 156, 0.6)',
    }],
}

const totalNbClients =  new Chart('tot-client', {
    type: 'line',
    data: totalNumberData,
    options: {
        scales: {
            yAxes: [{ticks: {min: 0, stepSize: 50}}]
        },
        title: {
            display: true,
            text: "Total Number of Clients",
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: '#000'
            },
        },
        // layout: {
        //     padding: {
        //         left: 10,
        //         right: 0,
        //         bottom: 0,
        //     }
        // },
        tooltips: {
            //when hovered
            enabled: true
        }
    }
})

const totalNbSellers =  new Chart('tot-seller', {
    type: 'line',
    data: totalNumberData,
    options: {
        scales: {
            yAxes: [{ticks: {min: 0, stepSize: 10000}}]
        },
        title: {
            display: true,
            text: "Total number of sellers",
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: '#000'
            },
        },
        // layout: {
        //     padding: {
        //         left: 10,
        //         right: 0,
        //         bottom: 0,
        //     }
        // },
        tooltips: {
            //when hovered
            enabled: true
        }
    }
})

const totalNbProducts =  new Chart('tot-products', {
    type: 'line',
    data: totalNumberData,
    options: {
        scales: {
            yAxes: [{ticks: {min: 0, stepSize: 10000}}]
        },
        title: {
            display: true,
            text: "Total Number of Products",
        },
        legend: {
            position: 'top',
            labels: {
                fontColor: '#000'
            },
        },
        // layout: {
        //     padding: {
        //         left: 10,
        //         right: 0,
        //         bottom: 0,
        //     }
        // },
        tooltips: {
            //when hovered
            enabled: true
        }
    }
})