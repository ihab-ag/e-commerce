const getAllClientsUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/view-clients.php"
const clientTable = document.getElementById('client-table')


const getAllClients = () => {
    axios.get(getAllClientsUrl).then(response => {
        const clients = response.data
        console.log(clients)
        clients.forEach(client => {
            createClientRow(client.id, client.name, client.email, client.phone, client.joined_date)
        });
        
    }).catch(error => console.error(error))
}

getAllClients()

const createClientRow = (id, name, email, phone, joined_date) => {
    const tr = document.createElement('tr')

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
    btnUnBan.setAttribute('class', 'btn btn-ban view-none')
    btnUnBan.setAttribute('id', `ban-client-${id}`)
    btnUnBan.textContent = "unBan"

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