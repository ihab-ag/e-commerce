const addClientUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/add-client.php"
const emailClientCheckerUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/check-client-email.php"
const clientName = document.getElementById('add-client-name')
const clientEmail = document.getElementById('add-client-email')
const clientPhone = document.getElementById('add-client-phone')
const clientPassword = document.getElementById('add-client-pwd')

const addClientBtn = document.getElementById('add-client-btn')
const addClientCaller = document.getElementById('add-client-table-caller')
const addClientCanceler = document.getElementById('add-client-canceler')
const addClientContainer = document.getElementById('insert-client-container')
const insertClientInputs = document.querySelectorAll('.client-insert-inputs')

addClientCaller.addEventListener('click', () => {
    console.log("client click")
    addClientContainer.classList.remove('view-none')
    addClientCanceler.classList.remove('view-none')
    addClientCaller.classList.add('view-none')
})

addClientCanceler.addEventListener('click', () => {
    addClientContainer.classList.add('view-none')
    addClientCaller.classList.remove('view-none')
    addClientCanceler.classList.add('view-none')
    insertClientInputs.forEach(input => input.value = "")
})

addClientBtn.addEventListener('click', () => {
    if(!clientName.value|| !clientEmail.value|| !clientPhone.value || !clientPassword.value) {
        setMessage('All Fields are required', false)
        return
    }else if (!nameValidation(clientName.value)) {
        setMessage(`${clientName.value} is not valid`, false)
        return
    }else if (!emailValidation(clientEmail.value)) {
        setMessage(`${clientEmail.value} is not valid email`, false)
        return
    }else if(!phoneValidation(clientPhone.value)) {
        setMessage(`${clientPhone.value} is not a valid phone`, false)
        return
    }
    emailClientChecker(clientName.value, clientEmail.value, clientPhone.value, clientPassword.value)

})



const emailClientChecker = (name, email, phone, pwd) => {
    const formData = new FormData()
    formData.append('client_email', email)
    
    axios.post(emailClientCheckerUrl, formData).then(response => {
        const checkEmail = response.data
        console.log(checkEmail)
        if(checkEmail.emailTaken) {
            setMessage('Email is taken', false)
            return
        }
        insertClient(name, email, phone, pwd)
        setMessage("Client added successfully", true)
        insertClientInputs.forEach(input => input.value = "")
        addClientContainer.classList.add('view-none')
        addClientCaller.classList.remove('view-none')
        addClientCanceler.classList.add('view-none')
    })
}

const insertClient = (name, email, phone, pwd) => {
    console.log("call insert function")
    const formData = new FormData()
    formData.append('name', name)
    formData.append('pwd', pwd)
    formData.append('phone', phone)
    formData.append('email', email)

    axios.post(addClientUrl, formData).then((response) => {
        const nowInsert = response.data
        console.log("now insert", nowInsert)
        deleteClientRows()
        getAllClients()
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