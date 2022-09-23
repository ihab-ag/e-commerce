const addSellerUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/add-seller.php"
const emailSellerCheckerNoUserUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/check-email-no-user.php"
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
        setMessage(`${sellerEmail.value} is not valid`, false)
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
        getAllSellers()
        //createSellerRowAtFirst(nowInsert.seller_id, name, email, phone, location)
    })
}  


// const createSellerRowAtFirst = (id, name, email, phone, location) => {
//     const tr = document.createElement('tr')
//     tr.setAttribute('id', `seller-row-${id}`)

//     const sellerIdTd = document.createElement('td')
//     sellerIdTd.textContent = id

//     const nameTd = document.createElement('td')
//     const nameInput = document.createElement('input')
//     nameInput.setAttribute('class', `btn-seller-${id}`)
//     nameInput.setAttribute('type', 'text')
//     nameInput.setAttribute('name', 'name')
//     nameInput.setAttribute('id', `seller-name-${id}`)
//     nameInput.setAttribute('disabled', true)
//     nameInput.setAttribute('value', `${name}`)  
//     nameTd.appendChild(nameInput)

//     const emailTd = document.createElement('td')
//     const emailInput = document.createElement('input')
//     emailInput.setAttribute('class', `btn-seller-${id}`)
//     emailInput.setAttribute('type', 'text')
//     emailInput.setAttribute('name', 'email')
//     emailInput.setAttribute('id', `seller-email-${id}`)
//     emailInput.setAttribute('disabled', true)
//     emailInput.setAttribute('value', `${email}`)
//     emailTd.appendChild(emailInput)

//     const phoneTd = document.createElement('td')
//     const phoneInput = document.createElement('input')
//     phoneInput.setAttribute('class', `btn-seller-${id}`)
//     phoneInput.setAttribute('type', 'text')
//     phoneInput.setAttribute('name', 'phone')
//     phoneInput.setAttribute('id', `seller-phone-${id}`)
//     phoneInput.setAttribute('disabled', true)
//     phoneInput.setAttribute('value', `${phone}`)
//     phoneTd.appendChild(phoneInput)

//     const locationTd = document.createElement('td')
//     const locationInput = document.createElement('input')
//     locationInput.setAttribute('class', `btn-seller-${id}`)
//     locationInput.setAttribute('type', 'text')
//     locationInput.setAttribute('name', 'location')
//     locationInput.setAttribute('id', `seller-location-${id}`)
//     locationInput.setAttribute('disabled', true)
//     locationInput.setAttribute('value', `${location}`)
//     locationTd.appendChild(locationInput)

//     const btnsTd = document.createElement('td')
//     const btnDiv = document.createElement('div')
//     btnDiv.setAttribute('class', 'btn-wrapper')
//     const btnEdit = document.createElement('button')
//     btnEdit.setAttribute('class', 'btn btn-edit')
//     btnEdit.setAttribute('id', `btn-edit-${id}`)
//     btnEdit.textContent = "Edit"

//     const btnEditConfirm = document.createElement('button')
//     btnEditConfirm.setAttribute('class', 'btn btn-confirm view-none')
//     btnEditConfirm.setAttribute('id', `btn-edit-${id}-confirm`)
//     btnEditConfirm.textContent = "Confirm"

//     const btnDelete = document.createElement('button')
//     btnDelete.setAttribute('class', 'btn btn-ban') // Moatasem removed the view-none
//     btnDelete.setAttribute('id', `btn-delete-${id}`)
//     btnDelete.textContent = "Delete"
    
//     const btnDeleteConfirm = document.createElement('button')
//     btnDeleteConfirm.setAttribute('class', 'btn btn-confirm view-none')
//     btnDeleteConfirm.setAttribute('id', `btn-delete-${id}-confirm`)
//     btnDeleteConfirm.textContent = "Confirm"

//     btnDiv.appendChild(btnEdit)
//     btnDiv.appendChild(btnEditConfirm)
//     btnDiv.appendChild(btnDelete)
//     btnDiv.appendChild(btnDeleteConfirm)

//     btnsTd.appendChild(btnDiv)

//     tr.appendChild(sellerIdTd)
//     tr.appendChild(nameTd)
//     tr.appendChild(emailTd)
//     tr.appendChild(phoneTd)
//     tr.appendChild(locationTd)
//     tr.appendChild(btnsTd)
//     document.getElementById('seller-headers').parentNode.insertBefore(tr, document.getElementById('seller-headers').nextSibling);
    
// }