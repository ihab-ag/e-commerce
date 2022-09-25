const startDate = document.getElementById('start-date')
const endDate = document.getElementById('end-date')
const totRevenue = document.querySelector('.total-revenue')
const btnCalcRevenue = document.getElementById('btn-calc-rev')
const getRevenueUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/get-revenue.php"

const getRevenue = () => {
    const dataForm = new FormData()
    dataForm.append('id', localStorage.getItem('sellers_id'))
    dataForm.append('start_date', startDate.value)
    dataForm.append('end_date', endDate.value)

    axios.post(getRevenueUrl, dataForm).then(response => {
        const rev = response.data
        console.log(rev)
        totRevenue.textContent = rev['revenue']
    })
}


btnCalcRevenue.addEventListener('click', (e) => {
    e.preventDefault()
    if(!startDate.value || !endDate.value) {
        setMessage('Please Input the dates', false)
        return
    }

    getRevenue()
})