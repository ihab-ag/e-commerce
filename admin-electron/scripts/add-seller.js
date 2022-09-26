const addSellerUrl = "http://localhost/e-commerce/ecommerce-server/apis/add-seller.php"
const emailSellerCheckerNoUserUrl = "http://localhost/e-commerce/ecommerce-server/apis/check-email-no-user.php"
const sellerName = document.getElementById('add-seller-name')
const sellerEmail = document.getElementById('add-seller-email')
const sellerPhone = document.getElementById('add-seller-phone')
const sellerLocation = document.getElementById('add-seller-location')
const sellerPassword = document.getElementById('add-seller-pwd')

const addBtn = document.getElementById('add-btn')
const addSellerCaller = document.getElementById('add-table-caller')
const addSellerCanceler = document.getElementById('add-seller-canceler')
const addSellerContainer = document.getElementById('insert-container')
const inertSellerInputs = document.querySelectorAll('.seller-insert-inputs')

addSellerCaller.addEventListener('click', () => {
    addSellerContainer.classList.remove('view-none')
    addSellerCanceler.classList.remove('view-none')
    addSellerCaller.classList.add('view-none')
})

addSellerCanceler.addEventListener('click', () => {
    addSellerContainer.classList.add('view-none')
    addSellerCaller.classList.remove('view-none')
    addSellerCanceler.classList.add('view-none')
    inertSellerInputs.forEach(input => input.value = "")
})

addBtn.addEventListener('click', () => {
    if(!emptyFieldsValidation(sellerName.value, sellerEmail.value, sellerPhone.value, sellerLocation.value) || !sellerPassword.value) {
        setMessage('All Fields are required', false)
        return
    }else if (!nameValidation(sellerName.value)) {
        setMessage(`${sellerName.value} is not valid`, false)
        return
    }else if (!emailValidation(sellerEmail.value)) {
        setMessage(`${sellerEmail.value} is not valid email`, false)
        return
    }else if(!phoneValidation(sellerPhone.value)) {
        setMessage(`${sellerPhone.value} is not a valid phone`, false)
        return
    }else if(!locationValidation(sellerLocation.value)) {
        setMessage("location format is not valid", false)
        return
    }
    emailSellerChecker(sellerName.value, sellerEmail.value, sellerPhone.value, sellerLocation.value, sellerPassword.value)

})



const emailSellerChecker = (name, email, phone, location, pwd) => {
    const formData = new FormData()
    formData.append('seller_email', email)
    
    axios.post(emailSellerCheckerNoUserUrl, formData).then(response => {
        const checkEmail = response.data
        console.log(checkEmail)
        if(checkEmail.emailTaken) {
            setMessage('Email is taken', false)
            return
        }
        insertSeller(name, email, phone, location, pwd)
        setMessage("Seller added successfully", true)
        inertSellerInputs.forEach(input => input.value = "")
        addSellerContainer.classList.add('view-none')
        addSellerCaller.classList.remove('view-none')
        addSellerCanceler.classList.add('view-none')
    })
}

const insertSeller = (name, email, phone, location, pwd) => {
    console.log("call insert function")
    const formData = new FormData()
    formData.append('name', name)
    formData.append('pwd', pwd)
    formData.append('phone', phone)
    formData.append('location', location)
    formData.append('email', email)

    axios.post(addSellerUrl, formData).then((response) => {
        const nowInsert = response.data
        console.log("now insert", nowInsert)
        deleteSellerRows()
        getAllSellers()
    })
}  