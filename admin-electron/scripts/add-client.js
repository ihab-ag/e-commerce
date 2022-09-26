const addClientUrl = "http://localhost/e-commerce/ecommerce-server/apis/add-client.php"
const emailClientCheckerUrl = "http://localhost/e-commerce/ecommerce-server/apis/check-client-email.php"
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
    })
}  