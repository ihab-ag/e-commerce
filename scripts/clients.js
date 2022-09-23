const getAllClientsUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/view-clients.php"
const banClientUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/ban-client.php"
const checkClientBannedUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/check-client-banned.php"
const unBanClientUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/unban-client.php"
const searchClientUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/search-client.php"
const clientTable = document.getElementById('client-table')
const searchClient = document.getElementById('client-search')

const getAllClients = () => {
    axios.get(getAllClientsUrl).then(response => {
        const clients = response.data
        console.log(clients)
        clients.forEach(client => {
            createClientRow(client.id, client.name, client.email, client.phone, client.joined_date)
            const banClientBtn = document.getElementById(`ban-client-${client.id}`)
            const unBanClientBtn = document.getElementById(`unban-client-${client.id}`)
            const banClientConfirmBtn = document.getElementById(`ban-client-${client.id}-confirm`)

            banClientBtn.addEventListener('click', () => {
                banClientConfirmBtn.classList.remove('view-none')
                banClientBtn.classList.add('view-none')
                unBanClientBtn.classList.add('view-none')
            })

            banClientConfirmBtn.addEventListener('mouseleave', () => {
                // console.log('mouse-leave')
                if(unBanClientBtn.classList.contains('view-none')) {
                    // console.log("if")
                    banClientBtn.classList.remove('view-none')
                    banClientConfirmBtn.classList.add('view-none')
                }else {
                    // console.log('else')
                    banClientBtn.classList.add('view-none')
                }
            })

            banClientConfirmBtn.addEventListener('click', () => {
                unBanClientBtn.classList.remove('view-none')
                banClientBtn.classList.add('view-none')
                banClientConfirmBtn.classList.add('view-none')
                banClient(client.id) // post api that ban user
                setMessage('Client is banned', false)
            })


            unBanClientBtn.addEventListener('click', () => {
                banClientBtn.classList.remove('view-none')
                unBanClientBtn.classList.add('view-none')
                unBanClient(client.id) // post api that un-ban user
                setMessage('Client is Unbanned', true)
            })
        });
        
    }).catch(error => console.error(error))
}

getAllClients()


const banClient = (clientID) => {
    const formData = new FormData()
    formData.append('client_id', clientID)

    axios.post(banClientUrl, formData).then((response) => {
        const nowBanned = response.data
        console.log(nowBanned)
    })
}

const unBanClient = (clientID) => {
    const formData = new FormData()
    formData.append('client_id', clientID)
    
    axios.post(unBanClientUrl, formData).then(response => {
        const unBan = response.data
        console.log(unBan)
    })
}

searchClient.addEventListener('input', () => {
    deleteClientRows()

    if(!searchClient.value) {
        getAllClients()
        return
    }
        searchForClient(searchClient.value)
    
})

const searchForClient = (search) => {
    const formData = new FormData()
    formData.append('client_search', search)
    
    axios.post(searchClientUrl, formData).then(response => {
        const specificClients = response.data
        console.log(specificClients)
        specificClients.forEach(client => {
            createClientRow(client.id, client.name, client.email, client.phone, client.joined_date)
        })
    })
}
const deleteClientRows = () => {
    const rows = document.querySelectorAll('.client-rows')
    rows.forEach(row => {
        row.remove()
    })
}

const createClientRow = (id, name, email, phone, joined_date) => {
    const tr = document.createElement('tr')
    tr.setAttribute('class', 'client-rows')

    const clientIdTd = document.createElement('td')
    clientIdTd.textContent = id

    const nameTd = document.createElement('td')
    const nameInput = document.createElement('input')
    nameInput.setAttribute('class', `btn-client-${id}`)
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('name', 'name')
    nameInput.setAttribute('id', `client-name-${id}`)
    nameInput.setAttribute('disabled', true)
    nameInput.setAttribute('value', `${name}`)  
    nameTd.appendChild(nameInput)

    const emailTd = document.createElement('td')
    const emailInput = document.createElement('input')
    emailInput.setAttribute('class', `btn-client-${id}`)
    emailInput.setAttribute('type', 'text')
    emailInput.setAttribute('name', 'email')
    emailInput.setAttribute('id', `client-email-${id}`)
    emailInput.setAttribute('disabled', true)
    emailInput.setAttribute('value', `${email}`)
    emailTd.appendChild(emailInput)

    const phoneTd = document.createElement('td')
    const phoneInput = document.createElement('input')
    phoneInput.setAttribute('class', `btn-client-${id}`)
    phoneInput.setAttribute('type', 'text')
    phoneInput.setAttribute('name', 'phone')
    phoneInput.setAttribute('id', `client-phone-${id}`)
    phoneInput.setAttribute('disabled', true)
    phoneInput.setAttribute('value', `${phone}`)
    phoneTd.appendChild(phoneInput)

    const dateTd = document.createElement('td')
    dateTd.textContent =joined_date

    const btnsTd = document.createElement('td')
    const btnDiv = document.createElement('div')
    btnDiv.setAttribute('class', 'btn-wrapper')

    const btnBan = document.createElement('button')
    btnBan.setAttribute('class', 'btn btn-ban')
    btnBan.setAttribute('id', `ban-client-${id}`)
    btnBan.textContent = "Ban"

    const btnConfirm = document.createElement('button')
    btnConfirm.setAttribute('class', 'btn btn-ban view-none')
    btnConfirm.setAttribute('id', `ban-client-${id}-confirm`)
    btnConfirm.textContent = "Confirm"

    const btnUnBan = document.createElement('button')
    btnUnBan.setAttribute('class', 'btn btn-ban') // Moatasem removed the view-none
    btnUnBan.setAttribute('id', `unban-client-${id}`)
    btnUnBan.textContent = "unBan"
    
    const checkClientIfBanned = (clientID) => {
        const formData = new FormData()
        formData.append('client_id', clientID)
    
        axios.post(checkClientBannedUrl, formData).then(response => {
            const isBanned = response.data
            //console.log(isBanned.banned)
            if(isBanned.banned) {// if client is banned
                //we should have the option to un-ban him
                btnBan.classList.add('view-none')
            }else {
                btnUnBan.classList.add('view-none')
            }
        })
    }
    checkClientIfBanned(id)
    btnDiv.appendChild(btnBan)
    btnDiv.appendChild(btnConfirm)
    btnDiv.appendChild(btnUnBan)

    btnsTd.appendChild(btnDiv)

    tr.appendChild(clientIdTd)
    tr.appendChild(nameTd)
    tr.appendChild(emailTd)
    tr.appendChild(phoneTd)
    tr.appendChild(dateTd)
    tr.appendChild(btnsTd)

    clientTable.appendChild(tr)
    
}