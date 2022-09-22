const addSellerUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/add-seller.php"
const emailSellerCheckerNoUserUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/check-email-no-user.php"
const sellerName = document.getElementById('add-seller-name').value
const sellerEmail = document.getElementById('add-seller-email').value
const sellerPhone = document.getElementById('add-seller-phone').value
const sellerLocation = document.getElementById('add-seller-location').value
const sellerPassword = document.getElementById('add-seller-pwd').value

const addBtn = document.getElementById('add-btn')
const addSellerCaller = document.getElementById('add-table-caller')
const addSellerCanceler = document.getElementById('add-seller-canceler')
const addSellerContainer = document.getElementById('insert-container')

addSellerCaller.addEventListener('click', () => {
    addSellerContainer.classList.remove('view-none')
    addSellerCanceler.classList.remove('view-none')
    addSellerCaller.classList.add('view-none')
})

addSellerCanceler.addEventListener('click', () => {
    addSellerContainer.classList.add('view-none')
    addSellerCaller.classList.remove('view-none')
    addSellerCanceler.classList.add('view-none')
})

addBtn.addEventListener('click', () => {
    if(!emptyFieldsValidation(sellerName, sellerEmail, sellerPhone, sellerLocation) || !sellerPassword) {
        setMessage('All Fields are required', false)
        return
    }else if (!nameValidation(sellerName)) {
        setMessage(`${sellerName} is not valid`, false)
        return
    }else if (!emailValidation(sellerEmail)) {
        setMessage(`${sellerEmail} is not valid`, false)
        return
    }else if(!phoneValidation(sellerPhone)) {
        setMessage(`${sellerPhone} is not a valid phone`, false)
        return
    }else if(!locationValidation(sellerLocation)) {
        setMessage("location format is not valid", false)
        return
    }
    const emailSellerChecker = (email) => {
        const formData = new FormData()
        formData.append('seller_email', email)
        
        axios.post(emailSellerCheckerNoUserUrl, formData).then(response => {
            const checkEmail = response.data
            console.log(checkEmail)
            if(checkEmail.emailTaken) {
                setMessage('Email is taken', false)
                return
            }
            insertSeller(sellerName, sellerEmail, sellerPhone, sellerLocation, sellerPassword)
            setMessage("Seller added successfully")
        })
    }
    emailSellerChecker(sellerEmail)
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