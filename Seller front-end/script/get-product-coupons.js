const getProductUrl = "http://localhost/e-commerce/ecommerce-server/apis/get-products.php"
const selectProduct = document.getElementById('coupon-product-name')

const getProductNames = () => {
    const dataForm = new FormData()
    dataForm.append('seller_id', localStorage.getItem('sellers_id'))

    axios.post(getProductUrl, dataForm).then(response => {
        const products = response.data
        products.forEach(product => {
            const option = document.createElement('option')
            option.setAttribute('class', 'coupon-categories')
            option.setAttribute('value', product['id'])
            option.textContent = product['name']
            selectProduct.appendChild(option)
        })
    })
}

getProductNames()

const submitCoupon = document.getElementById('submit-coupon')
const couponCode = document.getElementById('coupon-code')
const discountCoupon = document.getElementById('discount')
const selectVal = document.getElementById('coupon-product-name')

const addDiscountUrl = "http://localhost/e-commerce/ecommerce-server/apis/add-discount.php"

submitCoupon.addEventListener('click',(e) => {
    e.preventDefault()
    if(!couponCode.value || !selectVal.value || !discountCoupon.value) {
        setMessage('All Fields are required', false)
        return
    }else if(discountCoupon.value <= 0 || discountCoupon.value > 100) {
        setMessage("Discount between 0 and 100", false)
        return
    } 
    
    const dataForm = new FormData()
    dataForm.append('products_id', selectVal.value)
    dataForm.append('amount', discountCoupon.value)
    dataForm.append('code', couponCode.value)
    axios.post(addDiscountUrl, dataForm).then(response => {
        setMessage("Discount code is added", true)
        discountCoupon.value = ""
        couponCode.value = ""
        selectVal.selectedIndex = 0
    })

})