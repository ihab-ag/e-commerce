const getProductUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/get-products.php"
const selectProduct = document.getElementById('coupon-product-name')

const getProductNames = () => {
    const dataForm = new FormData()
    dataForm.append('seller_id', localStorage.getItem('sellers_id'))

    axios.post(getProductUrl, dataForm).then(response => {
        const products = response.data
        //console.log(products)
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

submitCoupon.addEventListener('click',(e) => {
    e.preventDefault()

})