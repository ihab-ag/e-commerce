Chart.defaults.global.defaultFontSize = 36;
Chart.defaults.global.defaultFontStyle = 'Bold'

// media queries
window.addEventListener('resize', () => {
    if(window.outerWidth <= 480) {
        Chart.defaults.global.defaultFontSize = 14;
    } else if (window.outerWidth <= 780) {
        Chart.defaults.global.defaultFontSize = 18;

    }else if (window.outerWidth <= 1000) {
        Chart.defaults.global.defaultFontSize = 20;

    }else {
        Chart.defaults.global.defaultFontSize = 28;

    }
})

const bestWeekUrl = "http://localhost/e-commerce/ecommerce-server/apis/best-seller-week.php"
const getBestSellerWeek = () => {
    axios.get(bestWeekUrl).then(response => {
        const weeklyData = response.data
        const labelsArr = []
        const dataArr = []
        weeklyData.forEach(data => {
            labelsArr.push(data['name'])
            dataArr.push(data['tot_amount'])
            
        })
        if(weeklyData.length !== 0)
            document.getElementById('stat-result-seller-week').textContent = "Best Seller: " + labelsArr[0] + " " + dataArr[0] + "$"
        else {
            document.getElementById('stat-result-seller-week').textContent = "No data this week"
        }
        const bestWeekSellerData = {
            labels: labelsArr,
            datasets: [{
                label: 'Amount (in $)',
                data: dataArr,
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
        const bestSellerWeekGraph = new Chart('best-seller-week', {
            type: 'bar',
            data: bestWeekSellerData,
            options: {
                scales: {
                    yAxes: [{ticks: {min: 0, max: (parseInt(dataArr[0]))}}]
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
                tooltips: {
                    //when hovered
                    enabled: true
                }
            }
        })
    })
}
getBestSellerWeek()

const bestMonthUrl = "http://localhost/e-commerce/ecommerce-server/apis/best-seller-month.php"

const getBestSellerMonth = () => {
    axios.get(bestMonthUrl).then(response => {
        const monthlyData = response.data
        const labelsArr = []
        const dataArr = []
        monthlyData.forEach(data => {
            labelsArr.push(data['name'])
            dataArr.push(data['tot_amount'])
            
        })
        
        if(monthlyData.length !== 0)
            document.getElementById('stat-result-seller-month').textContent = "Best Seller: " + labelsArr[0] + " " + dataArr[0] + "$"
        else {
            document.getElementById('stat-result-seller-month').textContent = "No data this month"
        }
        const bestMonthSellerData = {
            labels: labelsArr,
            datasets: [{
                label: 'Amount (in $)',
                data: dataArr,
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
        const bestSellerMonthGraph = new Chart('best-seller-month', {
            type: 'bar',
            data: bestMonthSellerData,
            options: {
                scales: {
                    yAxes: [{ticks: {min: 0, max: parseInt(dataArr[0])}}]
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
                tooltips: {
                    //when hovered
                    enabled: true
                }
            }
        })
    })
}

getBestSellerMonth()

const bestYearUrl = "http://localhost/e-commerce/ecommerce-server/apis/best-seller-year.php"

const getBestSellerYear = () => {
    axios.get(bestYearUrl).then(response => {
        const yearlyData = response.data
        const labelsArr = []
        const dataArr = []
        yearlyData.forEach(data => {
            labelsArr.push(data['name'])
            dataArr.push(data['tot_amount'])
            
        })
        
        if(yearlyData.length !== 0)
            document.getElementById('stat-result-seller-year').textContent = "Best Seller: " + labelsArr[0] + " " + dataArr[0] + "$"
        else {
            document.getElementById('stat-result-seller-year').textContent = "No data this year"
        }
        const bestSellerYearData = {
            labels: labelsArr,
            datasets: [{
                label: 'Amount (in $)',
                data: dataArr,
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
        const bestSellerYearGraph = new Chart('best-seller-year', {
            type: 'bar',
            data: bestSellerYearData,
            options: {
                scales: {
                    yAxes: [{ticks: {min: 0, max: parseInt(dataArr[0])}}]
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
                tooltips: {
                    //when hovered
                    enabled: true
                }
            }
        })
    })
}

getBestSellerYear()

//client graphs

const bestClientWeekUrl = "http://localhost/e-commerce/ecommerce-server/apis/best-client-week.php"

const getBestClientWeek = () => {
    axios.get(bestClientWeekUrl).then(response => {
        const weeklyData = response.data
        const labelsArr = []
        const dataArr = []
        weeklyData.forEach(data => {
            labelsArr.push(data['name'])
            dataArr.push(data['tot_amount'])
            
        })
        if(weeklyData.length !== 0)
            document.getElementById('stat-result-client-week').textContent = "Best client: " + labelsArr[0] + " " + dataArr[0] + "$"
        else {
            document.getElementById('stat-result-client-week').textContent = "No data this week"
        }

        const bestWeekClientData = {
            labels: labelsArr,
            datasets: [{
                label: 'Amount (in $)',
                data: dataArr,
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
        const bestClientWeekGraph = new Chart('best-client-week', {
            type: 'bar',
            data: bestWeekClientData,
            options: {
                scales: {
                    yAxes: [{ticks: {min: 0, max: (parseInt(dataArr[0]))}}]
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
                tooltips: {
                    //when hovered
                    enabled: true
                }
            }
        })
    })
}
getBestClientWeek()

const bestClientMonthUrl = "http://localhost/e-commerce/ecommerce-server/apis/best-client-month.php"

const getBestClientMonth = () => {
    axios.get(bestClientMonthUrl).then(response => {
        const monthlyData = response.data
        const labelsArr = []
        const dataArr = []
        monthlyData.forEach(data => {
            labelsArr.push(data['name'])
            dataArr.push(data['tot_amount'])
            
        })
        if(monthlyData.length !== 0)
            document.getElementById('stat-result-client-month').textContent = "Best client: " + labelsArr[0] + " " + dataArr[0] + "$"
        else {
            document.getElementById('stat-result-client-month').textContent = "No data this month"
        }
        const bestMonthClientData = {
            labels: labelsArr,
            datasets: [{
                label: 'Amount (in $)',
                data: dataArr,
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
        const bestClientMonthGraph = new Chart('best-client-month', {
            type: 'bar',
            data: bestMonthClientData,
            options: {
                scales: {
                    yAxes: [{ticks: {min: 0, max: parseInt(dataArr[0])}}]
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
                tooltips: {
                    //when hovered
                    enabled: true
                }
            }
        })
    })
}

getBestClientMonth()

const bestClientYearUrl = "http://localhost/e-commerce/ecommerce-server/apis/best-client-year.php"

const getBestClientYear = () => {
    axios.get(bestClientYearUrl).then(response => {
        const yearlyData = response.data
        const labelsArr = []
        const dataArr = []
        yearlyData.forEach(data => {
            labelsArr.push(data['name'])
            dataArr.push(data['tot_amount'])
            
        })
        if(yearlyData.length !== 0)
            document.getElementById('stat-result-client-year').textContent = "Best client: " + labelsArr[0] + " " + dataArr[0] + "$"
        else {
            document.getElementById('stat-result-client-year').textContent = "No data this year"
        }
        const bestClientYearData = {
            labels: labelsArr,
            datasets: [{
                label: 'Amount (in $)',
                data: dataArr,
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
        const bestClientYearGraph = new Chart('best-client-year', {
            type: 'bar',
            data: bestClientYearData,
            options: {
                scales: {
                    yAxes: [{ticks: {min: 0, max: parseInt(dataArr[0])}}]
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
                tooltips: {
                    //when hovered
                    enabled: true
                }
            }
        })
    })
}

getBestClientYear()

// general stats
const nbOfClientsUrl = "http://localhost/e-commerce/ecommerce-server/apis/latest-signed-clients.php"
const getNumberOfClients = () => {
    axios.get(nbOfClientsUrl).then(response => {
        const totNumber = response.data
        document.getElementById('stat-result-tot-clients').textContent = "Total Number of clients: " + totNumber['tot_clients']
        const dataArr = []
        dataArr.push(totNumber['counter_clients_q1'])
        dataArr.push(totNumber['counter_clients_q2'])
        dataArr.push(totNumber['counter_clients_q3'])
        dataArr.push(totNumber['counter_clients_q4'])
        const totClientData = {
            labels: ['Last year', 'Last Nine Months', 'Last Six Months', 'Last Three Months'],
            datasets: [{
                label: 'Client',
                data: dataArr,
                backgroundColor: 'rgba(50, 201, 156, 0.2)',
                borderColor: 'rgba(50, 201, 156, 1)',
                borderWidth: 1,
                hoverBorderWidth: 3,
                hoverBackgroundColor: 'rgba(50, 201, 156, 0.6)',
                tension: 0.3
            }],
        }

        const totalNbClients =  new Chart('tot-client', {
            type: 'line',
            data: totClientData,
            options: {
                scales: {
                    yAxes: [{ticks: {min: 0}}]
                },
                title: {
                    display: true,
                    text: "Latest Signed Clients",
                },
                legend: {
                    position: 'top',
                    labels: {
                        fontColor: '#000'
                    },
                },
                tooltips: {
                    //when hovered
                    enabled: true
                }
            }
        })
    })
}

getNumberOfClients()

const nbOfSellersUrl = "http://localhost/e-commerce/ecommerce-server/apis/latest-signed-sellers.php"
const getNumberOfSellers = () => {
    axios.get(nbOfSellersUrl).then(response => {
        const totNumber = response.data
        const dataArr = []
        document.getElementById('stat-result-tot-sellers').textContent = "Total Number of sellers: " + totNumber['tot_sellers']
        dataArr.push(totNumber['counter_sellers_q1'])
        dataArr.push(totNumber['counter_sellers_q2'])
        dataArr.push(totNumber['counter_sellers_q3'])
        dataArr.push(totNumber['counter_sellers_q4'])
        const totSellerData = {
            labels: ['Last year', 'Last Nine Months', 'Last Six Months', 'Last Three Months'],
            datasets: [{
                label: 'Seller',
                data: dataArr,
                backgroundColor: 'rgba(50, 201, 156, 0.2)',
                borderColor: 'rgba(50, 201, 156, 1)',
                borderWidth: 1,
                hoverBorderWidth: 3,
                hoverBackgroundColor: 'rgba(50, 201, 156, 0.6)',
                tension: 0.3
            }],
        }

        const totalNbSellers =  new Chart('tot-seller', {
            type: 'line',
            data: totSellerData,
            options: {
                scales: {
                    yAxes: [{ticks: {min: 0}}]
                },
                title: {
                    display: true,
                    text: "Latest Signed Clients",
                },
                legend: {
                    position: 'top',
                    labels: {
                        fontColor: '#000'
                    },
                },
                tooltips: {
                    //when hovered
                    enabled: true
                }
            }
        })
    })
}

getNumberOfSellers()

const nbOfProductsUrl = "http://localhost/e-commerce/ecommerce-server/apis/latest-signed-products.php"
const getNumberOfProducts = () => {
    axios.get(nbOfProductsUrl).then(response => {
        const totNumber = response.data
        const dataArr = []
        document.getElementById('stat-result-tot-products').textContent = "Total Number of products: " + totNumber['tot_products']
        dataArr.push(totNumber['counter_products_q1'])
        dataArr.push(totNumber['counter_products_q2'])
        dataArr.push(totNumber['counter_products_q3'])
        dataArr.push(totNumber['counter_products_q4'])
        const totProductData = {
            labels: ['Last year', 'Last Nine Months', 'Last Six Months', 'Last Three Months'],
            datasets: [{
                label: 'Product',
                data: dataArr,
                backgroundColor: 'rgba(50, 201, 156, 0.2)',
                borderColor: 'rgba(50, 201, 156, 1)',
                borderWidth: 1,
                hoverBorderWidth: 3,
                hoverBackgroundColor: 'rgba(50, 201, 156, 0.6)',
                tension: 0.3
            }],
        }

        const totalNbSellers =  new Chart('tot-products', {
            type: 'line',
            data: totProductData,
            options: {
                scales: {
                    yAxes: [{ticks: {min: 0}}]
                },
                title: {
                    display: true,
                    text: "Latest Entered Products",
                },
                legend: {
                    position: 'top',
                    labels: {
                        fontColor: '#000'
                    },
                },
                tooltips: {
                    //when hovered
                    enabled: true
                }
            }
        })
    })
}

getNumberOfProducts()