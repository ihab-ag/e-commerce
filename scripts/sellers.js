const getAllSellersUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/view-sellers.php"
const deleteSellerUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/delete-seller.php"
const editSellerUrl = "http://localhost/9-sefactory/e-commerce/ecommerce-server/apis/update-seller.php"


const getAllSellers = () => {
    axios.get(getAllSellersUrl).then(response => {
        const sellers = response.data
        console.log(sellers)
        sellers.forEach(seller => {
            
        });
    })
}

getAllSellers()

const createSellerRow = (id, name, email, phone, location) => {
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