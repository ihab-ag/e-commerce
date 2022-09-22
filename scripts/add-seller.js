const addSellerUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/add-seller.php"
const sellerName = document.getElementById('add-seller-name').value
const sellerEmail = document.getElementById('add-seller-email').value
const sellerPhone = document.getElementById('add-seller-phone').value
const sellerLocation = document.getElementById('add-seller-location').value
const sellerPassword = document.getElementById('add-seller-pwd').value

const addBtn = document.getElementById('add-btn')
const addSellerCaller = document.getElementById('add-table-caller')
const addSellerCanceler = document.getElementById('add-seller-canceler')

addSellerCaller.addEventListener('click', () => {
    
})

const insertSeller = (name, email, phone, location, pwd) => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('pwd', pwd)
    formData.append('phone', phone)
    formData.append('location', location)
    formData.append('email', email)

    axios.post(addSellerUrl, formData).then((response) => {
        const nowInsert = response.data
        console.log(nowInsert)
    })
}  